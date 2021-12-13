import Bg from '../../img/bg.jpg'
import './advisor.scss'

const Advisor = (props) => {
    const {name, image, position, shortNote, facebook, twitter, instagram} = props
    return (
        <div className="advisors-card">
            <div className="bg">
                <img src={Bg} alt="" />
            </div>
            <div className="pic">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span><i className="position">{position}</i></span>
                <p>{shortNote}</p>
                <div className="icons">
                    {/* eslint-disable-next-line */}
                    <a href={facebook} className="fab fa-facebook-f"></a> 
                    {/* eslint-disable-next-line */}
                    <a href={twitter} className="fab fa-twitter"></a> 
                    {/* eslint-disable-next-line */}
                    <a href={instagram} className="fab fa-instagram"></a> 
                </div>
            </div>
        </div>
    )
}

export default Advisor