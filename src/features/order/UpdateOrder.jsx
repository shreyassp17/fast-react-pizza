
import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import PropTypes from 'prop-types'
import { updateOrder } from '../../services/apiRestaurant'
function UpdateOrder({ order }) {
    console.log(order)
    const fetcher = useFetcher()

    return (
        <fetcher.Form method='PATCH' className='text-right'>
            <Button type="primary">
                Make Priority
            </Button>
        </fetcher.Form>
    )
}

export default UpdateOrder

export async function action({ request, params }) {
    console.log(request)
    const data = { priority: true }
    await updateOrder(params.orderId, data)
    return null;
}

UpdateOrder.propTypes = {
    order: PropTypes.object,
}
