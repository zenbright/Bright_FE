import React from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function CardContainer() {
  return (
    <Carousel className="w-full mx-[60px] my-3" opt={{align: 'start', loop: true}}>
      <CarouselContent className="-ml-1">
        {Array.from({length: 5}).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 space-y-3">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-[100px]">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CardContainer;
