import { Link } from "wouter"
import './ErrorPage.css'

const gifsError = ['KlrMS4vyq5KSY','8L0Pky6C83SzkzU55a','oYQ9HRm5Mo7VXeMNVR','3osxY9kuM2NGUfvThe','haZOqHKz9tTfW','mq5y2jHRCAqMo']
export default function ErrorPage(){

    const randomImage = () =>{
        const random = Math.floor(Math.random()*gifsError.length) + 1
        return `https://i.giphy.com/media/${gifsError[random]}/giphy.webp`
    }
    
    return (
    <div>
    <img src={randomImage()} alt='error image'/>
    <Link to="/"><button className='error-btn'>Home</button></Link>
    </div>
        )

}