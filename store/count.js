import { http } from "~/plugins/axios";

export  const state = () => ({
    count: 0
})

export const getters = {
    filterCount(state) {
        return state.count>5 ? 5 : state.count;
    }
}

export const mutations = {
    ADD(state, args=1) {
        state.count += args;
    }
}

export const actions = {
    async asyncAdd({commit}, args=1) {
        await http.post('/productType/test?from=asyncAdd');
        commit('ADD', args);
    }
}

