const path = require("path");

module.exports = (api, meta, options) => {
    api.render("./template", meta.path+"/"+meta.name);
    
    if (meta.routePath) {
        api.injectVueRoutes(meta.routePath, api.renderToString(path.join(__dirname, "./route.js"), meta));
    }

    if (meta.storePath) {
        api.injectVueStore(meta.storePath, api.renderToString(path.join(__dirname, "./store.js"), meta));
    }
}