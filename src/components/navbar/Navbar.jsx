import { useState } from 'react'
import './navbar.scss'
import SecureAgric from '../../img/secure-agric.png'
import MobileNav from '../../mobileNav/MobileNav'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true)

    const menuShow = () => {
        const showMobileNav = document.getElementById('mobileNav')
        if(showMenu === true){
            showMobileNav.style.top='60px'
        }else if(showMenu === false){
            showMobileNav.style.top='-350px'
        }
        setShowMenu(!showMenu)

        
    }
    return (
        <div className="navbar">
            <div className="left">
                <img src={SecureAgric} className="logoImg" alt="" />
                {/* logo */}
            </div>
            <div className="right">
                <div className="hamburger" onClick={menuShow}>
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                </div>
                <ul className="nav-ul">
                    <li className="nav-ul-li"><a href="#home" className="nav-links">Home</a></li>
                    <li className="nav-ul-li"><a href="#about" className="nav-links">About Secure Agric</a></li>
                    <li className="nav-ul-li"><a href="#products" className="nav-links">Products</a></li>
                    <li className="nav-ul-li"><a href="#members" className="nav-links">Members</a></li>
                    <li className="nav-ul-li"><a href="#contact" className="nav-links">Contact</a></li>
                </ul>
            </div>
            <MobileNav />
        </div>
    )
}
export default Navbar
