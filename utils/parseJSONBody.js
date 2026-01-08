export const parseJSONBody = async (req, res) => {
  let body = "";
  try {
    for await (let chunk of req) {
      body += chunk
    }
    return JSON.parse(body)
  } catch (err) {
    console.error(`Invalid JSON format: ${err}`)
  }
}