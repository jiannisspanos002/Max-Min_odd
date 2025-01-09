import { default as Iteration } from "./findMinMax.mjs";
import { readFile } from "fs";

class Reading {
  constructor() {}
  readFile() {
    const findMinMax = new Iteration();

    readFile("paok.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return;
      }
      const jsonData = JSON.parse(data);

      const markets = Object.values(jsonData)[0]?.bots?.preGame?.body?.markets;

      findMinMax.findMinMax(markets);
    });
  }
}
export default Reading