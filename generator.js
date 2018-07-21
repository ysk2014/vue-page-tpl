const path = require("path");

module.exports = (api, meta, options) => {
    api.render("./template", meta.path);
    
    if (meta.route) {
        api.injectVueRoutes(meta.routePath, api.renderToString(path.join(__dirname, "./route.js"), meta));
    }
}