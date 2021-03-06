import axios from 'axios'
const HOST = 'https://quickly-food.herokuapp.com'

const orderActions = {
  getUserOders: (userId) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.get(`${HOST}/api/orders`, userId)
        console.log(res.data)
        if (!res.data.success) throw new Error(res.data.error)
        dispatch({ type: 'GET_USER_ORDERS', payload: res.data.response })
        return { success: true, response: res.data.response, error: null }
      } catch (e) {
        return { success: false, response: null, error: e.message }
      }
    }
  },

  // const { products, delivery, paymentMethod } = req.body
  createOrder: (props, order) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(`${HOST}/api/orders`, order)
        if (!res.data.success) throw new Error(res.data.error)
        const { newOrder, userData } = res.data.response
        dispatch({ type: 'CREATE_ORDER', payload: { newOrder, userData } })
        dispatch({ type: 'RESET_CART' })
        return props.navigation.push('confirmation')
      } catch (e) {
        return { success: false, response: null, error: e.message }
      }
    }
  },
  cancellOrder: (orderId) => {
    return async (dispatch) => {
      try {
        const res = await axios.put(`${HOST}/api/order/` + orderId)
        if (!res.data.success) throw new Error(res.data.error)
        const { orderCancelled, products } = res.data.response
        dispatch({ type: 'EMIT_CANCELL' })
        dispatch({ type: 'GET_PRODUCTS', payload: products })
        return dispatch({ type: 'CANCELL_ORDER', payload: { orderCancelled } })
      } catch (e) {
        console.log(e.message)
        return { success: false, response: null, error: e.message }
      }
    }
  },
}

export default orderActions
