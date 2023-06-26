"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { use } from "react";

export default function Hero() {
  //handleScroll
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find , Book, or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your travel experience with our car rental services in the
          use of this awesome application and book your car now!
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={"/hero.png"}
            alt="hero image"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
}
