import React from "react";

const Playlists = () => {
  return (
    <div className="mb-4 mt-4">
      <div className="p-6">
        <h1 className="text-black font-montserrat font-semibold text-base md:mb-0 mb-4">
          Make and share Playlists
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="border rounded-full p-2 flex items-center">
              <span className="text-black font-[500]  font-montserrat text-xs whitespace-nowrap">
                Create Custom Playlists
              </span>
            </div>
            <div className="border rounded-full p-2 flex items-center">
              <span className="text-black font-[500]  font-montserrat text-xs">
                Colloborative Playlist
              </span>
            </div>
            <div className="border rounded-full p-2 flex items-center">
              <span className="text-black font-[500]  font-montserrat text-xs">
                Share with Community
              </span>
            </div>
            <div className="border rounded-full p-2 flex items-center">
              <span className="text-black font-[500]  font-montserrat text-xs">
                Explore Community
              </span>
            </div>
          </div>
          <div className=" flex justify-end">
            <img
              src="/group-img.png"
              alt="group-img"
              className="md:w-full md:h-full w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlists;
