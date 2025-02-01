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

export function CarouselPlugin() {
  const carouselItems = [
    { image: "1.gif", caption: "Chat bubble" },
    { image: "2.gif", caption: "Info about item in chat" },
    { image: "3.gif", caption: "Spoiler" },
    { image: "4.gif", caption: "Custom chat colors" },
    { image: "5.gif", caption: "Item signing" },
    { image: "6.gif", caption: "Marks" },
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
                    src={`../src/assets/${item.image}`}
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
