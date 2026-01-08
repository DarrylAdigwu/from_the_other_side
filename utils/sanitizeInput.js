import sanitizeHtml from "sanitize-html";

export const sanitizeInput = async(body) => {
  let parsedBody = JSON.parse(body)
    for(let data in parsedBody) {
      if(typeof parsedBody[`${data}`] === "string") {
        let value = sanitizeHtml(parsedBody[data], {
          allowedTags: ["b"],
          allowedAttributes: {}
        })
        parsedBody[`${data}`] = value;
      } else {
        parsedBody[`${data}`] = value;
      }
    }
  return parsedBody;
}