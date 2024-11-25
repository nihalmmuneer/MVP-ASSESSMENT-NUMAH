import React from "react";

const SubscriptionBanner = () => {
  return (
    <div className="mt-6">
      <div className="md:flex  item">
        <div className=" flex flex-col p-6">
          <div className="bg-custom-beige flex flex-col gap-4 pb-6 p-5 flex-1 rounded-lg">
            <h2 className="text-lg font-montserrat font-semibold text-black">
              Wishlist
            </h2>
            <p className="text-xs leading-6 text-black font-montserrat">
              Save Your Favourite Tracks <br />
              Upcoming Events
              <br />
              Exclusive Releases <br />
              Share Your Wishlist
            </p>
          </div>
          <div>
            <img src="/entertainment.png" alt="entertainment" />
          </div>
        </div>
        <div className="p-6 flex">
          <div className="flex flex-col gap-4  w-full">
            <div className="bg-custom-grey flex flex-col gap-4  p-5 rounded-lg flex-1 ">
              <h2 className="text-lg font-montserrat font-semibold text-black">
                Direct Artist Support
              </h2>
              <p className="text-xs font-montserrat text-black leading-6">
                Support your favourite artists directly on <br />
                Numah. Contributing to their Journey
                <br />
                Exclusive fan Experiences Artist Profiles
              </p>
            </div>
            <div className="bg-custom-purple flex flex-col flex-1 p-5 rounded-lg">
              <div className="flex flex-col gap-4">
                <h2 className="text-lg font-montserrat font-semibold text-black">
                  Gift Songs to Friends
                </h2>
                <p className="text-xs font-montserrat text-black leading-6">
                  Spread the joy of music by gifting songs to <br />
                  your friends with Numah&apos;s unique gifting
                  <br />
                  feature
                </p>
              </div>
              <div className="mt-10">
                <div className="flex gap-2">
                  <img src="/avatar_one.png" alt="avatar_one" />
                  <img src="/avatar_two.png" alt="avatar_two" />
                  <img src="/avatar_three.png" alt="avatar_three" />
                  <div className="bg-custom-grey rounded-lg flex items-center justify-center max-w-fit">
                    <span className="text-black text-sm p-2">+1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col p-6 flex-1  items-center w-full">
            <img
              src="/purchase-music.png"
              alt="subscription-img"
              className="md:w-[95%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
