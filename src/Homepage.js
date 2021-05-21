import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Home() {
    const history = useHistory()
    const routeToOrder = () => {
        console.log('Submit to go to order page')
        history.push('/order-pizza')
    }

    return (
        <div className='order-pizza'>
            <img
                className='pizza-img'
                src='D:\Lambda\Web43\Unit2-3\web-sprint-challenge-single-page-applications\Assets\Pizza.jpg'
                alt='Fresh Pizza'
            />
            <button
                onClick={routeToOrder}
                className='pizza-button'
            >
                Pizza?
            </button>
        </div>
    )
}
