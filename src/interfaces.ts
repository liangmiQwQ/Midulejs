import {MiduleStencil} from "./main";
// import proxy from "./reactivity/Proxy";
// import Proxy from "./reactivity/Proxy";

interface vm{
    data?:FreeObject,
    // data?:{},
    stencil?: [MiduleStencil,{}],
    methods?:{},
    template?:virtualDOM,
    options?:{}
}

interface virtualDOM{
    tagName: string,
    children?:Array<string|virtualDOM|undefined>,
    props?:Record<string, any>,
    key?:string|number
}

type FreeObject = Record<string, any>;

export {vm,virtualDOM,FreeObject}