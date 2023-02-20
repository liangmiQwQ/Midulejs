import {MiduleComponents, MidulePage, MiduleStencil, render} from "../main";

const Web = new MiduleStencil({

})
//
const somePage = new MidulePage({
    stencil:[Web,{}]
})

const someComponents = new MiduleComponents({
    template:{
        tagName:"DIV",
        props:{
            id:"app",
            className:"wtaonima",
        },
        children:["this is a vm"]
    },
    data:{
        less:"more"
    }
})
someComponents.data.less = "notMore"

// export default () => render(someComponents.template,"#app")
export default () => render({
    tagName:"div",
    props:{
        id:"app",
        className:"wtaonima"
    },
    children:["this is a vm"]
},"#app")