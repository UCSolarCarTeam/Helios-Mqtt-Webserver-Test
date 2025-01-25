import { IClientOptions } from "mqtt/*";
import dotenv from "dotenv";

dotenv.config();

export const options: IClientOptions = {
  password: process.env.MQTT_PASSWORD,
  protocol: "tcp",
  host: "localhost",
  port: 1883,
  protocolVersion: 3,
  username: process.env.MQTT_USERNAME,
};
export const topics = {
  packetTopic: "packet",
  pingTopic: "ping",
  pongTopic: "pong",
};
