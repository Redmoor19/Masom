import Nav from "../Nav/Nav";
import SmallBG from "../SmallBg/SmallBg";
import Showcase from "../Showcase/Showcase.js";
import OrderForm from "../OrderForm/OrderForm";

const Products = () => {
    return(
        <>
            <Nav />
            <SmallBG title='Our products'/>
            <Showcase />
            <OrderForm />

        </>
    )
}

export default Products;