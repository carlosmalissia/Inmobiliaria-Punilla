import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-md px-3 py-2 justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <GrTag />
            <div>
                <p>Precios</p>
                <p className="text-xs">Seleccciona tu rango de precios</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ) : (
                <GrFormDown />
            )}

            {isOpen && (
                <div className="absolute top-[70px] z-50 bg-white shadow-light rounded-lg p-4 w-[230px] left-0">
                    <p>Todos los precios</p>
                    <p>$0 - $1000</p>
                    <p>$1000 - $2000</p>
                    <p>$2000 - $3000</p>
                </div>
            )}


        </div>
    )
}