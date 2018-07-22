
const state = ()=> {
    return {
        demo: []
    }
};

const actions = {
    async fetch({ commit }, params) {
        commit("setState", params);
    }
}

const mutations = {
    setState(state, params) {
        state.demo = params;
    }
}

export default {
    namespace: true,
    state,
    actions,
    mutations
}