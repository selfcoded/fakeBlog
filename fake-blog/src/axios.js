import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
    baseURL:`http://${process.env.HOST||'localhost'}:${process.env.PORT||3002}`,
})

http.interceptors.request.use(function(config){
    if (localStorage.token) {

        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
}, function(err){
    console.log('hhaha')
    return Promise.reject(err)
})

export default http