import https from "https"; 
class PostRequest {
  constructor() {}

  PostRequest(url) {
    
    const data = JSON.stringify({
      data: {
        many: ["60342327"],
      },
    });

    const options = {
      hostname: url,
      path: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const req = https.request(options, (res) => {
      let responseData = "";

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log("Response Data:", responseData);
        } else {
          console.error(
            `Failed to get a valid response. Status code: ${res.statusCode}`
          );
        }
      });
    });

    req.on("error", (error) => {
      console.error("Error with the request:", error.message);
    });

    req.write(data);

    req.end();
  }
}
export default PostRequest