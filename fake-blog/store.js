import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import http from './src/axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        tableData: [],
        items:[]
    },
    getters:{
        tableData(state){
            return state.tableData
        },
        items(state){
            return state.items
        }
    },
    mutations:{
        updataState(state, payload){
            state.tableData = payload
        },
        setState(state, payload){
            state.tableData = payload
        },
        getPosts(state, payload){
            state.items = payload
        }
        
    },
    actions:{
         async getUsers({commit}){
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            //console.log(res);
            commit('updataState', res.data)        
        },
        async getPosts({commit}){
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            commit('getPosts', res.data)   
            //console.log(res.data[5]);
                 
        },
        
    }
})