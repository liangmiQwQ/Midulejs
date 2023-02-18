import render from "./renderFunc"
import {virtualDOM,vm} from "./interfaces";

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
    template:virtualDOM|undefined
}

const MiduleDefaultStencil = new MiduleStencil({

})

export {MidulePage, MiduleStencil, MiduleComponents, MiduleDefaultStencil,render}