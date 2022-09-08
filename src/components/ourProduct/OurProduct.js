import './OurProduct.scss';
import DetergentIcon from '../../resources/icons/detergentIcon/detergent';
import products from '../../resources/allProducts.png';
import eco from '../../resources/ecolabel-logo.gif';

const OurProduct = () => {
    return(
        <div className="container">
            <section className="ourProduct">
                <h2 className="title">Our product</h2>
                <DetergentIcon color='black' />
                <div className="ourProduct__grid">
                    <img src={eco} alt="eco" className="ourProduct__eco-label" />
                    <img className='ourProduct__img' src={products} alt="products" />
                    <p className="descr ourProduct__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias beatae atque optio incidunt deleniti sed qui blanditiis neque asperiores tenetur praesentium alias, earum rem exercitationem esse, corrupti ea suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ipsum adipisci! Cum obcaecati rerum quo quae? Vel hic, quo amet voluptate beatae aliquam, nobis dignissimos ea, iure praesentium consequuntur sint!</p>
                </div>
            </section>
        </div>
    )
}

export default OurProduct;