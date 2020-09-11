import { http } from "~/plugins/axios";

export const state = () => ({
    isHidden: false
})

export const getters = {}

export const mutations = {
    UPDATE_LEFT_STATUS(state, args = false) {
        state.isHidden = args;
    }
}

export const actions = {}

