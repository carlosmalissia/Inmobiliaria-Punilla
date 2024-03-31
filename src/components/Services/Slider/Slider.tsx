import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Scrollbar } from "swiper/modules"
import { sliderDataImages } from "./Slider.data"
import Image from "next/image"

export function Slider() {
    return (
        <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={15}
            freeMode={true}
            navigation
            scrollbar={{ draggable: true }}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
            grabCursor
            className="h-[240px] md:h-[320px] w-[300px] md:w-[500px]"
        >

            {sliderDataImages.map(({ id, urlImage }) => (
                <SwiperSlide key={id}>
                    <Image src={`/assets/houses/${urlImage}`} alt="houses" width={200} height={700} className={`w-auto h-auto rounded-xl`} />
                </SwiperSlide>
            ))}

        </Swiper>
    )
}
