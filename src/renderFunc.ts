import {virtualDOM} from "./interfaces"
import * as child_process from "child_process";

export default function (dom:virtualDOM,mountElement:string){
    const app = document.querySelector(mountElement)
    console.log(getOldVirtualDOM(mountElement))
    //a main node
}

function getOldVirtualDOM(element:string):virtualDOM{
    const node = document.querySelector(element)
    return createVirtualDOM(node)
}

function createVirtualDOM(node: Element):virtualDOM{
    let vm:virtualDOM = {
        tagName: node.tagName,
        props: {},
        children: [],
    };

    // 将节点属性转换为props对象
    for (let i = 0; i < node.attributes.length; i++) {
        const { name, value } = node.attributes[i];
        vm.props[name] = value;
    }

    // 递归遍历子节点并将它们转换为虚拟DOM
    for (let i = 0; i < node.childNodes.length; i++) {
        const childNode = node.childNodes[i];
        if (childNode.nodeType === Node.ELEMENT_NODE) {
            const childVM = createVirtualDOM(<Element>childNode);
            vm.children.push(childVM);
        } else if (childNode.nodeType === Node.TEXT_NODE) {
            const text = childNode.textContent.trim();
            if (text) {
                vm.children.push(text);
            }
        }
    }

    return vm;
}