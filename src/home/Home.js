import React from "react";
import "../main/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="a"
        />

        <div className="home__row">
          <Product
            id={1}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={3}
            price={19.99}
          />
          <Product
            id={2}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            id={3}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={5}
            price={19.99}
          />
        </div>

        <div className="home__row">
          <Product
            id={4}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={5}
            price={19.99}
          />
        </div>

        <div className="home__row">
          <Product
            id={5}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX_325_B01,204,203,200_.jpg"
            rating={5}
            price={19.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
