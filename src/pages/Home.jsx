import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import ProductSelection from "../Components/ProductSelection";
import Section from "../Components/Section";
import Slider from "../Components/Slider";
import Spinner from "../Components/Spinner";
import { useProductContext } from "../context/ProductContext";
const Home = () => {
  const { products } = useProductContext();

  const location = useLocation();
  console.log(location.state);

  const categroyProducts =
    products &&
    products.filter((curElem, index) => {
      if (location.state && location.state.category === "all") {
        return location.state.category !== curElem.category;
      } else {
        return location.state && location.state.category === curElem.category;
      }
    });
  console.log(products);

  return (
    <>
      <div className=" flex flex-col w-screen space-y-16 sm:space-y-20">
        <Section />
        <ProductSelection />
        {products !== [] ? (
          <div>
            {location.state
              ? categroyProducts && (
                  <div className=" containerproducts grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 justify-items-center gap-16  mt-24 p-8     ">
                    {categroyProducts.map((curElem, index) => {
                      return <Slider key={index} {...curElem} />;
                    })}
                  </div>
                )
              : products && (
                  <div className=" containerproducts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-items-center gap-16  mt-24 p-8     ">
                    {products.map((curElem, index) => {
                      return <Slider key={index} {...curElem} />;
                    })}
                  </div>
                )}
          </div>
        ) : (
          <Spinner />
        )}

        <Footer />
      </div>
    </>
  );
};

export default Home;
