import service from './request'

export function get(url, params) {
    return service({
        url,
        method: 'get',
        params
    })
}

export function post(url, data) {
    return service({
        url,
        method: 'post',
        data
    })
}
