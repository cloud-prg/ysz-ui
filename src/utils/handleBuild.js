const copyDir = require('./copyDir'); // 调用拷贝目录方法
const path = require("path");


// 拷贝iconfont到
const sourcePath = path.resolve(__dirname, "../assets/iconfont/"); // 源目录
const targetPath = path.resolve(__dirname, "../../dist/"); // 要移向的目录

copyDir(sourcePath, targetPath, err => {
    console.log("err", err);
})

// packages放到打包后的dist目录
const assetsSourcePath = path.resolve(__dirname, "../../packages"); // 源目录
const assetsTargetPath = path.resolve(__dirname, "../../dist/packages"); // 要移向的目录

copyDir(assetsSourcePath, assetsTargetPath, err => {
    console.log("err", err);
})