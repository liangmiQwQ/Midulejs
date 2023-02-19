import {virtualDOM} from "./interfaces"

export default function (newDom: virtualDOM, mountElement: string) {
    const app = document.querySelector(mountElement)
    const oldDom = getOldVirtualDOM(mountElement)
    //a main node
    // console.log(newDom,oldDom)
    if (oldDom.children.length < 1){
        diff(newDom, undefined ,app)
    }else{
        diff(newDom, <virtualDOM>oldDom.children[0], app)
    }
}

function diff(nv: virtualDOM, ov: virtualDOM|undefined, mountElement: Element): virtualDOM {
    let oldEl;
    if (ov === undefined){
        oldEl = true
        // first render
    }else if (nv === ov) {
        return undefined;
    // } else if (nv.tagName !== ov.tagName || nv.key !== ov.key) {
    //     return nv;
    }else{
        oldEl = createElement(ov);
    }
    const newEl = createElement(nv);

    if (oldEl) {
        // 检查节点是否为父节点的子节点
        // console.log(newEl,oldEl)
        // mountElement.replaceChild(newEl, oldEl);
        const serializer = new XMLSerializer();

        mountElement.innerHTML = serializer.serializeToString(newEl);
    } else {
        mountElement.appendChild(newEl);
    }

    return undefined;
}

function createElement(vnode: virtualDOM): HTMLElement | Text {
    if (typeof vnode === 'string') {
        // 如果虚拟节点是一个文本节点，创建一个文本节点并返回
        return document.createTextNode(vnode);
    }

    // 否则创建一个元素节点
    const el = document.createElement(vnode.tagName);

    // 设置节点属性
    for (let name in vnode.props) {
        setAttribute(el, name, vnode.props[name]);
    }

    // 递归创建子节点
    vnode.children.forEach(child => {
        el.appendChild(createElement(<virtualDOM>child));
    });

    return el;
}


function getOldVirtualDOM(element: string): virtualDOM {
    const node = document.querySelector(element);
    if (!node) {
        throw new Error(`Unable to find node with selector ${element}`);
    }
    return createVirtualDOM(node);
}

function createVirtualDOM(node: Element): virtualDOM {
    let vm: virtualDOM = {
        tagName: node.tagName,
        props: {},
        children: [],
    };

    // 将节点属性转换为props对象
    for (let i = 0; i < node.attributes.length; i++) {
        const {name, value} = node.attributes[i];
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

function setAttribute(node: HTMLElement, name: string, value: any) {
    if (name === 'className') {
        name = 'class';
    }

    if (typeof value === 'boolean') {
        if (value) {
            node.setAttribute(name, '');
        } else {
            node.removeAttribute(name);
        }
    } else {
        node.setAttribute(name, value);
    }
}
