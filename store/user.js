import { http } from "~/plugins/axios";
import Cookie from 'js-cookie'

export const state = () => ({
    token: '',
    userInfo: '',
    menuList: [], //头部导航栏
    sideMenuList: [], //头部右侧菜单栏
    urlAuthMap: {}
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
        if (data) {
            window.localStorage.setItem('userInfo', JSON.stringify(data));
        } else {
            window.localStorage.removeItem('userInfo');
        }
    },
    UPDATE_MENU(state, data) {
        state.menuList = data.menuList;
        state.sideMenuList = data.sideMenuList;
    },
    UPDATE_URL_AUTH(state, data) {
        state.urlAuthMap[data.path] = data.isAuth;
    }
}

export const actions = {
    async login({ commit }, args) {
        let userInfo = await http.post('/user/login', { ...args });
        commit('SET_TOKEN', 'token_20200910010');
        commit('UPDATE_USERINFO', userInfo);
        return userInfo;
    },
    async logout({ commit }, args) {
        await http.post('/user/logout');
        commit('RESET_TOKEN');
        commit('UPDATE_USERINFO', '');
    },
    async getUserInfo({ commit }, args) {
        let userInfo = await http.get('/user/getInfo');
        commit('UPDATE_USERINFO', userInfo);
    },
    async getMenu({ commit }, args) {
        let menus = await http.post('/user/getMenu', { ...args });
        commit('UPDATE_MENU', menus);
    },
    async checkUrlAuth({ commit }, args) {
        let isAuth = await http.post('/user/checkUrlAuth', { ...args });
        commit('UPDATE_URL_AUTH', { path: args.path, isAuth });
        return { path: args.path, isAuth };
    }
}

