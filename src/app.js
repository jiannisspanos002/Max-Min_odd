const fs = require("fs");
const { default: Iteration } = require("./modules/findMinMax");
const { default: PostRequest } = require("./modules/postRequest");
const { default: WriteFile } = require("./modules/writeFile");
fs.readFile("paok.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const postRequest = new PostRequest();
  const findMinMax = new Iteration();

  const writeFile = new WriteFile(
    "http://proxy.sm.prod.skill90.io:3456//api/fixture/validatorCache",
    "../paok.json"
  );
  const jsonData = JSON.parse(data);

  const markets = Object.values(jsonData)[0]?.bots?.preGame?.body?.markets;

  findMinMax.finMinMax(markets);

  postRequest.PostRequest(
    "http://proxy.sm.prod.skill90.io:3456//api/fixture/validatorCache"
  );
});
