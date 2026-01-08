import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";

export const handleGet = async (req, res) => {
  const stringData = JSON.stringify(await getData());
  return await sendResponse(res, 200, "application/json", stringData)
}