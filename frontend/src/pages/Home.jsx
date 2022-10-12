import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import CoinCard from '../components/CoinCard'
import CoinDesc from '../components/CoinDesc'
import Navbar from '../components/Navbar'
import ReactPaginate from 'react-paginate'
const Home = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)


    //Fetching the first 12 cryptos 
    useEffect(() => {
        const fetchCrypto = () => {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false').then(res => {

                setCoins(res.data)
                setLoading(false)

            }).catch(error => console.log(error))

        }
        fetchCrypto();
        setLoading(false)
    }, [])

    //Fetching the ceypto data for the requested Page
    const fetchCryptos = async (currentPage) => {
        setLoading(true)
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${currentPage}&sparkline=false`).then(res => {
            setCoins(res.data)
            setLoading(false)
        }).catch(error => console.log(error))

    }

    //Getting the requested page Number from the handleClick Handler and refetching the next 12 cryptos
    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        await fetchCryptos(currentPage)

    }


    return (
        <>
            <Navbar />
            {loading ? <Spinner variant='info' animation="border" role="status" className='spinnerStyle'>
                <span className="visually-hidden">Loading...</span>
            </Spinner> : (
                <div className="coin-app">
                    <h1 className='intro-h1'>Cryptos Right Now!</h1>
                    <CoinDesc />

                    {coins.map(coin => (

                        <CoinCard
                            id={coin.id}
                            name={coin.name}
                            image={coin.image}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            highPrice={coin.high_24h}
                            lowPrice={coin.low_24h}
                            priceChangePercentage={coin.price_change_percentage_24h}
                        />
                    ))}

                </div>
            )
            }
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={'...'}
                pageCount={15}
                marginPagesDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />

        </>
    )
}

export default Home