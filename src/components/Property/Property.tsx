import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import {
    LiaBathSolid,
    LiaBedSolid,
    LiaRulerCombinedSolid,
    LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { Form } from "../Form";

export function Property(props: PropertyProps) {
    const { house } = props;

    return (
        <main className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[70%,1fr] my-3 py-5">
                <div className="px-6">
                    <h1 className="text-3xl mb-4 text-secondary flex justify-between">
                        <span className="text-4xl">House {house.id}°</span>
                        <span className="font-semibold">{formatPrice(house.price)}</span>
                    </h1>
                    <div className="flex gap-5 my-4">
                        <h2 className="flex gap-3 text-xl items-center ">
                            <TfiLocationPin />
                            {house.location}
                        </h2>
                        <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white">
                            <LiaStarSolid />
                            <span className="ml-1 font-semibold">{house.star}</span>
                        </div>
                    </div>
                    <Image
                        src={`/assets/properties/${house.image}`}
                        width={1200}
                        height={1200}
                        alt={`casa en ${house.location}`}
                        className="rounded-2xl w-full h-auto"
                        priority
                    />
                    <div className="gap-4 lg:flex mt-4">
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
                            <LiaBedSolid />
                            <span className="ml-1 font-semibold">{house.bedrooms}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
                            <LiaBathSolid />
                            <span className="ml-1 font-semibold">{house.bathroom}</span>
                        </div>
                        <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
                            <LiaRulerCombinedSolid />
                            <span className="ml-1 font-semibold">{house.meters}</span>
                        </div>
                    </div>
                    <div className="my-3">{house.description}</div>
                </div>
                <Form />
            </div>
        </main>
    );
}
