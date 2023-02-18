import {MiduleStencil} from "./main";

interface vm{
    data?:{},
    stencil?: [MiduleStencil,{}],
    methods?:{},
    template?:virtualDOM
}

interface virtualDOM{
    tagName: string,
    children?:Array<string|virtualDOM|undefined>,
    props?:Record<string, any>
}

export {vm,virtualDOM}