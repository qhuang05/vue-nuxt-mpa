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
    setToken(state, token) {
        state.token = token;
        Cookie.set('token', token);
    },
    resetToken(state) {
        state.token = '';
        Cookie.remove('token');
    },
    updateUserInfo(state, data) {
        state.userInfo = data;
    },
    updateMenu(state, data) {
        state.menuList = data.menuList;
        state.sideMenuList = data.sideMenuList;
    },
    updateUrlAuth(state, data) {
        state.urlAuthMap[data.path] = data.isAuth;
    }
}

export const actions = {
    async login({ commit }, args) {
        let ret = await http.post('/user/login', { ...args });
        commit('setToken', ret.token);
        commit('updateUserInfo', ret.userInfo);
        return ret.userInfo;
    },
    async logout({ commit }, args) {
        await http.post('/user/logout');
        commit('resetToken');
        commit('updateUserInfo', '');
    },
    async getUserInfo({ commit }, args) {
        let userInfo = await http.get('/user/getInfo');
        commit('updateUserInfo', userInfo);
        return userInfo;
    },
    async getMenu({ commit }, args) {
        let menus = await http.post('/user/getMenu', { ...args });
        commit('updateMenu', menus);
        return menus;
    },
    async checkUrlAuth({ commit }, args) {
        let isAuth = await http.post('/user/checkUrlAuth', { ...args });
        commit('updateUrlAuth', { path: args.path, isAuth });
        return { path: args.path, isAuth };
    }
}

