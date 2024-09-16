import { createStore } from 'vuex'

export default createStore({
    // store the entire application state
    state: {
        counter: 0,
        colorCode: 'red'
    },
    // commit change the state
    mutations: {
        increaseCounter(state, randomNumber) {
            state.counter = randomNumber
        },
        decreaseCounter(state) {
            state.counter--
        },
        setColorCode(state, newValue){
            state.colorCode = newValue
        }
    },
    // request api or .. to trigger mutation
    actions: {
        increaseCounter({ commit }){
            console.log("increaseCounter (action)")
            fetch("https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new")
            .then(response => response.json())
            .then(data => {
                console.log("data: ", data)
                commit('increaseCounter', data)
            })
        },
        setColorCode({ commit }, newValue){
            commit('setColorCode', newValue)
        }
    },
    // filter the data
    getters:{
        counterSquare(state){
            return state.counter * state.counter
        }
    },
    modules: {

    }
})