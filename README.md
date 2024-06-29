# Helios-Mqtt-Webserver-Test

This tool is used to test the MQTT functionality of the Helios Telemetry Server.

MQTT (Message Queuing Telemetry Transport) is a communication protocol designed for lightweight and fast data transfer between clients. Here are some key terminologies:

- **Subscriber** : Clients that connect to the broker and listen for messages. Once a message is available, the broker sends it to all subscribers. MQTT efficiently handles communication between the server and numerous subscribers.
- **Publisher** : Any client that connects to the broker and pushes a new message to be broadcasted to all subscribers. For example, Helios can publish vehicle data to the server.
- **Broker** : The intermediary between subscribers and publishers. The broker manages incoming data from publishers and distributes it to subscribers.
- **Aedes** : An npm library that implements the MQTT protocol as a server.
- **Topic** : A connection string that segregates different types of messages on the broker, similar to a channel. Topics categorize information being published and subscribed to on the server.

## How to use this tool

1. Run npm i
2. update config.ts
3. run npm run dev

## Why do we need MQTT?

The Calgary Solar Car team uses the MQTT protocol to effectively communicate between Helios, the Solar Car, and the [Telemetry server](https://github.com/UCSolarCarTeam/Helios-Telemetry). Helios transmits data such as speed, battery percentage, fault data, etc., in 5kb packets. These packets are then sent to the server where the Telemetry team can process the data and view it in real time. To reliably send and receive this data on the server, MQTT is implemented instead of other communication protocols such as HTTP to address several issues:

- **Efficiency** : MQTT messages are smaller and are binary-based, unlike HTTP.
- **Bandwidth** : MQTT is efficient in bandwidth usage due to its lightweight nature.
- **Reliability** : MQTT utilizes TCP rather than UDP, ensuring messages are delivered and not lost, especially over long distances.
- **Communication Model** : MQTT implements a publish/subscribe model rather than a request/response model, which is ideal when connected clients need to receive the same message.
- **Speed** : MQTT maintains a persistent connection over TCP, allowing for faster communication after the initial handshake. This is crucial for real-time data transmission.

Learn more here:

- [MQTT.org](https://mqtt.org/)
- [MQTT on npm](https://www.npmjs.com/package/mqtt)
- [Aedes on npm](https://www.npmjs.com/package/aedes)
