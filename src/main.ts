interface vm{
    data?:{},
    stencil?:MiduleStencil
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
    }
    data = {}
    stencil: MiduleStencil | undefined = MiduleDefaultStencil
}

class MiduleStencil{
    template: virtualDOM | undefined ; // Virtual DOM
    setTemplate(template:virtualDOM){
        this.template = template
    }
}

class MiduleComponents{

}

const MiduleDefaultStencil = new MiduleStencil()

export {MidulePage, MiduleStencil, MiduleComponents,MiduleDefaultStencil}