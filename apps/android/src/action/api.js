// 封装接口
const api = {
    // 用户密码登录
    dynamicList: {
        url: '/authentication/user/loginByPass',
        method: 'post',
    },
    // 获取验证码
    hqyanzhengma: {
        url: '/authentication/user/sendNote',
        method: 'post',
    },
    // 登陆验证
    yzmyanzheng: {
        url: '/authentication/user/login',
        method: 'post',
    },
    // 显示个人信息
    personaldata: {
        url: '/authentication/user/showInf',
        method: 'post',
    },
    // 修改密码
    xiugaipassward: {
        url: '/authentication/user/change',
        method: 'post',
    },
    // 用户部分

};

export default api;