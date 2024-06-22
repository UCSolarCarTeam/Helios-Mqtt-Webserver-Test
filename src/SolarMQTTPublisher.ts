// This file emulates the publisher of the MQTT protocol.
// This will be on the raspberry pi and will be responsible for sending the data to the broker.
import { type MqttClient, connect } from "mqtt";

const options = "mqtt://test.mosquitto.org";
const myTopic = "solarTopic";
export class SolarMQTTPublisher {
  client: MqttClient;
  constructor() {
    this.client = connect(options);
    this.initializeListeners(this.client);
  }

  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(myTopic, (error) => {
        if (!error) {
          client.publish(myTopic, "Hello, world! from publisher");
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
