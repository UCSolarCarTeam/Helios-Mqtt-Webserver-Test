# Helios-Mqtt-Webserver-Test

This tool is used to test the MQTT functionality of the Helios Telemetry Server.

MQTT (Message Queuing Telemetry Transport) is a communication protocol designed for lightweight and fast data transfer between clients. Here are some key terminologies:

- **Subscriber** : Clients that connect to the broker and listen for messages. Once a message is available in the queue, the broker sends it to all subscribers. MQTT efficiently handles communication between the server and numerous subscribers.
- **Publisher** : Any client that connects to the broker and pushes a new message to be broadcasted to all subscribers. For example, Helios can publish vehicle data to the server.
- **Broker** : The intermediary between subscribers and publishers. The broker manages incoming data from publishers and distributes it to subscribers.
- **Aedes** : An npm library that implements the MQTT protocol as a server.
- **Topic** : A connection string that segregates different types of messages on the broker, similar to a channel. Topics categorize information being published and subscribed to on the server.
