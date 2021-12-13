import './about.scss'
import SecureAgric from '../../img/secure-agric.png'

const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="pageTitle">What is SECURE AGRIC?</h2>
            <div className="pageDescription">
                <div className="card">
                    <img src={SecureAgric} className="img" alt="img" /> 
                    <h3 className="header">Secure Agric</h3>
                    <p className="contentNote">
                        Secure Agric is an agricultural technology company, focused on digitising the value chain using cutting edge technologies. Blockchain, Machine learning and internet of things. 
                    </p>
                    <p className="contentNote">
                        We are a Farmer focused digital agriculture platform, with emphasis on financial inclusion, market access and digital inclusion, for a sustainable agriculture practice & improving farmers' economies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
