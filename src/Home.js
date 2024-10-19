import React from 'react'
import "./Home.css";
import Product from './Product';
import cowDungManureImage from './assets/ugaoo-Cow-manure.jpeg'
import NeemPowderImage from './assets/Neem-Powder-4-Plants.jpeg'
import GrowthPlus from './assets/Growth_Plus.jpeg'
import vermiCompost from './assets/vermi-compost.jpeg'
import pottingSoil from './assets/Potting-Soil.jpeg'
import comboFertilizer from './assets/combo-fertilizer.png'
import fertimartHomeMain from './assets/fertimart-home-main.jpeg'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">   
            <img className='home__image' src={fertimartHomeMain}/>

            <div className='home__row'>
                <Product 
                id="101"
                title='Ugaoo Cow Dung Manure Fertilizers for Plants & Home Gardening - 5 kg' 
                price={299} 
                image={cowDungManureImage}
                rating={5}
                />
                <Product 
                id="99"
                title='TrustBasket Neem Cake Powder Organic Fertilizer and Pest Repellent for Plants (450 GMS)' 
                price={450} 
                image={NeemPowderImage} 
                rating={4}
                />
            </div>

            <div className='home__row'>
            <Product 
                id="101"
                title='Growth Plus by RBH for initial development of roots and upliftmentof shoot (for saplings)' 
                price={299} 
                image={GrowthPlus}
                rating={5}
                />
                <Product 
                id="102"
                title='TrustBasket Organic Vermicompost Fertilizer Manure For Plants 5 Kg Green' 
                price={299} 
                image={vermiCompost}
                rating={3}
                />
                <Product 
                id="103"
                title='TrustBasket Enriched Organic Earth Magic Potting Soil Fertilizer for Plants, 5 Kg' 
                price={999} 
                image={pottingSoil}
                rating={4}
                />

            </div>

            <div className='home__row'>
                <Product 
                id="104"
                title='Mahadhan Micro-Nutrients combo Chelated Foiler Application + Chelated Iron Fe + Chelated Zinc - EDTA' 
                price={1749} 
                image={comboFertilizer}
                rating={5}
                />


            </div>
        </div>    
    </div>
  )
}

export default Home