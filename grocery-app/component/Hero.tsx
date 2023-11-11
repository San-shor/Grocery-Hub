"use client";

import Image from "next/image";
import { Button } from ".";

const Hero = () => {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <h1>
          Your One-Stop Destination for Fresh, Quality, and Convenient Shopping!
        </h1>
        <p>
          Explore a Seamless Online Grocery Experience - Browse, Shop, and Enjoy
          Hassle-Free Delivery at Your Fingertips
        </p>
        <Button
          title="Explore Grocery"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Hero;
