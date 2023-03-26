const remTopx = (window , document , defaultWidth, ROOTVALUE)=>{
    // 窗口大小变化时
    window.onresize = ()=>{
        const scale = document.documentElement.clientWidth / defaultWidth 
        document.documentElement.style.fontSize = `${scale * ROOTVALUE}px`
    }
}
// module.exports = remTopx;
export default remTopx