import '../styles/image_viewer.css'
import small from '../assets/small-image.jpg' // small is the data representation of the image

export default () => {
    const image = document.createElement('img');
    image.src = small
    
    document.body.appendChild(image);
}