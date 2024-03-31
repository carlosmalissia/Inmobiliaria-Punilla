import Image from "next/image";

export function Form() {
    return (
        <div className="px-3">
            <div className="py-4 px-3 rounded-lg shadow-light">
                <div className="flex gap-4">
                    <Image
                        src="/assets/comercial.png"
                        width={50}
                        height={50}
                        alt="comercial"
                        className="rounded-full border-2 border-secondary"
                    />
                    <div>
                        <p>Albert Soler</p>
                        <p className="text-xs font-semibold text-secondary">Comercial</p>
                    </div>
                </div>
                <div className="my-5">
                    <div>
                        <label className="text-sm text-secondary">Nombre</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="w-full px-3 py-2 border-0 text-secondary shadow-sm 
                      placeholder:text-gray-400 text-sm rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-0 focus:ring-inset"
                            />
                        </div>
                        <label className="text-sm text-secondary">telefono</label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="w-full px-3 py-2 border-0 text-secondary shadow-sm 
                      placeholder:text-gray-400 text-sm rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-0 focus:ring-inset"
                            />
                        </div>
                        <label className="text-sm text-secondary">descripcion</label>
                        <div className="mt-2">
                            <textarea
                                name="descripcion"
                                id="descripcion"
                                rows={3}
                                autoComplete={""}
                                className="w-full px-3 py-2 border-0 text-secondary shadow-sm 
                      placeholder:text-gray-400 text-sm rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-0 focus:ring-inset"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 my-3">
                        <button className="px-3 py-2 bg-secondary text-white rounded-lg hover:bg-black/60">
                            Enviar Mensaje
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
