import { BRANDS } from "@/data/content"
import Marquee from "react-fast-marquee"

export function BrandMarquee() {
  return (
    <div className="relative overflow-hidden bg-slate-950/50 py-16 flex flex-col gap-8">
      {/* Gradients for fading effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />

      {/* First Row */}
      <Marquee gradient={false} speed={40} direction="left">
        <div className="flex items-center gap-12 px-6">
          {BRANDS.map((brand) => (
            <div key={`${brand.id}-row1`} className="flex-shrink-0">
              <div className="group flex h-20 w-40 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="h-8 max-w-[120px] object-contain opacity-60 transition-all group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Second Row */}
      <Marquee gradient={false} speed={40} direction="right">
        <div className="flex items-center gap-12 px-6">
          {BRANDS.map((brand) => (
            <div key={`${brand.id}-row2`} className="flex-shrink-0">
              <div className="group flex h-20 w-40 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300">
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="h-8 max-w-[120px] object-contain opacity-60 transition-all group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default BrandMarquee
