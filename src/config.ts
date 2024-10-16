import { IClientOptions } from "mqtt/*";

export const options: IClientOptions = {
  password: "hasAedes",
  protocol: "tcp",
  // host: "127.0.0.1",
  host: "aedes.calgarysolarcar.ca",
  port: 1883,
  protocolVersion: 3,
  username: "urMom",
};
export const topics = {
  packetTopic: "packet",
  pingTopic: "ping",
  pongTopic: "pong",
};
