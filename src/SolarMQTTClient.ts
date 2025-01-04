import { topics } from "./config";
import { IClientOptions, type MqttClient, connect } from "mqtt";
import { ITelemetryData } from "./types";
const { packetTopic, pingTopic } = topics;
export class SolarMQTTClient {
  client: MqttClient;
  constructor(options: IClientOptions) {
    this.client = connect(options);
    this.initializeListeners(this.client);
  }
  private pingTimer(miliseconds: number) {
    const myMessage = "Connection established";
    setInterval(() => {
      this.client.publish(pingTopic, myMessage);
    }, miliseconds);
  }
  private calculateLatency(packet: ITelemetryData) {
    const currentTime = Date.now();
    const vehicleToClientLatency = currentTime - Number(packet.TimeStamp);
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
