import { Check, X } from "lucide-react"
import { BRANDS, TAGS } from "@/data/content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { FilterState } from "@/types/content"

interface ArchiveSidebarProps {
  filters: FilterState
  onToggleTag: (id: string) => void
  onToggleCompany: (id: string) => void
  onClearFilters: () => void
  isOpen: boolean
}

export function ArchiveSidebar({
  filters,
  onToggleTag,
  onToggleCompany,
  onClearFilters,
  isOpen,
}: ArchiveSidebarProps) {
  return (
    <aside
      className={cn(
        "space-y-8 rounded-xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur",
        isOpen ? "block" : "hidden lg:block",
        "lg:w-64"
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
            Topics
          </h3>
          {filters.tags.size > 0 && (
            <span className="text-[11px] text-indigo-300">
              {filters.tags.size} 선택됨
            </span>
          )}
        </div>
        <div className="space-y-2">
          {TAGS.map((tag) => {
            const active = filters.tags.has(tag.id)
            return (
              <Button
                key={tag.id}
                type="button"
                variant="outline"
                size="sm"
                className={cn(
                  "w-full justify-between border-slate-800 bg-slate-900/40 text-left text-sm text-slate-300 hover:border-indigo-500/50 hover:text-white",
                  active &&
                  "border-indigo-500/60 bg-indigo-500/10 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25)]"
                )}
                onClick={() => onToggleTag(tag.id)}
                aria-pressed={active}
              >
                {tag.label}
                {active && <Check className="h-3.5 w-3.5" />}
              </Button>
            )
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
            Companies
          </h3>
          {filters.companies.size > 0 && (
            <span className="text-[11px] text-indigo-300">
              {filters.companies.size} 선택됨
            </span>
          )}
        </div>
        <div className="space-y-2">
          {BRANDS.slice(0, 8).map((brand) => {
            const active = filters.companies.has(brand.id)
            return (
              <Button
                key={brand.id}
                type="button"
                variant="outline"
                size="sm"
                className={cn(
                  "w-full justify-between border-slate-800 bg-slate-900/40 text-left text-sm text-slate-300 hover:border-indigo-500/50 hover:text-white",
                  active &&
                  "border-indigo-500/60 bg-indigo-500/10 text-white shadow-[0_0_0_1px_rgba(99,102,241,0.25)]"
                )}
                onClick={() => onToggleCompany(brand.id)}
                aria-pressed={active}
              >
                {brand.name}
                {active && <Check className="h-3.5 w-3.5" />}
              </Button>
            )
          })}
        </div>
      </div>

      {(filters.companies.size > 0 || filters.tags.size > 0 || filters.search) && (
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-center text-slate-300 hover:text-white"
          onClick={onClearFilters}
        >
          <X className="h-4 w-4" />
          필터 초기화
        </Button>
      )}
    </aside>
  )
}
