const fs = require("fs");

const writeHtml = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Success",
      });
    });
  });
};

module.exports = writeHtml;