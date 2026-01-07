import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export const serveStatic = async (req, res, dir) => {
  const publicDir = path.join(dir, "public")
  const filePath = path.join(
    publicDir, 
    req.url === "/" ? "index.html" : req.url
  );
  
  const ext = path.extname(filePath);
  const contentType = getContentType(ext);
  try {
    const content = await fs.readFile(filePath);
    await sendResponse(res, 200, contentType, content)
  } catch(err) {
    console.error(err)
  }
}