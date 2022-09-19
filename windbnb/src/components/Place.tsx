import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {
  place: {
    photo: string;
    type: string;
    rating: number;
    title: string;
    superHost: boolean;
    city: string;
    country: string;
    maxGuests: number;
  };
};

const Place = ({ place: { photo, type, rating, title, superHost } }: Props) => {
  return (
    <div className="rounded-lg w-[400px] flex flex-col m-4 my-4">
      <img src={`${photo}`} className="rounded-xl h-72 object-cover" />
      <div className="flex flex-row items-center pt-4 pb-2">
        <div className="justify-start flex space-x-2 items-center">
          {superHost && (
            <div className="rounded-lg border-zinc-800 border font-semibold text-xs px-1">
              SUPER HOST
            </div>
          )}
          <div className="text-[#828282] text-xs">{type}</div>
        </div>
        <div className="ml-auto flex flex-row">
          <AiFillStar className="text-red-500" />
          <span className="text-[#4F4F4F] text-xs">{rating}</span>
        </div>
      </div>
      <div className="text-sm font-bold">{title}</div>
    </div>
  );
};

export default Place;
