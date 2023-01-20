import React, { useEffect, useState } from "react";
import { Splide } from "@splidejs/react-splide";
import HomeBanner from "./HomeBanner";
import CategoriesDetails from "../Categories/CategoriesDetails";

const Home = () => {
  const [banner, setBanner] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/banner`, {
      headers: {
        freezerToken: `bearer ${localStorage.getItem("freezerToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          return console.log(data);
        }
        setBanner(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        let categories = [...new Set(data.map((menu) => menu.categoryid))];
        setProducts(categories);
      });
  }, []);

  return (
    <div className="bg-primary pt-16 ">
      <div className="flex justify-center items-center w-4/5 mx-auto text-white h-[70vh] bg-secondary">
        <img
          className="w-full h-full"
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-fresh-cool-cool-taobao-refrigerator-poster-banner-image_195027.jpg"
          alt=""
        />
      </div>
      <div className="w-4/5 mx-auto my-12 ">
        {products?.map((category, idx) => (
          <CategoriesDetails
            key={idx}
            category={category}
            quantity={3}
          ></CategoriesDetails>
        ))}
      </div>
    </div>
  );
};

export default Home;
