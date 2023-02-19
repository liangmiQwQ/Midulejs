let target = {

}

let proxy = new Proxy(target,{
    get(target,propName){
        return Reflect.get(target,propName)
    },
    set(target,propName,value){
        return Reflect.set(target,propName,value)
    },
    defineProperty(target,propName){
        return Reflect.deleteProperty(target,propName)
    }
})
// export {target,proxy}
export default proxy