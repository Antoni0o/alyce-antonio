"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './styles.css';

export default function PhotosCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(
    Autoplay({ delay: 3000 })
  );

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext()
  }, [api])

  return (
    <div className="overlay">
      <Carousel
        opts={{
          loop: true
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        plugins={[plugin.current]}
        className="carousel"
        setApi={setApi}
      >
        <CarouselContent className="carousel-content">
          <CarouselItem className="basis-5/6 md:basis-[45%]">
            <Image className="image" src='/carousel-1.png' width={900} height={900} alt="Foto de Alyce e Antonio juntos" />
          </CarouselItem>
          <CarouselItem className="basis-5/6 md:basis-[45%]">
            <Image className="image" src='/carousel-2.png' width={900} height={900} alt="Foto de Alyce e Antonio juntos" />
          </CarouselItem>
          <CarouselItem className="basis-5/6 md:basis-[45%]">
            <Image className="image" src='/carousel-3.png' width={900} height={900} alt="Foto de Alyce e Antonio juntos" />
          </CarouselItem>
          <CarouselItem className="basis-5/6 md:basis-[45%]">
            <Image className="image" src='/carousel-4.png' width={900} height={900} alt="Foto de Alyce e Antonio juntos" />
          </CarouselItem>
        </CarouselContent>
        <div className="step-buttons">
          <Button className="step-button next-button" variant="ghost" onClick={scrollPrev}><ChevronLeft /></Button>
          <Button className="step-button prev-button" variant="ghost" onClick={scrollNext}><ChevronRight /></ Button>
        </div>
      </Carousel>
    </div>
  )
}