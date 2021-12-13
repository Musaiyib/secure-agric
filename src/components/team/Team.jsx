import './team.scss'
import Bg from '../../img/bg-team.jpg'

const Team = (props) => {
    const {name, image, skills, facebook, twitter, instagram, github} = props
    return (
        <div className="team-card">
            <div className="bg">
                <img src={Bg} alt="" />
            </div>
            <div className="team-info">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <span className="skills">{skills}</span>
                <div className="team-icons">
                    {/* eslint-disable-next-line */}
                    <a href={facebook} className="fab fa-facebook-f"></a>
                    {/* eslint-disable-next-line */}
                    <a href={twitter} className="fab fa-twitter"></a>
                    {/* eslint-disable-next-line */}
                    <a href={instagram} className="fab fa-instagram"></a>
                    {/* eslint-disable-next-line */}
                    <a href={github} className="fab fa-github"></a>
                </div>
            </div>
        </div>
        
    )
}

export default Team
