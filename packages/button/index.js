import cButton from "./button.vue";

cButton.install = app => {
    app.component(cButton.name,cButton);
}

export default cButton ;