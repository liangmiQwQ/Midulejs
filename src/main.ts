import render from "./renderFunc"
import {FreeObject, virtualDOM, vm} from "./interfaces";
import proxy from "./reactivity/Proxy";

class MidulePage{
    constructor(vm:vm) {
        this.data = vm.data
        this.stencil = vm.stencil
        this.methods = vm.methods
        this.options = vm.options
    }
    _data = {}
    data = proxy(this._data)
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
    template: virtualDOM;

    constructor(vm:vm) {
        // methods: {};
        // template: { children: string[]; tagName: string; props: { className: string; id: string } }; data: { less: string } }) {
        this.dataOrigin = vm.data
        this.methods = vm.methods
        this.template = vm.template
    }
    dataOrigin?:FreeObject
    data? = proxy(this.dataOrigin)
    // data?:any
    methods? = {}
}

const MiduleDefaultStencil = new MiduleStencil({

})

export {MidulePage, MiduleStencil, MiduleComponents, MiduleDefaultStencil,render}