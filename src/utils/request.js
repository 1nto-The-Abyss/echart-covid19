import axios from 'axios'
import qs from 'qs'
/**
 * 处理错误信息
 *  2.x  成功
 *  3.x  重定向或缓存
 *  4.x  前端错误
 *  5.x  后台错误
 */
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log('语义错误，不能被服务器理解')
            break;
        case 401:
            console.log('服务器认证失败');
            break;
        case 403:
            console.log('服务器拒绝请求');
            break;
        case 404:
            console.log('地址错误');
            break;
        case 500:
            console.log('服务器遇到未知状态');
            break;
        case 502:
            console.log('服务器无响应');
            break;
        default:
            console.log(info);
            break;
    }
}
// 创建实例对象
const instance = axios.create({
    // 公共配置
    //baseUrl: "http://iwenwiki.com",
    timeout: 5000
})
// 拦截器处理
instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
          // 转换为字符串类型
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => Promise.reject(error)
)
// 获取数据之前
instance.interceptors.response.use(
    response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
    // 错误处理
    error => {
        const { response } = error
        errorHandle(response.status, response.info)
    }
)
export default instance