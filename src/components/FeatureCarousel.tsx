import * as React from "react"
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
    title: "Link Account via Discord",
    image: "https://placehold.co/1200x675/18181b/52525b?text=Account+Linking+GIF",
  },
  {
    title: "Interactive Player Panels",
    image: "https://placehold.co/1200x675/18181b/52525b?text=Player+Panel+GIF",
  },
  {
    title: "Server Live Monitoring",
    image: "https://placehold.co/1200x675/18181b/52525b?text=Live+Monitoring+GIF",
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
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {CAROUSEL_ITEMS.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <div className="w-full rounded-2xl overflow-hidden aspect-video bg-zinc-900 shadow-2xl">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-14 size-12 border-zinc-800 bg-zinc-950 hover:bg-zinc-800 hover:text-white [&_svg]:size-6" />
        <CarouselNext className="hidden sm:flex -right-14 size-12 border-zinc-800 bg-zinc-950 hover:bg-zinc-800 hover:text-white [&_svg]:size-6" />
      </Carousel>

      <div className="h-12 overflow-hidden flex items-start justify-center text-center px-4">
         <h3 
           key={current}
           className="text-2xl sm:text-3xl font-bold text-zinc-100 animate-in slide-in-from-bottom-6 fade-in duration-500"
         >
           {CAROUSEL_ITEMS[current]?.title}
         </h3>
      </div>
    </div>
  )
}
