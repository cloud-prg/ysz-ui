export default [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: "button",
                name: "button",
                component: () => import("/packages/button/doc/doc.md"),
            },
            {
                 path: "input",
                name: "input",
                component: () => import("/packages/input/doc/doc.md"),
            }
        ]    
    },
   
]