
import request from '@/utils/request'

export function loginRequest(params) {
    return request({
        method: 'post',//ulr方法
        url: '/login',//路径
        data: params//参数
    })
}

