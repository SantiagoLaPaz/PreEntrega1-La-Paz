import '../CartWidget/CartWidget.css';
import cart from './assets/carrito.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget"></img>
            0
        </div>
    )
}

export default CartWidget