import { default as PostRequest } from "./modules/postRequest.mjs";
import { default as WriteFile } from "./modules/writeFile.mjs";
import Reading from "./modules/readFile.mjs";
const postRequest = new PostRequest();
const reading = new Reading();
const writeFile = new WriteFile();
// writeFile.writeFileMethod(
//   "",
//   "./paok.json"
// );
postRequest.PostRequest("proxy.sm.prod.skill90.io");

reading.readFile()
