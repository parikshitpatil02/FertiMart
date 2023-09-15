import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className="home__container">   
            <img className='home__image' src='https://drive.google.com/uc?export=view&id=1NDfR2NdQ84O0fAOWNrtUbZYIPwnSHpmo'/>

            <div className='home__row'>
                <Product 
                id="101"
                title='Ugaoo Cow Dung Manure Fertilizers for Plants & Home Gardening - 5 kg' 
                price={299} 
                image="https://drive.google.com/uc?export=view&id=1OzJFkF-1IRLeYt9yO_4cS5Ne81AKE6gt" 
                rating={5}
                />
                <Product 
                id="99"
                title='TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)' 
                price={450} 
                image="https://drive.google.com/uc?export=view&id=1V9Bk-P8luhRwV0tJVAwXIPuUVaAoDI0W" 
                rating={4}
                />
            </div>

            <div className='home__row'>
            <Product 
                id="101"
                title='Growth Plus by RBH for initial development of roots and upliftmentof shoot (for saplings)' 
                price={299} 
                image="https://drive.google.com/uc?export=view&id=1sEZWcQer67OMiMmG5Ke9JX5mW-F9099T" 
                rating={5}
                />
                <Product 
                id="102"
                title='TrustBasket Organic Vermicompost Fertilizer Manure For Plants 5 Kg Green' 
                price={299} 
                image="https://drive.google.com/uc?export=view&id=1qALenJzMdbA-Hg2uGF5YZaOkeD4c6jOt" 
                rating={3}
                />
                <Product 
                id="103"
                title='TrustBasket Enriched Organic Earth Magic Potting Soil Fertilizer for Plants, 5 Kg' 
                price={999} 
                image="https://drive.google.com/uc?export=view&id=1qp1yrJOswgrgRmXDjpiSRWGxz6W7u-MO" 
                rating={4}
                />

            </div>

            <div className='home__row'>
                <Product 
                id="104"
                title='Mahadhan Micro-Nutrients combo Chelated Foiler Application + Chelated Iron Fe + Chelated Zinc - EDTA' 
                price={1749} 
                image="https://drive.google.com/uc?export=view&id=1NQMIc6EzGUMIRcbNQQpB8Ojxn6e-3REt" 
                rating={5}
                />


            </div>
        </div>    
    </div>
  )
}

export default Home