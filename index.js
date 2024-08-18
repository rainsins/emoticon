const fs = require("fs");
const os = require("node:os");
const process = require("child_process");

const files = fs.readdirSync('./');

let aa = [];

process.exec('New-Item url.txt', (error, stdout, stderr) => {
  if (!error) {
    // 成功
  } else {
    // 失败
  }
});

files.forEach(function (item, index) {
    let stat = fs.lstatSync("./" + item);
    if (stat.isDirectory() === true && item !== ".git" && item !== "Sticker-100" && item !== "Tieba" && item !== "alus" && item !== "bilibili" && item !== "qq" && item !== "tw" && item !== "weibo" ) {
        const it_files = fs.readdirSync('./' + item);
        const arr = [];
        let name = item;
        let icon = "";
        it_files.forEach((str,index_it) => {
            if (str.indexOf('webp') !== -1) {
                const filenames = str.substring(0, str.lastIndexOf('.'));

                icon = index_it == 3 ? filenames : icon;

                arr.push(filenames);
            }
        });
        const data = {
            name: name,
            type: "webp",
            icon: icon,
            items: arr
        }

        fs.writeFile(`./${item}/info.json`, JSON.stringify(data), err => {
            if (err) {
              console.error(err);
            }
            console.log("success");
            
        });

        aa.push(`//pan.rainsin.cn:2000/d/blog/em/${item}`);

        fs.appendFileSync(`./url.txt`, `//pan.rainsin.cn:2000/d/blog/em/${item}${os.EOL}`, err => {
            if (err) {
              console.error(err);
            }
            console.log("success");
        });
    };
})

fs.writeFile(`./url.json`, JSON.stringify(aa), err => {
    if (err) {
      console.error(err);
    }
    console.log("success");
    
});
