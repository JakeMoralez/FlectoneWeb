import firstImg from "@/assets/chat/1.gif";
import secondImg from "@/assets/chat/2.gif";
import fifthImg from "@/assets/chat/5.gif";
import sixthImg from "@/assets/chat/6.gif";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

export function CarouselPlugin() {
  const carouselItems = [
    { image: firstImg, caption: "Chat bubble" },
    { image: secondImg, caption: "Info about item in chat" },
    { image: fifthImg, caption: "Item signing" },
    { image: sixthImg, caption: "Marks" },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-lg:w-96 pt-1 select-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1 max-lg:p-0">
              <Card className="dark:bg-neutral-800/50 rounded-2xl">
                <CardContent className="flex flex-col h-96 items-center justify-center p-6 gap-4 ">
                  <h3 className="text-center font-medium">{item.caption}</h3>
                  <img
                    src={item.image.src}
                    alt={item.caption}
                    className="object-contain max-h-56 rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
