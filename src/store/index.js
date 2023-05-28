import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const store = new VueX.Store({
    state: {
        count: 0,
        todos: [
            {id: 1, text: '吃饭', done: true},
            {id: 2, text: '睡觉', done: false}
        ]
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    }
})

// 1.导出store对象

export default store