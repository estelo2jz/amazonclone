import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img 
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3196_HOL20_Acquisition/Amazon_GW_DesktopTallHero_ENG_RB-3196_HOL20_v2_Acquisition_1500x600._CB415330765_.jpg"
        alt="logo"
      />
         <div className="home__row">
      {/* Product id, title, price, rating, image */}
        <Product 
          id = "123123"
          title = "Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo unlocked LGA1151 300 Series 95W"
          price = {599.99}
          rating = {5}
          image = "https://m.media-amazon.com/images/I/71Q5sdPHD-L._AC_UY218_.jpg"
        />
        <Product 
          id = "659874"
          title = "PS5 Console"
          price = {799.99}
          rating = {5}
          image = "https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
      {/* Product id, title, price, rating, image */}
        <Product 
          id = "569875"
          title = "XBOX Series X Console"
          price = {599.99}
          rating = {5}
          image = "https://m.media-amazon.com/images/I/51ntJkth4CL._AC_UY218_.jpg"
        />
        <Product 
          id = "012453"
          title = "AOC CQ27G2 27' Super Curved Frameless Gaming Monitor QHD 2K"
          price = {499.99}
          rating = {3}
          image = "https://m.media-amazon.com/images/I/81oORaahKZL._AC_UY218_.jpg"
        />
        <Product 
          id = "965486"
          title = "XFX Radeon RX 570 RS XXX Edition 1286MHz, 8gb GDDR5, DX12 VR Ready, Dual BIOS, 3xDP HDMI DVI, AMD Graphics Card (RX-570P8DFD6)"
          price = {399.99}
          rating = {4}
          image = "https://m.media-amazon.com/images/I/61izqMPsY7L._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
      {/* Product id, title, price, rating, image */}
        <Product 
          id = "123123"
          title = "Samsung Double QHD CRG9 Series 49-Inch Curved Gaming Monitor (LC49RG90SSNXZA), Black (Renewed)"
          price = {999.99}
          rating = {4}
          image = "https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
        />
      </div>
    </div>
  )
}

export default Home;