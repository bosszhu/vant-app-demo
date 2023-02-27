module.export = {
    devSever: {
        '/api': {
            target: `http://192.168.1.162.8002`, //真实的服务器地址
            changeOrigin: true, //是否跨域
            pathRewrite: {
                "^api": "" //将程序中的/api,替换为空字符串,在和target中的基础路径，拼接起来作为发送到服务器的最终请求地址。
            }
        }
    }
}