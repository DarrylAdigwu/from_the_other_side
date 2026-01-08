import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";

export const handleGet = async (req, res) => {
  const stringData = JSON.stringify(await getData());
  return await sendResponse(res, 200, "application/json", stringData)
}

export const handlePost = async(req, res) => {
  const rawBody = await parseJSONBody(req);
  console.log(rawBody)
}