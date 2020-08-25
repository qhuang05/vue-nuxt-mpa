// 同时应用于client和server端的插件

export default ({app}, inject) => {
    inject('fooInject', msg => {
        if(process.server) {
            console.log('I am foo inject(server) => ', msg);
        } else{
            console.log('I am foo inject(client) => ', msg);
        }
    })
}