import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

const CAROUSEL_ITEMS = [
  {
    title: "Link Accounts",
    image: "/featureCarousel/linkaccounts.webp",
  },
  {
    title: "Player Info Panels",
    image: "/featureCarousel/steaminfo.webp",
  },
  {
    title: "Server Live Monitoring",
    image: "/featureCarousel/servertracker.webp",
  },
  {
    title: "Manage Your Connections",
    image: "/featureCarousel/connectionsmanage.webp",
  }
]

export function FeatureCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full sm:**:data-[slot=carousel-content]:mask-[linear-gradient(to_right,transparent,black_10%_90%,transparent)]"
      >
        <CarouselContent className="py-1">
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem key={index} className="sm:basis-[85%]">
              <div className="w-full rounded-2xl overflow-hidden aspect-video bg-[#070709] border border-border shadow-2xl flex items-center justify-center">
                 <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex md:-left-14 size-12 border-border bg-card hover:bg-accent hover:text-accent-foreground [&_svg]:size-6" />
        <CarouselNext className="hidden md:flex md:-right-14 size-12 border-border bg-card hover:bg-accent hover:text-accent-foreground [&_svg]:size-6" />
      </Carousel>

      <div className="flex justify-center items-center gap-2">
        {CAROUSEL_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              index === current
                ? "w-8 bg-muted-foreground"
                : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            )}
          />
        ))}
      </div>

      <div className="min-h-16 sm:min-h-12 flex items-center justify-center text-center px-4">
         <h3 
           key={current}
           className="text-xl sm:text-3xl font-bold text-foreground animate-in slide-in-from-bottom-4 fade-in duration-500 leading-tight"
         >
           {CAROUSEL_ITEMS[current]?.title}
         </h3>
      </div>
    </div>
  )
}
