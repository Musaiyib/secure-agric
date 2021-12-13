import Advisor from '../advisor/Advisor'
import Team from '../team/Team'
import './members.scss'
import dummyData from '../../dummyData'

const Member = () => {
    const Teams = dummyData.teams
    const Advisors = dummyData.advisors

    return (
        <div className="members" id="members">
            <h3 className="pageTitle">Baord Of Advisors</h3>
            <div className="advisors">
                {Advisors.map((advisor, index) => <Advisor key={index++} name={advisor.name} image={advisor.image} facebook={advisor.faebook} twitter={advisor.twitter} instagram={advisor.instagram} position={advisor.position} shortNote={advisor.note} />)}
            </div>

            <hr className="line"/>
            <h3 className="pageTitle">Teams</h3>
            <div className="teams">
                {Teams.map((team, index) => <Team key={index++} name={team.name} skills={team.skills} image={team.image} facebook={team.faebook} twitter={team.twitter} instagram={team.instagram} github={team.github} />)}
            </div>
        </div>
    )
}
export default Member