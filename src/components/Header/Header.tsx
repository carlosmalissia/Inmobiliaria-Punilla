"use client"

import { CiMenuFries } from "react-icons/ci"
import { BsTelephone } from "react-icons/bs"
import Link from "next/link"
import { Navbar } from "../Navbar"
import { useState } from "react"

export function Header() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    return (
        <div className="container mx-auto my-5">
            <div className="flex justify-between items-center px-5 md:px-0">
                <Link href="/">
                    <h1 className="font-medium">Inmobiliaria Capilla</h1>
                </Link>
                <CiMenuFries
                    className="block text-2xl md:hidden"
                    onClick={() => setOpenMobileMenu(!openMobileMenu)} />

                <Navbar openMobileMenu={openMobileMenu} />

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel:1234568787" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephone className="hidden md:block" />
                        <span>1234568787</span>
                    </Link>
                    <Link href="#" className="bg-primary text-white px-4 py-2 rounded-md bg-secondary hover:bg-black">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}