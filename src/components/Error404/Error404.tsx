import Image from "next/image";
import Link from "next/link";

export function Error404() {
    return (
        <div className="flex flex-col items-center min-h-screen justify-center text-center px-5">
            <h1 className="text-5xl font-bold mb-6">
                Error 404
            </h1>
            <h2 className="text-3xl mb-5"> Ups! No se encontro la pagina que estabas buscando</h2>
            <Image src="/assets/404-not-found.jpg" width={600} height={450} alt="404 not found"
                className="rounded-lg shadow-light" />
            <div className="mt-10 text-center">
                <Link href="/" className=" text-white px-6 py-4 rounded-md bg-secondary hover:bg-black">
                    Volver al inicio
                </Link>
            </div>
        </div>
    )
}