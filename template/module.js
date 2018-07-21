
const state = ()=> {
    return {
        items: []
    }
};

const actions = {
    async fetch({ commit }, params) {
        commit("setState", params);
    }
}

const mutations = {
    setState(state, params) {
        state.items = params;
    }
}

export default {
    namespace: true,
    state,
    actions,
    mutations
}