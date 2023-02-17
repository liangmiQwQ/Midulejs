import {MiduleComponents, MidulePage, MiduleStencil, render} from "../main";

const Web = new MiduleStencil({

})

const somePage = new MidulePage({
    stencil:[Web,{}]
})

const someComponents = new MiduleComponents()

render()