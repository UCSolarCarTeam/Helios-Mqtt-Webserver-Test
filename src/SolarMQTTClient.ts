import { type MqttClient, connect } from "mqtt";
import { MQTTOptions } from "./main";

const myTopic = "solarTopic";
const myMessage = "Hello, world! from Client";
export class SolarMQTTClient {
  client: MqttClient;
  constructor(options: MQTTOptions) {
    this.client = connect(options.url);
    this.initializeListeners(this.client);
  }

  private initializeListeners(client: MqttClient) {
    client.on("connect", () => {
      client.subscribe(myTopic, (error) => {
        if (!error) {
          client.publish(myTopic, myMessage);
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
