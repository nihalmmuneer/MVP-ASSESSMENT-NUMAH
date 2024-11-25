import { Button } from "flowbite-react";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Banner from "../banner/Banner";
import Features from "../features/Features";
import Playlists from "../playlists/Playlists";
import SubscriptionBanner from "../subscription-banner/SubscriptionBanner";
// import Header from "../header/Header";

const Home = () => {
  return (
    <div className="mb-4 w-full">
      <div>
        <Banner />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Playlists />
      </div>
      <div>
        <SubscriptionBanner />
      </div>
    </div>
  );
};

export default Home;
