// 只应用于server的插件

export default ({app}, inject) => {
    app.fooServer = (msg) => {
        console.log('I am foo server: ', msg);
    }
}