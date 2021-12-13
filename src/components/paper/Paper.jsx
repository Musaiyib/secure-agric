import './paper.scss'


const Paper = (props) => {
    const {title, img, content} = props
    return (
        <div className="paper">
            <img src={img} className="img" alt="img" />
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
        </div>
    )
}

export default Paper
