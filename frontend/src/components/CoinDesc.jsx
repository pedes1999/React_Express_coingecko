import React from 'react'

const CoinDesc = () => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className="coin">
                    <h1>Crypto Name</h1>
                    <h1 className='desc-symbol' >Symbol</h1>
                </div>
                <div className="coin-data">
                    <h1 className='desc-price'>Current Price</h1>
                    <h1 className='desc-h-24'>24h High</h1>
                    <h1 className='desc-l-24'>24h Low</h1>
                    <h1 className='desc-l-24'>24h Price Change</h1>

                </div>
            </div>
        </div>

    )
}

export default CoinDesc