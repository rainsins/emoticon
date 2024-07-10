const fs = require('fs');

const emj = [
    {
        name: "白白在吃啥",
        count: 58
    },
    {
        name: "抽象",
        count: 23
    },
    {
        name: "呆萌小人",
        count: 58
    },
    {
        name: "机场",
        count: 48
    },
    {
        name: "酷安",
        count: 363
    },
    {
        name: "猫猫狗狗",
        count: 107
    },
    {
        name: "披被子的滑稽",
        count: 103
    },
    {
        name: "七濑胡桃",
        count: 121
    },
    {
        name: "商业头盔",
        count: 144
    },
    {
        name: "搜索引擎",
        count: 40
    },
    {
        name: "贴吧",
        count: 93
    },
    {
        name: "突然",
        count: 60
    },
    {
        name: "猥琐萌",
        count: 129
    },
    {
        name: "小坏坏",
        count: 197
    }
]

function em(){
    let obj = {};
    emj.forEach((el, index)=>{
        obj[el.name] = {};
        obj[el.name].type = "image";
        obj[el.name].container = [];
        for (let i= 1; i <= el.count; i++) {
            const obff = {
                icon: `<img src=\"https://blog.rainsin.cn/emoticon/${el.name}/${ i < 10 ? `00${i}` : i < 100 ? `0${i}` : `${i}` }.webp\">`, 
                text: `${el.name}${i}`
            }
            obj[el.name].container.push(obff);
        }
    })

    return obj;
}

const emString = JSON.stringify(em());

fs.writeFile('./emoticon.json', emString, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Data written to file');
  }
});