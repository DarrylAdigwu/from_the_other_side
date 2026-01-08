import { EventEmitter } from "node:events";
import { createAlert } from "../utils/createAlert.js";

// Create new event emitter instance
export const sightingEvents = new EventEmitter();

// Register event
sightingEvents.on("sighting-added", createAlert)