
import axios from '@/utils/axios';

// get
export function getAction(url,params) {
    return axios({
        url: url,
        method: 'get',
        params: params
    })
}

// post
export function postAction(url,params) {
    return axios({
        url: url,
        method: 'post',
        data: params
    })
}

// put
export function putAction(url,params) {
    return axios({
        url: url,
        method: 'put',
        data: params
    })
}

// delete
export function deleteAction(url,params) {
    return axios({
        url: url,
        method: 'delete',
        params: params
    })
}

export function httpAction(url, data, method, params) {
    return axios({
      url: url,
      method: method,
      data: data,
      params: params
    })
}