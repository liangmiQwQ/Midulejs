interface vm{
    data?:{},
    stencil?: [MiduleStencil,{}],
    methods?:{},
}

interface virtualDOM{
    tagName: string,
    children?:string|virtualDOM,
    props?:Record<string, any>
}

class MidulePage {
    constructor(vm:vm) {
        this.data = vm.data
        this.stencil = vm.stencil
        this.methods = vm.methods
    }
    data = {}
    stencil = [MiduleDefaultStencil,{}]
    methods = {}
}

class MiduleStencil{
    template: virtualDOM | undefined ; // Virtual DOM
    setTemplate(template:virtualDOM){
        this.template = template
    }
    constructor(vm:vm) {

    }
}

class MiduleComponents{

}

const MiduleDefaultStencil = new MiduleStencil({

})

export {MidulePage, MiduleStencil, MiduleComponents, MiduleDefaultStencil}