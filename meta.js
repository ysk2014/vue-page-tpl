module.exports = {
    prompts: [
        {
            name: "path",
            type: "input",
            message: "页面组件所在地址：",
            cache: true
        },
        {
            name: "name",
            type: "input",
            message: "页面名称："
        },
        {
            name: "routePath",
            type: "input",
            message: "路由文件地址：",
            cache: true
        },
        {
            name: "module",
            type: "confirm",
            message: "是否添加module.js文件：",
            cache: true
        },
        {
            name: "storePath",
            type: "input",
            message: "store文集地址：",
            when: (answers) => answers.module,
            cache: true
        }
    ],
    filters: {
        "**/module.js": "module"
    }
};