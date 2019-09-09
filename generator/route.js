const routes = [
    {
        path: '/<%= name %>',
        component: () => import('@/<%= pagePath%>/<%= name%>/index.vue')
    }
];
