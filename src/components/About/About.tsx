import Image from "next/image";
import { Transition } from "../Transition";

export function About() {
    return (
        <Transition className="grid gap-4 px-4 py-8 md:py-44 md:px-36 md:grid-cols-2">
            <div className="max-w-xl mb-7 flex flex-col items-center justify-center" id="about">
                <h4 className="font-semibold text-secondary">Sobre nosotros</h4>
                <h2 className="my-4 font-semibold text-3xl">Mas de 10 años de experiencia, con miles de viviendas para vender o comprar</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non dolorum eveniet necessitatibus magni ad ab eius quod? Aspernatur voluptatem rem animi labore odit libero, qui non.</p>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" width={350} height={450} alt="about" className="rounded-2xl w-auto h-auto" priority />
            </div>
        </Transition>
    )
}