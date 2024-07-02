// This file emulates the publisher of the MQTT protocol.
// This will be on the raspberry pi and will be responsible for sending the data to the broker.
import { type MqttClient, connect } from "mqtt";
import { MQTTOptions } from "./main";
import ITelemetryData, { generateFakeTelemetryData } from "./utils";

const packetTopic = "packet";
const pingTopic = "ping";
export class SolarMQTTPublisher {
  client: MqttClient;
  constructor(options: MQTTOptions) {
    this.client = connect(options.url);
    this.initializeListeners(this.client);
  }
  private generateNewPacket() {
    const myPacket: ITelemetryData = generateFakeTelemetryData();
    return myPacket;
  }
  private sendPacketEverySecond() {
    setInterval(() => {
      const vehiclePacket = this.generateNewPacket();
      this.client.publish(packetTopic, JSON.stringify(vehiclePacket));
    }, 1000);
  }
  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(packetTopic, (error) => {
        if (!error) {
          console.log("Connected to broker");
          this.sendPacketEverySecond();
        } else {
          console.error("Subscription error: ", error);
        }
      });
      client.subscribe(pingTopic, (error) => {
        if (!error) {
        } else {
          console.error("Subscription error: ", error);
        }
      });
    });
    client.on("message", (topic, message) => {
      if (topic === pingTopic) {
        console.log("publisher: ", message.toString());
      }
    });
  }
}
