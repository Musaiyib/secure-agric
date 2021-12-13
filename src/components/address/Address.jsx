import './address.scss'

const Address = () => {
    return (
        <div className="address">
            <h3>Support</h3>
            <div className="addressContent">
                {/* <div className="location">
                    <span title="Our office" ><i className="fas fa-map-marker-alt"></i> Gombe </span>
                </div>
                <iframe src="" frameborder="0"></iframe> */}
                <div className="contact-address">
                    {/* eslint-disable-next-line */}
                    <a title="Our facebook handle" href="" className="fab fa-facebook-f"></a> 
                    {/* eslint-disable-next-line */}
                    <a title="Our instagram handle" href="" className="fab fa-instagram"></a> 
                    {/* eslint-disable-next-line */}
                    <a title="Our whatsapp handle" href="" className="fab fa-whatsapp"></a> 
                    {/* eslint-disable-next-line */}
                    <a title="Our twitter handle" href="" className="fab fa-twitter"></a> 
                    {/* eslint-disable-next-line */}
                    <a title="Our telegram handle" href="" className="fab fa-telegram"></a> 
                </div>
            </div>
        </div>
    )
}

export default Address
