
const mainContainer = document.querySelector('#root')

function customRender(ReactElement,mainContainer){
    const domElement = document.createElement(ReactElement.type)
    domElement.innerHTML = ReactElement.children
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)
    mainContainer.appendChild(domElement)
    
    }
    

const ReactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click me to visit google'
}
customRender(ReactElement,mainContainer)
