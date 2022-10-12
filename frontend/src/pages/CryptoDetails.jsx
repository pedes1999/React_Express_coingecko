import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import CoinCardDetails from '../components/CoinCardDetails'
const CryptoDetails = () => {
    const params = useParams()
    const [loading, setLoading] = useState(true)
    const [coin, setCoin] = useState([])
    const [image, setImage] = useState('')


    //Fetch a Single Crypto Details from backend
    useEffect(() => {
        const fetchCrypto = () => {
            axios.get(`/coins/${params.id}`).then(res => {

                setCoin(res.data)
                setImage(res.data.image.small)
                setLoading(false)
            }).catch(error => console.log(error))

        }
        fetchCrypto();

    }, [params.id])

    return (
        <>
            <Navbar />
            {loading ? <Spinner animation="border" role="status" className='spinnerStyle'>
                <span className="visually-hidden">Loading...</span>
            </Spinner> : (<div className="container-fluid">
                <h1 className='text-center display-2' style={{ color: 'lightblue' }}>{coin.name}</h1>
                <img src={image} alt="crypto" className='rounded mx-auto d-block img-responsive' />
                <div className='coin-info'>
                    <p dangerouslySetInnerHTML={{ __html: coin.description.en }} className='crypto-desc'>
                    </p>
                    <CoinCardDetails
                        currPrice={coin.market_data.current_price.usd}
                        id={coin.id}
                        name={coin.name}
                        priceChange24h={coin.market_data.price_change_24h}
                        highPrice={coin.market_data.high_24h.usd}
                        lowPrice={coin.market_data.low_24h.usd}
                        priceChangePerc1y={coin.market_data.price_change_percentage_1y}
                        priceChangePerc7d={coin.market_data.price_change_percentage_7d}
                        priceChangePerc14d={coin.market_data.price_change_percentage_14d}
                        priceChangePerc30d={coin.market_data.price_change_percentage_30d}
                        priceChangePerc60d={coin.market_data.price_change_percentage_60d}
                        priceChangePerc200d={coin.market_data.price_change_percentage_200d}
                    />
                </div>


            </div>)

            }



        </>
    )
}

export default CryptoDetails