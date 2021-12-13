import Address from '../address/Address'
import Form from '../form/Form'
import './contact.scss'

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h3 className="pageTitle">
                Contact
            </h3>
            <div className="conatctContent">
                <div className="left">
                    <Form />
                </div>
                <div className="right">
                    <Address />
                </div>
            </div>
        </div>
    )
}
export default Contact
