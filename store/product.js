import { http } from "~/plugins/axios";

export  const state = () => ({
    productList: []
})

export const mutations = {
    UPDATE(state, args=[]) {
        state.productList = args;
    }
}

export const actions = {
    async getProducts({commit}, args=[]) {
        let ret = await http.get('/product/list?from=getProducts');
        commit('UPDATE', ret);
    }
}

