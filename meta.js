module.exports = {
    prompts: [
        {
            name: 'name',
            type: 'input',
            message: '页面名称：'
        },
        {
            name: 'pagePath',
            type: 'input',
            message: '页面组件存放在src下的哪个文件夹中：'
        },

        {
            name: 'module',
            type: 'confirm',
            message: '是否添加module.js文件：',
            cache: true
        }
    ],
    filters: {
        '**/module.js': 'module'
    }
};
