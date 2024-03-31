import { FaRegPaperPlane } from "react-icons/fa";
import { Transition } from "../Transition";

export function JoinCommunity() {
    return (
        <Transition className="grid items-center px-4 py-8 md:py-44 md:px-36 md:grid-cols-2 bg-secondary">
            <h3 className="max-w-lg text-4xl font-semibold text-center text-white">Unete a nuestra comunidad para descubrir nuevas propiedades</h3>
            <div className="mx-auto mt-5 md:mx-auto">
                <button className="flex items-center justify-between text-white py-2 px-7 mt-2 rounded-lg transition-all duration-300 bg-black w-fit hover:bg-black/70">
                    <FaRegPaperPlane className="text-2xl" />
                    <span className="ml-3">Unete a la cominidad</span>
                </button>
            </div>
        </Transition>
    )
}
