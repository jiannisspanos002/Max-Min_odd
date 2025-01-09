const fs = require("fs");
const { default: Iteration } = require("./modules/findMinMax");
fs.readFile("paok.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const findMinMax = new Iteration();

  const jsonData = JSON.parse(data);

  const markets = Object.values(jsonData)[0]?.bots?.preGame?.body?.markets;

  findMinMax.finMinMax(markets);
});
