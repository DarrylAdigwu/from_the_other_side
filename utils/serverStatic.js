import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";

export const serveStatic = async (req, res, dir) => {
  const filePath = path.join(dir, "public", "index.html");
  
  try {
    const content = await fs.readFile(filePath);
    await sendResponse(res, 200, "text/html", content)
  } catch(err) {
    console.error(err)
  }
}