import cButton from "./button/";
import cInput from "./input/"
import template from  "./template/";


const install = app=>{
    app.use(cButton);
    app.use(cInput);
    app.use(template);
}

const testUI = {
    install
}

export {cButton};
export default testUI;