import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <div className="bg-black/70 px-4 py-8 md:py-44 md:px-36">
            <div className="grid grid-cols-2 md:grid-cols-[1fr,1fr,1fr,_400px] text-white gap-8">
                {dataFooter.map(({ id, links }) => (
                    <div key={id}>
                        {links.map(({ id, name, link }) => (
                            <Link href={link} key={id} className="hover:underline block mb-5">{name}</Link>
                        ))}
                    </div>
                ))}

                <div className="md:text-right">
                    <h4 className="font-semibold mb-6 text-xl text-secondary">Properties App</h4>
                    <p>Calle Falsa 123, Argentina</p>
                    <p>123-456-7890</p>
                    <p>8d2i8@example.com</p>
                    <div className="flex gap-4 mt-6 md:justify-end">
                        <LiaYoutube className="text-3xl cursor-pointer" href="#" />
                        <LiaInstagram className="text-3xl cursor-pointer" href="#" />
                        <LiaLinkedinIn className="text-3xl cursor-pointer" href="#" />
                        <LiaPinterestP className="text-3xl cursor-pointer" href="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}
