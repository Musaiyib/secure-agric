import './form.scss'

const form = () => {
    return (
        <div className="form">
            <form className="contact-form">
                <h3>Send us Email</h3>
                 <input title="Please enter your name" className="form-inputs" type="text"  placeholder="Enter your name"/>
                 <input title="Please enter your email" className="form-inputs" type="email" name="" id=""  placeholder="Enter your email"/>
                 <textarea title="Tell us something" className="form-inputs" name="" id="" rows="4" placeholder="Type your message here"></textarea>
                 <button className="formBtn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default form
