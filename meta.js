module.exports = {
    prompts: [
        {
            name: "name",
            type: "input",
            message: "页面名称："
        },

        {
            name: "module",
            type: "confirm",
            message: "是否添加module.js文件：",
            cache: true
        }
    ],
    filters: {
        "**/module.js": "module"
    }
};
