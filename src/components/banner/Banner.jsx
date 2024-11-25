import React from "react";

const Banner = () => {
  return (
    <div className="mb-4">
      <div className="p-4 flex justify-center mt-5">
        <img src="/iphone.png" alt="banner-img" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-black text-base text-center font-montserrat ">
            Numah for Fans
          </h1>
          <p className="text-xs font-montserrat  text-gray-500 text-center">
            Become a part of our vibrant music family by signing up today. Enjoy
            exclusive
            <br />
            access to new music, artist content and much more
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
  <div className="flex flex-col md:flex-row gap-3 w-full">
    <div className="flex flex-col gap-2 bg-white p-2 w-full md:w-[33%] h-[300px] rounded-lg">
      <div className="flex gap-1 items-center h-[15%]">
        <div className="border rounded-full flex items-center justify-center w-full h-full px-6">
          <span className="text-sm text-black font-montserrat">New music</span>
        </div>
        <div className="h-full">
          <img
            src="/media-icon.png"
            alt="media-icon"
            className="h-full w-full object-contain rounded-full"
          />
        </div>
      </div>
      <div className="flex gap-1 items-center h-[15%]">
        <div className="h-full">
          <img
            src="/guitar-icon.png"
            alt="guitar-icon"
            className="h-full w-full object-contain rounded-full"
          />
        </div>
        <div className="border rounded-full flex items-center justify-center w-full h-full px-6">
          <span className="text-sm text-black font-montserrat">New artist</span>
        </div>
      </div>
      <div className="flex items-center justify-center h-[15%]">
        <span className="border rounded-full text-sm font-montserrat text-black p-2 px-6">
          New community
        </span>
      </div>
      <div className="h-[50%]">
        <img
          src="/headset-img.png"
          alt="headset-icon"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <div className="h-[300px] md:w-[33%] w-full rounded-lg">
      <img
        src="/frame-img.png"
        alt="frame-img"
        className="h-full w-full object-cover rounded-lg"
      />
    </div>

    <div className="flex flex-col w-full md:w-[33%] h-[300px] justify-between">
      <div className="h-[50%]">
        <img
          src="music-disc.png"
          alt="music-disc"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="h-[50%]">
        <img
          src="musics.png"
          alt="music"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Banner;
