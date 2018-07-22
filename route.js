const routes = [
    {
        path: "/<%= name %>",
        component: () => import("@/container/<%= name%>/index.vue")
    }
]