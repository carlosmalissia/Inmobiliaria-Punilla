import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container mx-auto relative">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat 
            bg-cover bg-center rounded-3xl flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-semibold">Descubre nuevas propiedades</h2>
                    <p className="mt-2 text-xl md:mt-8">Encontrá tu vivienda ideal en Capilla del Monte y alrededores</p>
                </div>
                <FloatedSearch />
            </div>
        </div>
    )
}