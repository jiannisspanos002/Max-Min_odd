import { readFile } from "fs";
import { default as Iteration } from "./modules/findMinMax.mjs";
import { default as PostRequest } from "./modules/postRequest.mjs";
import { default as WriteFile } from "./modules/writeFile.mjs";
const postRequest = new PostRequest();
const findMinMax = new Iteration();
const writeFile = new WriteFile();
writeFile.writeFileMethod(
  "http://proxy.sm.prod.skill90.io:3456//api/fixture/validatorCache",
  "../paok.json"
);
postRequest.PostRequest(
  "http://proxy.sm.prod.skill90.io:3456//api/fixture/validatorCache"
);
readFile("paok.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  const jsonData = JSON.parse(data);

  const markets = Object.values(jsonData)[0]?.bots?.preGame?.body?.markets;

  findMinMax.findMinMax(markets);
});
