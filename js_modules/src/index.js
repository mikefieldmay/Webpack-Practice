const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () => {
    System.import('./image_viewer')
        .then(module => {
            module.default()
        }) // this pulls in a single module of code. 
    //Everything imported in image_viewer will be brought in too
}

document.body.appendChild(button)