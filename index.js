const fs = require("fs");
const os = require("node:os")

const files = fs.readdirSync('./');
fs.rmSync(`./url.txt`);
let aa = [];
files.forEach(function (item, index) {
    let stat = fs.lstatSync("./" + item);
    if (stat.isDirectory() === true && item !== ".git") {
        // const it_files = fs.readdirSync('./' + item);
        // const arr = [];
        // let name = item;
        // let icon = "";
        // it_files.forEach((str,index_it) => {
        //     if (str.indexOf('webp') !== -1) {
        //         const filenames = str.substring(0, str.lastIndexOf('.'));

        //         icon = index_it == 3 ? filenames : icon;

        //         arr.push(filenames);
        //     }
        // });
        // const data = {
        //     name: name,
        //     type: "webp",
        //     icon: icon,
        //     items: arr
        // }

        // fs.writeFile(`./${item}/info.json`, JSON.stringify(data), err => {
        //     if (err) {
        //       console.error(err);
        //     }
        //     console.log("success");
            
        // });

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
