import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serverStatic.js";
import { getData } from "./utils/getData.js";
import fs from "node:fs/promises";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
  if(req.url === "/api") {
    if(req.method === "GET") {
      return await handleGet(req, res)
    }
    if(req.method === "POST") {
      return await handlePost(req, res)
    }
  } else if(!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname);
  }

})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})