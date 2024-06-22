import { type MqttClient, connect, IClientOptions } from "mqtt";

export default function test() {
  const topic = "solarTopic";
  const client = connect("mqtt://test.mosquitto.org");

  client.on("connect", () => {
    console.log("Connected");
    client.subscribe("solarTopic", (err) => {
      if (!err) {
        client.publish("solarTopic", "Hello mqttdd");
      }
    });
  });

  client.on("message", (topic, message) => {
    // message is Buffer
    console.log(`Received message: ${message.toString()}`);
  });
}
