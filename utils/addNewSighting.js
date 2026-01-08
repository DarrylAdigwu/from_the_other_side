import fs from "node:fs/promises";
import path from "node:path";
import { getData } from "./getData.js";

export const addNewSighting = async(parsedData) => {
  try {
    const existingSightings = await getData();
    existingSightings.push(parsedData);
    const stringifySightings = JSON.stringify(existingSightings, null, 2)
    const pathToData = path.join("data", "data.json");
    return await fs.writeFile(pathToData, stringifySightings)
  } catch (err) {
    throw new Error(`Invalid JSON format: ${err}`)
  }
}