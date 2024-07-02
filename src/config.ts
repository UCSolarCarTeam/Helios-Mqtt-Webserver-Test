import { IClientOptions } from "mqtt/*";

export type MQTTOptions = IClientOptions & { url: string };
export const options: MQTTOptions = {
  url: `mqtt://test.mosquitto.org:1883`,
};
export const topics = {
  packetTopic: "packet",
  pingTopic: "ping",
};
