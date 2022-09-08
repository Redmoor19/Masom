import './MainBg.scss';
import DetergentIcon from '../../resources/icons/detergentIcon/detergent';

const MainBg = () => {
    return(
        <section className='background'>
            <div className="container">
                <h1 className='background__title'>MASOM NY</h1>
                <h2 className='background__subtitle'>Trusted products</h2>
                <DetergentIcon className='detergent' color='white' />
                <p className='background__descr'>Cleaning substances for your business. <br /> Want to try our product?</p>
                <button className='background__button'>More</button>
            </div>
        </section>
    )
}

export default MainBg;
