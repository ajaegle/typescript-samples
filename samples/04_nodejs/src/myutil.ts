import * as fs from "fs";

export function printFileContent(fileName: string) {
  "use strict";
  let filePath = `data/${fileName}`;
  fs.readFile(filePath, "utf-8", (err: NodeJS.ErrnoException, data: string) => {
    if (err) {
      console.log("error reading file %s", filePath);
    } else {
      console.log(data);
    }
  });
};
