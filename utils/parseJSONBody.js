import sanitizeHtml from "sanitize-html";

export const parseJSONBody = async (req, res) => {
  let body = "";
  for await (let chunk of req) {
    body += chunk
  }
  try {
    return body
  } catch (err) {
    console.error(`Invalid JSON format: ${err}`)
  }
}