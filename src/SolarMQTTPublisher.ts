import { topics } from "./config";
// This file emulates the publisher of the MQTT protocol.
// This will be on the raspberry pi and will be responsible for sending the data to the broker.
import { IClientOptions, type MqttClient, connect } from "mqtt";
import ITelemetryData, { generateFakeTelemetryData } from "./utils";
const { packetTopic, pingTopic, pongTopic } = topics;
export class SolarMQTTPublisher {
  client: MqttClient;
  constructor(options: IClientOptions) {
    this.client = connect(options);
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
      client.subscribe([packetTopic, pingTopic], (error) => {
        if (!error) {
          console.log("Connected to broker");
          this.sendPacketEverySecond();
        } else {
          console.error("Subscription error: ", error);
        }
      });
    });
    client.on("message", (topic, message) => {
      if (topic === pingTopic) {
        console.log("received ping! Sending pong...", message.toString());
        client.publish(pongTopic, "");
      }
    });
  }
}
