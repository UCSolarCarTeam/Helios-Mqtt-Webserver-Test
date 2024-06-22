import { SolarMQTTPublisher } from "./SolarMQTTPublisher";
import { SolarMQTTClient } from "./SolarMQTTClient";

export default function main() {
  const thankYouViscom = new SolarMQTTPublisher();
  const mqttClient = new SolarMQTTClient();
}
