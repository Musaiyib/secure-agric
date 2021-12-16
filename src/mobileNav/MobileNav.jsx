import './mobileNav.scss'


const MobileNav = ({setMenuOpen}) => {
    return (
        <div className="mobileNav" id="mobileNav" >
            <ul className="nav-ul" onClick={() => setMenuOpen(false)}>
                <li className="nav-ul-li"><a href="#home" className="nav-links">Home</a></li>
                <li className="nav-ul-li"><a href="#about" className="nav-links">About Secure Agric</a></li>
                <li className="nav-ul-li"><a href="#products" className="nav-links">Products</a></li>
                <li className="nav-ul-li"><a href="#members" className="nav-links">Members</a></li>
                <li className="nav-ul-li"><a href="#contact" className="nav-links">Contact</a></li>
            </ul>
        </div>
    )
}

export default MobileNav
