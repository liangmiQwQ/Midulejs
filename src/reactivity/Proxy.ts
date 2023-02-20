import app from "../test/test";
import {FreeObject} from "../interfaces";

export default (data:FreeObject) => {
    // console.log(data)
    const newData = {};
    console.log(data,data === newData,typeof newData,typeof data)
    return new Proxy(data,{
        get(target,propName){
            return Reflect.get(target,propName)
        },
        set(target,propName,value){
            app()
            console.log(app)
            console.log("拦截成功！")
            return Reflect.set(target,propName,value)
        },
        defineProperty(target,propName){
            return Reflect.deleteProperty(target,propName)
        }
    })
}

// export {target,proxy}