import { http } from "~/plugins/axios";
import Cookie from 'js-cookie'

export  const state = () => ({
    token: '',
    userInfo: '',
    menuList: []
})

export const getters = {}

export const mutations = {
    SET_TOKEN(state, token) {
        state.token = token;
        Cookie.set('token', token);
    },
    RESET_TOKEN(state) {
        state.token = '';
        Cookie.remove('token');
    },
    UPDATE_USERINFO(state, data) {
        state.userInfo = data;
        window.localStorage.setItem('userInfo', data ? JSON.stringify(data) : '');
    },
    SET_MENU(state, data) {
        state.menuList = data;
    }
}

export const actions = {
    async login({commit}, args) {
        let ret = await http.post('/user/login', {...args});
        commit('SET_TOKEN', 'token_xxx');
        commit('UPDATE_USERINFO', {username: ret});
        return ret;
    },
    async logout({commit}) {
        await http.post('/user/logout');
        commit('RESET_TOKEN');
        commit('UPDATE_USERINFO', '');
    },
    async getMenu({commit}, args) {
        let ret = await http.post('/user/getMenu', {...args});
        commit('SET_MENU', ret);
    }
}

