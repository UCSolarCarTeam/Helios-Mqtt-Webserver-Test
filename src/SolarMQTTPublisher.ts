// This file emulates the publisher of the MQTT protocol.
// This will be on the raspberry pi and will be responsible for sending the data to the broker.
import { type MqttClient, connect } from "mqtt";
import { MQTTOptions } from "./main";
import { generateFakeTelemetryData } from "./utils";

const myTopic = "solarTopic";
export class SolarMQTTPublisher {
  client: MqttClient;
  constructor(options: MQTTOptions) {
    this.client = connect(options.url);
    this.initializeListeners(this.client);
  }
  private generateNewPacket() {
    // const myPacket = {
    //   timestamp: new Date().getUTCSeconds(),
    //   data: (Math.random() * 100).toFixed(2),
    // };
    const myPacket = JSON.stringify(generateFakeTelemetryData());
    return myPacket;
  }
  private sendPacketEverySecond() {
    setInterval(() => {
      const myPacket = this.generateNewPacket();
      this.client.publish(myTopic, JSON.stringify(myPacket));
    }, 1000);
  }
  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(myTopic, (error) => {
        if (!error) {
          this.sendPacketEverySecond();
        } else {
          console.error("Subscription error: ", error);
        }
      });
    });
    client.on("message", (topic, message) => {
      console.log("publisher: ", message.toString());
    });
  }
}
