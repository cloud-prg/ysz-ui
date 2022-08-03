const copyDir = require('./copyDir'); // 调用拷贝目录方法
const path = require("path");

const sourcePath = path.resolve(__dirname, "../assets/iconfont/"); // 源目录
const targetPath = path.resolve(__dirname, "../../dist/"); // 要移向的目录


copyDir(sourcePath, targetPath, err => {
    console.log("err", err);
})