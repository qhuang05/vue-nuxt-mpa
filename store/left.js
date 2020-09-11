export const state = () => ({
    isHidden: false
})

export const getters = {}

export const mutations = {
    toggleLeft(state, args = false) {
        state.isHidden = args;
    }
}

export const actions = {}

