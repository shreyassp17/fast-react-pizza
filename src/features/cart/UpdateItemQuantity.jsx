import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from 'prop-types'
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {

    const dispatch = useDispatch()

    return (
        <div className="flex gap-1 items-center md:gap-3">
            <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))} type="round">-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))} type="round">+</Button>
        </div>
    )
}

UpdateItemQuantity.propTypes = {
    pizzaId: PropTypes.number,
    currentQuantity: PropTypes.number
}
