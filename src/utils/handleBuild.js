const copyDir = require('./copyDir'); // 调用拷贝目录方法
const path = require("path");
var fs = require('fs');

function copyFile(src, dist) {
    fs.writeFileSync(dist, fs.readFileSync(src));
}


// *目录拷贝
// 拷贝iconfont到
const sourcePath = path.resolve(__dirname, "../assets/iconfont/"); // 源目录
const targetPath = path.resolve(__dirname, "../../dist/"); // 要移向的目录

copyDir(sourcePath, targetPath, err => {
    console.log("err", err);
})

// packages放到打包后的dist目录
const packagesSourcePath = path.resolve(__dirname, "../../packages"); // 源目录
const packagesTargetPath = path.resolve(__dirname, "../../dist/packages"); // 要移向的目录

copyDir(packagesSourcePath, packagesTargetPath, err => {
    console.log("err", err);
})


// markdown放到打包后的dist目录
const markdownSourcePath = path.resolve(__dirname, "../../README.md"); // 源目录
const markdownTargetPath = path.resolve(__dirname, "../../dist/README.md"); // 要移向的目录


// *文件拷贝
copyFile(markdownSourcePath,markdownTargetPath)
