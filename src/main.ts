import { SolarMQTTPublisher } from "./SolarMQTTPublisher";
import { SolarMQTTClient } from "./SolarMQTTClient";
import { options } from "./config";

export default function main() {
  const thankYouViscom = new SolarMQTTPublisher(options);
  // const mqttClient = new SolarMQTTClient(options);
}
