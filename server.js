import http from "node:http";
import path from "node:path";
import { serveStatic } from "./utils/serverStatic.js";
import fs from "node:fs/promises";

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
  
  await serveStatic(req, res, __dirname);

})


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})