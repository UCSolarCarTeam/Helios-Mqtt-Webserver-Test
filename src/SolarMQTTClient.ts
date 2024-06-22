import { type MqttClient, connect } from "mqtt";

const options = "mqtt://test.mosquitto.org";
const myTopic = "solarTopic";
export class SolarMQTTClient {
  client: MqttClient;
  constructor() {
    this.client = connect(options);
    this.initializeListeners(this.client);
  }

  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(myTopic, (error) => {
        if (!error) {
          client.publish(myTopic, "Hello, world! from Client");
        } else {
          console.error("Subscription error: ", error);
        }
      });
    });
    client.on("message", (topic, message) => {
      console.log("Client: ", message.toString());
    });
  }
}
