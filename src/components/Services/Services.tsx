"use client"

import { Transition } from "../Transition"
import { Slider } from "./Slider"

export function Services() {
    return (
        <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
            <div className="max-w-xl mb-7">
                <h4 className="font-semibold text-secondary">Servicios</h4>
                <h2 className="my-4 font-semibold text-3xl">Promociona tu propiedad para alquilarla o venderla</h2>
                <p className="mb-10 mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non dolorum eveniet necessitatibus magni ad ab eius quod? Aspernatur voluptatem rem animi labore odit libero, qui non.</p>
            </div>
            <div className="flex items-center justify-center">
                <Slider />
            </div>
        </Transition>
    )
}
