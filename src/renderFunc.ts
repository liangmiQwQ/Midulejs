import {virtualDOM} from "./interfaces"
import * as child_process from "child_process";

export default function (dom:virtualDOM,mountElement:string){
    const app = document.querySelector(mountElement)
    console.log(getOldVirtualDOM(mountElement))
    //a main node
}

function getOldVirtualDOM(element:string):virtualDOM{
    const node = document.querySelector(element)

    const vm: virtualDOM = {
        tagName: node.tagName,
        props: node.attributes,
        children:[]
    };
    let nodeTwo = vm.children
    while (nodeTwo){

    }

    return vm
}