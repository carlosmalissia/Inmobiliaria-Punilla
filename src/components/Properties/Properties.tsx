"use client";

import Link from "next/link";
import { Transition } from "../Transition";
import { dataProperties } from "./Properties.data";
import {
    LiaAdSolid,
    LiaBathSolid,
    LiaBedSolid,
    LiaRulerCombinedSolid,
    LiaStarSolid,
} from "react-icons/lia";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";

export function Properties() {
    const [counterHouses, setCounterHouses] = useState(8);
    const dataFilteredHouse = dataProperties.slice(0, counterHouses);

    const handleShowMore = () => {
        setCounterHouses(counterHouses + 4);
    };

    return (
        <Transition className="px-4 my-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {dataFilteredHouse.map(
                    ({
                        id,
                        location,
                        price,
                        bedrooms,
                        bathroom,
                        image,
                        star,
                        meters,
                        description,
                    }) => (
                        <Link
                            href={`/properties/${id}`}
                            key={id}
                            className="sadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative -z-[1]">
                                <div className="relative">
                                    <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-300 top-2 right-2 text-secondary">
                                        <LiaStarSolid />
                                        <span className="ml-1 font-semibold">{star}</span>
                                    </div>
                                    <Image
                                        src={`/assets/properties/${image}`}
                                        width={150}
                                        height={150}
                                        alt="image"
                                        className="rounded-2xl object-cover w-full h-[200px]"
                                    />
                                    <div className="px-3 py-5">
                                        <h3 className="text-secondary">{location}</h3>
                                        <p className="font-semibold">{formatPrice(price)}</p>
                                        <div className="gap-4 mt-2 xl:flex">
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 my-2 rounded-lg bg-slate-300/40">
                                                <LiaBathSolid />
                                                <span className="text-secondary">{bathroom}</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 my-2 rounded-lg bg-slate-300/40">
                                                <LiaBedSolid />
                                                <span className="text-secondary">{bedrooms}</span>
                                            </div>
                                            <div className="flex items-center justify-center gap-1 px-2 py-1 my-2 rounded-lg bg-slate-300/40">
                                                <LiaRulerCombinedSolid />
                                                <span className="text-secondary">{meters}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
            {counterHouses < dataProperties.length && (
                <div className="text-center my-7">
                    <button
                        onClick={handleShowMore}
                        className="px-4 py-4 text-white bg-secondary hover:bg-black  transition-all duration-150 cursor-pointer rounded-xl"
                    >
                        Ver mas propiedades
                    </button>
                </div>
            )}
        </Transition>
    );
}
