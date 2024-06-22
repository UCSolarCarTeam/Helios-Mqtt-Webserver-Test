import express, { Request, Response, NextFunction } from "express";
import main from "./main";

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("port is: ", process.env.PORT || 1833);
  console.log("MQQT port is: ", process.env.MQTT_PORT || 1883);
});

main();
