// 可同时应用于client和server端的
export default ({app}, inject) => {
    // inject('fooInject', msg => {
    //     if(process.server) {
    //         console.log('I am foo inject(server) => ', msg);
    //     } else{
    //         console.log('I am foo inject(client) => ', msg);
    //     }
    // })

    inject('foo', msg => {
        if(process.client){
            console.log('foo client => ', msg);
        } else {
            console.log('foo server => ', msg);
        }
    })
}
