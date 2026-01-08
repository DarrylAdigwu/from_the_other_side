import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";
import { sightingEvents } from "../events/sightingEvents.js";

export const handleGet = async (req, res) => {
  const stringData = JSON.stringify(await getData());
  return await sendResponse(res, 200, "application/json", stringData)
}

export const handlePost = async(req, res) => {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedBody = await sanitizeInput(parsedBody)
    await addNewSighting(sanitizedBody);
    sightingEvents.emit("sighting-added", sanitizedBody)
    return await sendResponse(res, 201, "application/json", JSON.stringifya(parsedBody))
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({error: err}))
  }
}