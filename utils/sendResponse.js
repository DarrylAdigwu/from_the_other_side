export const sendResponse = async (res, code, contentType, payload) => {
  res.setHeader("Content-Type", `${contentType}`);
  res.statusCode = code;
  res.end(payload);
}