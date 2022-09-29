import trollFace from "../assets/troll-face.svg"
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="div-logo">
                <a href="#" className="header-logo"><img src={trollFace} alt="logo" /></a>
                <span className="header--title">Meme Generator</span>
            </div>
            <p className="header--description">React Course - Project 3</p>
        </header>
    )
}