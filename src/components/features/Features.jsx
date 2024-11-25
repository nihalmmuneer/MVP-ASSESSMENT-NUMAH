import React from "react";

const Features = () => {
  return (
    <div>
      <div className="p-6">
        <div className="mb-4 mt-4">
          <h2 className="font-bold font-montserrat  text-base text-black leading-5">
            Get started with our Features of the
            <br />
            Numah App
          </h2>
        </div>
        <div className="">
          <div className="md:flex gap-2">
            <div className="bg-[#F8F8F8] p-3 flex-1 flex flex-col gap-2 max-w-fit rounded-lg">
              <img src="/guitar-man.png" alt="guitar-man" className="w-full" />
              <h2 className="text-base text-black font-semibold font-montserrat mt-3 ">
                {" "}
                Explore New Music
              </h2>
              <p className="text-xs text-[#000000] font-montserrat leading-6 ">
                Discover a diverse range of artists and genres. Our platform is
                designed to help you find hidden gems and latest hits that match
                your taste
              </p>
            </div>
            <div className=" rounded-lg bg-gradient-to-b max-w-md from-custom-yellow to-custom-transparent relative flex-1 p-6">
              <div className="">
                <img
                  src="/group-music.png"
                  alt="group-music"
                  className="opacity-5 h-[200px] w-full"
                />
                <div>
                  <div className="absolute top-24 flex flex-col justify-center">
                    <h2 className="text-lg text-black font-semibold leading-5 font-montserrat ">
                      <span className="">
                        Personalized <br />
                        Recommendations
                      </span>
                    </h2>
                    <p className="text-black mt-2 text-xs font-montserrat leading-6">
                      Enjoy tailored music suggestions based on your listening
                      habits. The more you listen, the better we get at cursing
                      playlists just for you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 gap-2 flex flex-col ">
              <div className="bg-[#F8F8F8] relative p-6 flex flex-col gap-2 rounded-lg">
                <h2 className="text-base text-black font-montserrat  font-semibold">
                  Exclusive Content
                </h2>
                <p className="text-xs text-black font-montserrat leading-6">
                  Gain access to exclusive interviews, behind- <br />
                  the-scenes footage, and special
                  <br />
                  performances from your favourite artists,
                  <br />
                  Stay connected with the music you love.
                </p>
              </div>
              <div className="bg-[#F8F8F8] relative p-6 flex flex-1 flex-col gap-2 rounded-lg">
                {" "}
                <h2 className="text-base text-black font-semibold font-montserrat ">
                  Engage with Artists
                </h2>
                <p className="text-xs text-black font-montserrat leading-6">
                  Participate in Q&A sessions, live, chats, and virtual
                  meet-and-greets with artists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
