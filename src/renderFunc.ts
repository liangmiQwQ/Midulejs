import {virtualDOM} from "./interfaces"

export default function (newDom:virtualDOM,mountElement:string){
    const app = document.querySelector(mountElement)
    const oldValue = getOldVirtualDOM(mountElement)
    //a main node
    diff(newDom,oldValue,app)
}

function diff(nv:virtualDOM,ov:virtualDOM,mountElement:Element):Error{
    if(nv === ov){
        return undefined
    }else{
    }
    return undefined
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