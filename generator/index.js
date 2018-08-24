const path = require("path");
const fs = require("fs");

module.exports = (api, meta, options) => {
    if (!meta.name) return;

    let container = path.join(process.cwd(), "./src/container");
    if (!fs.existsSync(container)) return false;

    api.render("./template", container + "/" + meta.name);

    if (options.vueRouter) {
        api.injectVueRoutes(
            options.vueRouter,
            api.renderToString(path.join(__dirname, "./route.js"), meta)
        );
    }

    if (options.vuex) {
        api.injectVueStore(
            options.vuex,
            api.renderToString(path.join(__dirname, "./store.js"), meta)
        );
    }
};
