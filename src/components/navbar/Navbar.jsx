import { useEffect } from 'react'
import './navbar.scss'
import SecureAgric from '../../img/secure-agric.png'
import MobileNav from '../../mobileNav/MobileNav'

const Navbar = ({setMenuOpen, menuOpen}) => {
    // const [showMenu, setShowMenu] = useState(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mobile = () => {
        const showMobileNav = document.getElementById('mobileNav')
        if(menuOpen === true) {
            showMobileNav.style.top='60px'
        }else if(menuOpen === false){
            showMobileNav.style.top='-350px'
        }
    }
    const screenWidth = () =>{

        if(window.innerWidth >= 841 ){
            setMenuOpen(false)
        }

    }
    window.addEventListener('resize', screenWidth)

    useEffect(() => {
        mobile()
    }, [mobile])
    return (
        <div className={"navbar " + ( menuOpen ? "active" : "")}>
            <div className="left">
                <img src={SecureAgric} className="logoImg" alt="" />
                {/* logo */}
            </div>
            <div className="right">
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
            <MobileNav setMenuOpen={setMenuOpen} />
        </div>
    )
}
export default Navbar
