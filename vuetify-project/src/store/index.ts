import { createStore } from 'vuex'
import { login } from '@/api/config'
const store = createStore({
    state: () => ({
        token: ''
    }),
    getters: {
        token: state => state.token,
    },
    mutations: {
        SETTOKEN(state, token) {
            state.token = token;
            localStorage.setItem('token', state.token);
        }
    },
    actions: {
        async login({ commit }, { Email, Password }) {
            const token = await login(Email, Password)     
            commit('SETTOKEN', token)
        }
    }
})
export default store;
