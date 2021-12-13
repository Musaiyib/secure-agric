import Paper from '../paper/Paper'
import './products.scss'
import Agpay from '../../img/agpay.png'
import Agrikoin from '../../img/agrikoin.png'

const product = [
    {
    title: "Agrikoin",
    img: Agrikoin,
    content: "Agrikoin is an agriculture backed crypto token, created to catalyze financial inclusion in the agriculture value chain, thereby enabling a decentralized market place for peer to peer exchange of farm produce, with agrikoin as a means of exchange."
    },
    {
    title: "AgPay",
    img: Agpay,
    content: "Agpay is a peer to peer blockchain enabled payment platform for fiat and cryptocurrencies. At agpay we are focused on providing the simple to use, easiest, fastest & cheapest means of sending and receiving payments for small scale businesses (SMEs), E-commerce & last mile populace with no access to formal financial  services."
    }
]

const Products = () => {
    return (
        <div className="products">
            <h2 className="pageTitle">Our Products</h2>
            <div className="allProducts">
                {product.map(product => <Paper key={product.title} title={product.title} img={product.img} content={product.content} />)}
            </div>
        </div>
    )
}

export default Products
