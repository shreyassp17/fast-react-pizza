
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import EmptyCart from './EmptyCart'
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";


function Cart() {
  const username = useSelector(state => state.user.username)
  const cart = useSelector(getCart);

  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-3">
      <LinkButton to='/menu'>Back to menu</LinkButton>
      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map(item => <CartItem item={item} key={item.id} />)}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">Order Pizzas</Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
