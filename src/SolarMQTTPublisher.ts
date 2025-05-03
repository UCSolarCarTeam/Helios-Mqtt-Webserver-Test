import { topics } from "./config";
// This file emulates the publisher of the MQTT protocol.
// This will be on the raspberry pi and will be responsible for sending the data to the broker.
import { IClientOptions, type MqttClient, connect } from "mqtt";
import { generateFakeLapData, generateFakeTelemetryData } from "./utils";
import { ILapData, ITelemetryData } from "./types";
import { Hydrated_Grand_Full_course } from "./MapData";
const { packetTopic, pingTopic, pongTopic, telemetryToCarTopic } = topics;
const args = process.argv.slice(2);

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
  private generateNewLapPacket() {
    const myPacket: ILapData = generateFakeLapData();
    return myPacket;
  }
  private sendPacketEverySecond() {
    const packets = Hydrated_Grand_Full_course;
    const packetCount = packets.length;
    let currentPacketIndex = 0;
    setInterval(() => {
      if (args.includes("--verbose")) {
        console.log("Verbose mode is enabled");
      }

      if (args.includes("--port")) {
        const portIndex = args.indexOf("--port");
        const port = args[portIndex + 1];
        console.log(`Server will run on port: ${port}`);
      }
      if (currentPacketIndex >= packetCount) {
        currentPacketIndex = 0;
      }
      const packet =
        args.includes("--lap") || args.includes("--l")
          ? this.generateNewLapPacket()
          : args.includes("--no-map")
          ? this.generateNewPacket()
          : packets[currentPacketIndex];
      this.client.publish(packetTopic, JSON.stringify(packet));
      currentPacketIndex++;
    }, 1000);
  }
  private initializeListeners(client: MqttClient) {
    this.client.on("connect", () => {
      client.subscribe(
        [packetTopic, pingTopic, telemetryToCarTopic],
        (error) => {
          if (!error) {
            console.log("Connected to broker");
            this.sendPacketEverySecond();
          } else {
            console.error("Subscription error: ", error);
          }
        }
      );
    });
    this.client.on("message", (topic, message) => {
      if (topic === pingTopic) {
        console.log("received ping! Sending pong...", message.toString());
        client.publish(pongTopic, "");
      } else if (topic === telemetryToCarTopic) {
        if (
          message !== null &&
          message !== undefined &&
          message.toString().trim() !== ""
        ) {
          try {
            const packet: ITelemetryData = JSON.parse(message.toString());
            console.log("Received telemetry data from car: ", packet);
          } catch (error) {
            console.error("Failed to parse telemetry data:", error);
          }
        } else {
          console.log("Received data is null or empty");
        }
      }
    });
  }
}
