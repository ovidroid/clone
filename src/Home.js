import React from 'react'
import { Link } from '@material-ui/core';
import './Home.css'
import Images from './images/mob.jpg'
import Product from './Product'
import mitv from './images/mitv.jpg'
import wm from './images/wm.jpg'
import miband from './images/miband.jpg'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'

function  Home(){
return(
    <div className="Home">
<img className="image" alt="img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"/>
<div className="home__row">

<Product 
    id="121212"
    title="Iphone 11 pro Max 8gb ram 128gb memory"
    price={25000}
    image ={Images}></Product>

<Product1 
    id="121215"
    title="MI Television"
    price={1800}
    image ={mitv}></Product1>

<Product2 
    id="121216"
    title="LG 8kg Washing Machine"
    price={2200}
    image ={wm}></Product2>
    
<Product3 
    id="121218"
    title="MI Band"
    price={60}
    image ={miband}></Product3>

</div>

    </div>




)}

export default Home