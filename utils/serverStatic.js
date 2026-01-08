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
    let content;
    let errCode;
    if(err.code === 'ENOENT') {
      const errorPath = path.join(publicDir, "404.html");
      content = await fs.readFile(errorPath);
      errCode = 404;
    } else {
      content = `<html><h1>Server Error: ${err.code}</h1></html>`
      errCode = 500;
    }
    await sendResponse(res, errCode, 'text/html', content)
  }
}