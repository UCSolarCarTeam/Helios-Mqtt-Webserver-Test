import { SolarMQTTPublisher } from "./SolarMQTTPublisher";
import { SolarMQTTClient } from "./SolarMQTTClient";
import { IClientOptions } from "mqtt/*";
import { url } from "./config";

export type MQTTOptions = IClientOptions & { url: string };
export default function main() {
  const options: MQTTOptions = {
    url: url,
  };
  const thankYouViscom = new SolarMQTTPublisher(options);
  const mqttClient = new SolarMQTTClient(options);
}
