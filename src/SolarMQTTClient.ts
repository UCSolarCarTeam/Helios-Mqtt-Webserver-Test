import { type MqttClient, connect } from "mqtt";
import { MQTTOptions } from "./main";
import ITelemetryData from "./utils";

const packetTopic = "packet";
const myMessage = "Connection established";
const pingTopic = "ping";
export class SolarMQTTClient {
  client: MqttClient;
  constructor(options: MQTTOptions) {
    this.client = connect(options.url);
    this.initializeListeners(this.client);
  }
  private pingTimer(miliseconds: number) {
    setInterval(() => {
      this.client.publish(pingTopic, myMessage);
    }, miliseconds);
  }
  private calculateLatency(packet: ITelemetryData) {
    const currentTime = Date.now();
    const vehicleToClientLatency = currentTime - packet.TimeStamp;
    console.log("Vehicle to Client Latency: ", vehicleToClientLatency, "ms");
  }
  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(packetTopic, (error) => {
        if (!error) {
        } else {
          console.error("Subscription error: ", error);
        }
      });
      this.pingTimer(5000);
    });
    client.on("message", (topic, message) => {
      if (topic === pingTopic) {
        console.log("Current Ping: ", message.toString());
      } else if (topic === packetTopic) {
        const packet: ITelemetryData = JSON.parse(message.toString());
        // handle packet...
        this.calculateLatency(packet);
      } else {
        console.log("unknown topic: ", topic, "message: ", message.toString());
      }
    });
  }
}
