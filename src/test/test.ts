import {MiduleComponents, MidulePage, MiduleStencil, render} from "../main";

const Web = new MiduleStencil({

})

const somePage = new MidulePage({
    stencil:[Web,{}]
})

const someComponents = new MiduleComponents({
    template:{
        tagName:"DIV",
        props:{
            "id":"app",
            "className":"wtaonima",
        },
        children:["this is a vm"]
    }
})

render(someComponents.template,"#app")
