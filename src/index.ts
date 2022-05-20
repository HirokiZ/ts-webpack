import {hello} from './hello'
function sum(a:number,b:number):number{
    return a+b
}

const obj={name:'猪八戒',age:30}
console.log(obj)
obj.age=33
console.log('改了',obj)

console.log(sum(123,456))
console.log("hahaha")
console.log(hello)

//corejs  解析promise  ie11不支持promise，那么使用corejs的代码
console.log(Promise)