import './home.scss'
import Particles from 'react-particles-js'

const Home = () => {

    return (
        <div className="home" id="home">
            <Particles params={{
                    "particles": {
                        "number": {
                            "value": 75
                        },
                        "size": {
                            "value": 3
                        },
                        "move": {
                            "out_mode": "bounce"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            }
                        }
                    }
            }} className="particles" />
            <div className="blockchainName">
                <h3 className="name">SECURE AGRIC</h3>
                <p className="motto">one blockchain for the farmers</p>
            </div>
        </div>
    )
}
export default Home
