import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import CoinCard from '../components/CoinCard'
import CoinDesc from '../components/CoinDesc'
import Navbar from '../components/Navbar'
import ReactPaginate from 'react-paginate'
import { GrBitcoin } from 'react-icons/gr'
const Home = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)


    //Fetching the first 14 Cryptos Through the Backend
    useEffect(() => {
        const fetchCryptos = async () => {
            const res = await axios.get('/coins/markets/1')
            setCoins(res.data)
        }
        fetchCryptos()
        setLoading(false)
    }, [])

    //Function to fetch the requested page Cryptos from backend
    const fetchCryptos = async (currentPage) => {

        axios.get(`/coins/markets/${currentPage}`).then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))

    }

    //Getting the requested page Number from the handleClick Handler and refetching the next 14 cryptos
    const handlePageClick = async (data) => {
        setLoading(true)
        let currentPage = data.selected + 1;
        await fetchCryptos(currentPage)
        setLoading(false)

    }


    return (
        <>
            <Navbar />
            {loading ? <Spinner variant='info' animation="border" role="status" className='spinnerStyle'>
                <span className="visually-hidden">Loading...</span>
            </Spinner> : (

                <div className="coin-app">
                    <h1 className='intro-h1'><GrBitcoin style={{ marginBottom: '7px' }} /> Cryptos Right Now!</h1>
                    <CoinDesc />

                    {coins.map(coin => (

                        <CoinCard
                            key={coin.id}
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