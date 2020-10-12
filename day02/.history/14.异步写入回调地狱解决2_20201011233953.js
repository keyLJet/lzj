nod

const fs = require("fs");
const path = require("path");
const {
    promisify
} = require("util");
const filePath = path.resolve(__dirname, "./01.txt");
const openFile = promisify(fs.open);
const writeFile = promisify(fs.open);
const closeFile = promisify(fs.close);
const fn = async () => {
     const fd = await openFile(filePath,"a");
     await writeFile(fd,"wolegequ");
     await closeFile(fd);
 };
 fn().then(() => {
     console.log("xiehaole")
 }).catch((err) => {
     console.log(err)
 })