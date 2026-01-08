import path from "node:path";
import fs from "node:fs/promises";

export const getData = async () => {
  const pathToData = path.join("data", "data.json");
  try {
    const readData = await fs.readFile(pathToData, "utf8");
    return JSON.parse(readData);
  } catch(err) {
    console.error(err);
    return [];
  }
}