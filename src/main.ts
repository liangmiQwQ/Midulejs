import render from "./renderFunc"
import {virtualDOM,vm} from "./interfaces";

class MidulePage {
    constructor(vm:vm) {
        this.data = vm.data
        this.stencil = vm.stencil
        this.methods = vm.methods
        this.options = vm.options
    }
    data = {}
    stencil = [MiduleDefaultStencil,{}]
    methods = {}
    options = {}
}

class MiduleStencil{
    template: virtualDOM | undefined ; // Virtual DOM
    constructor(vm:vm) {
        this.template = vm.template
    }
}

class MiduleComponents{
    template:virtualDOM|undefined
    constructor(vm:vm) {
        this.template = vm.template
    }
}

const MiduleDefaultStencil = new MiduleStencil({

})

export {MidulePage, MiduleStencil, MiduleComponents, MiduleDefaultStencil,render}