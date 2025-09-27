# Helios-Mqtt-Webserver-Test

This tool is used to test the MQTT functionality of the Helios Telemetry Server.

MQTT (Message Queuing Telemetry Transport) is a communication protocol designed for lightweight and fast data transfer between clients. Here are some key terminologies:

- **Subscriber** : Clients that connect to the broker and listen for messages. Once a message is available, the broker sends it to all subscribers. MQTT efficiently handles communication between the server and numerous subscribers.
- **Publisher** : Any client that connects to the broker and pushes a new message to be broadcasted to all subscribers. For example, Helios can publish vehicle data to the server.
- **Broker** : The intermediary between subscribers and publishers. The broker manages incoming data from publishers and distributes it to subscribers.
- **Aedes** : An npm library that implements the MQTT protocol as a server.
- **Topic** : A connection string that segregates different types of messages on the broker, similar to a channel. Topics categorize information being published and subscribed to on the server.

## How to use this tool

1. Create a .env file from the .env.example file and fill in your MQTT credentials:
   (ask your lead for these keys)

1. Run `docker-compose up --build`

Alternatively, you can manually run the with the following command:

1. Run `npm i`
1. update config.ts
1. run `npm run dev`

Just a note as well:

```bash
# This will generate lap packets
npm run dev --lap
OR
npm run dev --l

# This will generate packet data
npm run dev
```

## Testing lap completion

In `src/tests/testlapcompleted.ts` you can find a file to replace the `util.ts` file

This basically just moves the car up to pass the flag location.

## Why do we need MQTT?

The Calgary Solar Car team uses the MQTT protocol to effectively communicate between Helios, the Solar Car, and the [Telemetry server](https://github.com/UCSolarCarTeam/Helios-Telemetry). Helios transmits data such as speed, battery percentage, fault data, etc., in 5kb packets. These packets are then sent to the server where the Telemetry team can process the data and view it in real time. To reliably send and receive this data on the server, MQTT is implemented instead of other communication protocols such as HTTP to address several issues:

- **Efficiency** : MQTT messages are smaller and are binary-based, unlike HTTP which transmits data in ASCII. It also uses a Pub/Sub model rather than a request/response model, which is critical for real time communication.
- **Bandwidth** : MQTT is efficient in bandwidth usage due to its lightweight nature. ~2 byte headers vs ~8+ byte headers in HTTP.
- **Reliability** : MQTT utilizes TCP rather than UDP, ensuring messages are delivered and not lost, especially over long distances. Ensuring QoS.
- **Communication Model** : MQTT implements a publish/subscribe model rather than a request/response model, which is ideal when connected clients need to receive the same message.
- **Speed** : MQTT maintains a persistent connection over TCP, allowing for faster communication after the initial handshake. This is crucial for real-time data transmission where latency is often an issue. According to some sources, MQTT can offer up to 66% shorter times on average latency.

## How does Helios use MQTT?

![Helios](https://github.com/user-attachments/assets/05416396-7118-4e2a-82db-1244c42f5a67)

## Simulating a Publisher

If you want to simulate a publisher without access to the car follow these steps:

1. Navigate to the main.ts file.
1. Comment out the mqttClient variable.
1. Start the project.

Start the Helios-Telemetry project to see if its MQTT client is sucessfully receiving data from the publisher.

## Project Structure

This section provides an overview of the various files and directories within the Helios-MQTT-Webserver-Test project, explaining their purpose and how they fit into the overall project.

- **index.ts**: The entry point of the application.
  Sets up an Express server with basic middleware to parse JSON bodies.
  Defines a simple route and error-handling middleware.
  Starts the server on a specified port and calls the main function.

- **main.ts**: Initializes the main components of the application.
  Imports and creates instances of SolarMQTTPublisher and SolarMQTTClient with the specified options.

- **config.ts**: This file contains the MQTT configuration settings.
  MQTTOptions type extends IClientOptions and includes a url string.
  options defines the MQTT connection options, including the broker URL.
  topics lists the MQTT topics used in the project.

- **SolarMQTTClient.ts**: Defines the SolarMQTTClient class, which manages the MQTT client.
  Connects to the MQTT broker and subscribes to topics.
  Publishes ping messages at regular intervals and calculates latency based on received telemetry data.

- **SolarMQTTPublisher.ts**: Defines the SolarMQTTPublisher class, which emulates an MQTT publisher.
  Connects to the MQTT broker and subscribes to topics.
  Sends packets with fake telemetry data at regular intervals and responds to ping messages with pong messages.

- **Test.ts**: Contains a simple test function for MQTT communication.
  Connects to the MQTT broker and subscribes to a topic.
  Publishes a test message and logs any received messages.

- **utils.ts**: Provides utility functions and types.
  generateFakeTelemetryData function creates fake telemetry data using the faker library.
  ITelemetryData interface defines the structure of telemetry data.

## Additional Resources

- [MQTT.org](https://mqtt.org/)
- [MQTT on npm](https://www.npmjs.com/package/mqtt)
- [Aedes on npm](https://www.npmjs.com/package/aedes)
- [test.mosquitto.org](https://test.mosquitto.org/)
