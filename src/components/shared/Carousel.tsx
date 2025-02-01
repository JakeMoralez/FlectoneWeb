import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import firstImg from "../../assets/1.gif";
import secondImg from "../../assets/2.gif";
import thirdImg from "../../assets/3.gif";
import fourthImg from "../../assets/4.gif";
import fifthImg from "../../assets/5.gif";
import sixthImg from "../../assets/6.gif";
import Image from "astro/components/Image.astro";

export function CarouselPlugin() {
  const carouselItems = [
    { image: firstImg, caption: "Chat bubble" },
    { image: secondImg, caption: "Info about item in chat" },
    { image: thirdImg, caption: "Spoiler" },
    { image: fourthImg, caption: "Custom chat colors" },
    { image: fifthImg, caption: "Item signing" },
    { image: sixthImg, caption: "Marks" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full pt-1 select-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="dark:bg-neutral-900 rounded-3xl">
                <CardContent className="flex flex-col h-80 items-center justify-center p-6 gap-4 ">
                  <h3 className="text-center font-medium">{item.caption}</h3>
                  <img
                    src={item.image.src}
                    alt={item.caption}
                    className="object-contain max-h-40"
                  />
                  <p className="font-montserrat italic">
                    All these things available in{" "}
                    <span className="text-sky-500 text-start">
                      FlectonePulse
                    </span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="dark:bg-neutral-800/50" />
      <CarouselNext className="dark:bg-neutral-800/50" />
    </Carousel>
  );
}
