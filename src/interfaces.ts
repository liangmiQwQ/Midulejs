import {MiduleStencil} from "./main";

interface vm{
    data?:{},
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

export {vm,virtualDOM}