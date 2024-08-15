const fs = require("fs");

const count = 124;
const heart = 24;
const suffex = "image_emoticon";
const name = "贴吧";
const f = "png";

let data = {
    "name": name,
    "type": f,
    "icon": `${suffex}${heart}`,
    "items": []
}

for (let index = 1; index <= count; index++) {
    data.items.push(`${suffex}${index}`);
}

fs.writeFile('./info.json', JSON.stringify(data), err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
