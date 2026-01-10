import { BRANDS } from "@/data/content"

export function BrandMarquee() {
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <div className="relative overflow-hidden bg-slate-950/50 py-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />

      <div className="mx-auto flex max-w-6xl">
        <div className="animate-marquee flex min-w-full items-center gap-12 px-6">
          {marqueeBrands.map((brand, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={`${brand.id}-${index}`}
                className={`flex-shrink-0 transition-all duration-300 ${isEven ? "translate-y-6" : "-translate-y-6"
                  }`}
              >
                <div className="group flex h-20 w-40 items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur hover:border-indigo-500/50 hover:bg-slate-900/80">
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="h-8 max-w-[120px] object-contain opacity-60 transition-all group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute left-1/2 top-1 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/80">
        Curating Engineering Blogs From Leading Companies
      </div>
    </div>
  )
}

export default BrandMarquee
