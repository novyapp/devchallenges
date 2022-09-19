import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../components/Logo";
import Place from "../components/Place";
import data from "../data/stays.json";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [menu, setMenu] = useState(false);

  const [cityFilter, setCityFilter] = useState();

  const [guests, setGuests] = useState({ child: 0, adults: 0 });
  const [guestsMenu, setguestsMenu] = useState(false);

  const handleCity = (e) => {
    e.preventDefault();
    setCityFilter(e.target.value.split(",").slice(0, 1).join(""));
  };
  const handlePlusChild = (e) => {
    e.preventDefault();
    setGuests({ ...guests, child: guests.child + 1 });
  };
  const handleMinusChild = (e) => {
    e.preventDefault();
    if (guests.child >= 1) setGuests({ ...guests, child: guests.child - 1 });
  };
  const handlePlusAdult = (e) => {
    e.preventDefault();
    setGuests({ ...guests, adults: guests.adults + 1 });
  };
  const handleMinusAdult = (e) => {
    e.preventDefault();
    if (guests.adults >= 1) setGuests({ ...guests, adults: guests.adults - 1 });
  };

  const totalGuests = guests.child + guests.adults;

  console.log(totalGuests);
  console.log(menu);

  const placesFilter = data.filter(
    ({ city, maxGuests }) => city === cityFilter && maxGuests > totalGuests
  );
  console.log(placesFilter);

  let uniqueCities: string[] = [];
  data.forEach(({ city }) => {
    if (!uniqueCities.includes(city)) {
      uniqueCities.push(city);
    }
  });

  useEffect(() => {
    setCityFilter(uniqueCities[0]);
  }, []);

  console.log(cityFilter);

  return (
    <>
      <Head>
        <title>Windbnb</title>
        <meta name="description" content="Windbnb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-[1330px] mx-auto">
        <div className="flex items-center my-4">
          {!menu && (
            <>
              <Logo />
              <div
                className="bg-white shadow-md rounded-md flex flex-row text-xs mt-2 ml-auto"
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                <div className="border-r border-zinc-200 p-2 py-3 cursor-pointer text-[#333333]">
                  Helsinci, Finland
                </div>
                <div className="border-r border-zinc-200 p-2 py-3 cursor-pointer text-[#BDBDBD]">
                  Add quests
                </div>
                <div className="text-xl p-2 py-3 text-[#EB5757]">
                  <AiOutlineSearch />
                </div>
              </div>
            </>
          )}
          {menu && (
            <div className="border shadow-md rounded-md flex flex-row text-xs mt-2 w-full">
              <div className="border-r border-zinc-200 p-2 py-3 text-[#333333] relative w-64">
                <div className="w-full">
                  <span className="uppercase text-xs text-zinc-900 font-semibold pl-3 ">
                    location
                  </span>
                  <select
                    className=" text-gray-900 text-sm rounded-lg block w-full p-2 mt-[-6px] outline-none"
                    onClick={handleCity}
                  >
                    {uniqueCities.map((city) => (
                      <option className="p-4">{city}, Finland</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-r px-5 py-3 text-[#BDBDBD] relative">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setguestsMenu(!guestsMenu);
                  }}
                  className="flex flex-col pb-4"
                >
                  <span className="uppercase text-xs text-zinc-900 font-semibold">
                    guests
                  </span>
                  <span className="text-xs text-zinc-900">{totalGuests}</span>
                </div>
                {guestsMenu && (
                  <div className="flex flex-col space-y-4 bg-white p-4 px-8 w-40 absolute left-[-24px] rounded-lg">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#333333] font-semibold">
                        Adults
                      </span>
                      <span className="text-xs text-[#BDBDBD]">
                        Ages 13 or above
                      </span>
                      <div className="flex justify-start items-center space-x-2 pt-2">
                        <button
                          onClick={handleMinusAdult}
                          className="border rounded-md h-6 w-6 border-[#828282] text-[#828282]"
                        >
                          -
                        </button>
                        <span className="text-[#333333]">{guests.adults}</span>
                        <button
                          onClick={handlePlusAdult}
                          className="border rounded-md h-6 w-6 border-[#828282] text-[#828282]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-[#333333] font-semibold">
                        Children
                      </span>
                      <span className="text-xs text-[#BDBDBD]">
                        Ages 2 - 12
                      </span>
                      <div className="flex justify-start items-center space-x-2 pt-2">
                        <button
                          onClick={handleMinusChild}
                          className="border rounded-md h-6 w-6 border-[#828282] text-[#828282]"
                        >
                          -
                        </button>
                        <span className="text-[#333333]">{guests.child}</span>
                        <button
                          onClick={handlePlusChild}
                          className="border rounded-md h-6 w-6 border-[#828282] text-[#828282]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-xl p-2 py-3 text-[#EB5757]">
                <AiOutlineSearch />
              </div>
            </div>
          )}
        </div>

        <main className="mx-auto flex flex-row flex-wrap items-center justify-start p-4">
          {placesFilter.map((place, index) => (
            <Place key={index} place={place} />
          ))}
        </main>
      </div>
    </>
  );
};

export default Home;
