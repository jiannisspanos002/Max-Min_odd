import http from "http"; 
import fs from "fs";       
class WriteFile {
  constructor() {}

  writeFileMethod(url,filePath) {
    http
      .get(url, (response) => {
        if (response.statusCode === 200) {
          const file = fs.createWriteStream(filePath);
          response.pipe(file);

          file.on("finish", () => {
            file.close();
            console.log(`File downloaded successfully: ${filePath}`);
          });
        } else {
          console.error(
            `Failed to download file. Status code: ${response.statusCode}`
          );
        }
      })
      .on("error", (err) => {
        console.error("Error downloading file:",err.message);
      });
  }
}
export default WriteFile;
