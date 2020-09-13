export const checkUsername = (rule, value, callback) => {
    callback();
}
export const checkPassword = (rule, value, callback) => {
    let reg = /^\d+$/;
    if(!reg.test(value)){
        callback(new Error('密码必须为纯数字'));
    } else {
        callback();
    }
}