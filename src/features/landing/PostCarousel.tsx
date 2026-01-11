import { ArrowUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Post } from "@/types/content"

interface PostCarouselProps {
  title: string
  description: string
  posts: Post[]
}

export function PostCarousel({ title, description, posts }: PostCarouselProps) {
  const navigate = useNavigate()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-6 max-w-2xl">
            <p className="text-lg text-slate-400">
              {description}
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {posts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="flex h-full flex-col border-slate-800 bg-slate-900/50 transition-all hover:border-indigo-500/50 hover:bg-slate-900/80 group">
                    <div className="aspect-video w-full overflow-hidden rounded-t-xl">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="flex-none p-6 pb-0">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                          {post.companyName}
                        </Badge>
                        <span className="text-xs text-slate-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-6">
                      <CardDescription className="text-slate-400 line-clamp-3 mb-6 flex-1">
                        {post.description}
                      </CardDescription>

                      <div className="flex flex-col gap-3">
                        <Button
                          className="w-full bg-[#5b52ff] hover:bg-[#4a42e5] text-white border-none group/btn h-12"
                          onClick={() => window.open('#', '_blank')}
                        >
                          <span className="flex-1 text-center">Read Article</span>
                          <div className="relative overflow-hidden w-5 h-5">
                            <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover/btn:-translate-y-full group-hover/btn:translate-x-full absolute top-0 left-0" />
                            <ArrowUpRight className="h-5 w-5 transition-all duration-300 translate-y-full -translate-x-full group-hover/btn:translate-y-0 group-hover/btn:translate-x-0 absolute top-0 left-0" />
                          </div>
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12"
                          onClick={() => navigate('/archive')}
                        >
                          Learn more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white" />
              <CarouselNext className="-right-12 border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
