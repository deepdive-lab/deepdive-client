import { Check, X, Building2, Tag as TagIcon, ChevronDown, type LucideIcon } from "lucide-react"
import { BRANDS, TAGS } from "@/data/content"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import type { FilterState } from "@/types/content"
import { Badge } from "@/components/ui/badge"

interface FilterItem {
  id: string
  label: string
}

interface FilterDialogProps {
  triggerTitle: string
  dialogTitle: string
  icon: LucideIcon
  items: FilterItem[]
  selectedIds: Set<string>
  onToggle: (id: string) => void
  onClear: () => void
  count: number
}

function FilterDialog({
  triggerTitle,
  dialogTitle,
  icon: Icon,
  items,
  selectedIds,
  onToggle,
  onClear,
  count,
}: FilterDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "border-slate-800 bg-slate-900/40 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800",
            count > 0 && "border-indigo-500/50 bg-indigo-500/5 text-indigo-300"
          )}
        >
          <Icon className="mr-2 h-4 w-4" />
          {triggerTitle}
          {count > 0 && (
            <Badge variant="secondary" className="ml-2 bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30">
              {count}
            </Badge>
          )}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-slate-800 bg-slate-900 text-slate-100 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-4 sm:grid-cols-4">
          {items.map((item) => {
            const active = selectedIds.has(item.id)
            return (
              <Button
                key={item.id}
                variant="outline"
                className={cn(
                  "justify-center border-slate-800 bg-slate-900/40 text-center text-xs text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800 sm:text-sm",
                  active && "border-indigo-500/60 bg-indigo-500/10 text-white"
                )}
                onClick={() => onToggle(item.id)}
              >
                <div className="flex items-center justify-center gap-1">
                  <span className="truncate">{item.label}</span>
                  {active && <Check className="h-3 w-3 shrink-0 text-indigo-400" />}
                </div>
              </Button>
            )
          })}
        </div>
        <DialogFooter className="flex items-center justify-between border-t border-slate-800 pt-4 sm:justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="text-slate-400 hover:bg-slate-800 hover:text-white"
            disabled={count === 0}
          >
            초기화
          </Button>
          <DialogClose asChild>
            <Button size="sm" className="bg-indigo-600 text-white hover:bg-indigo-500">
              적용하기
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

interface ArchiveFilterBarProps {
  filters: FilterState
  onToggleTag: (id: string) => void
  onToggleCompany: (id: string) => void
  onClearFilters: () => void
}

export function ArchiveFilterBar({
  filters,
  onToggleTag,
  onToggleCompany,
  onClearFilters,
}: ArchiveFilterBarProps) {
  const selectedCompaniesCount = filters.companies.size
  const selectedTagsCount = filters.tags.size

  const companyItems = BRANDS.map(b => ({ id: b.id, label: b.name }))
  const tagItems = TAGS.map(t => ({ id: t.id, label: t.label }))

  return (
    <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-slate-800/50 pb-8">
      <FilterDialog
        triggerTitle="Companies"
        dialogTitle="Filter by Company"
        icon={Building2}
        items={companyItems}
        selectedIds={filters.companies}
        onToggle={onToggleCompany}
        onClear={() => {
          filters.companies.forEach(id => onToggleCompany(id))
        }}
        count={selectedCompaniesCount}
      />

      <FilterDialog
        triggerTitle="Topics"
        dialogTitle="Filter by Topic"
        icon={TagIcon}
        items={tagItems}
        selectedIds={filters.tags}
        onToggle={onToggleTag}
        onClear={() => {
          filters.tags.forEach(id => onToggleTag(id))
        }}
        count={selectedTagsCount}
      />

      {/* Clear Filters */}
      {(selectedCompaniesCount > 0 || selectedTagsCount > 0 || filters.search) && (
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:bg-slate-800 hover:text-white"
          onClick={onClearFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Clear all filters
        </Button>
      )}

      {/* Active Filter Badges */}
      <div className="flex flex-wrap gap-2">
        {Array.from(filters.companies).map((companyId) => {
          const brand = BRANDS.find((b) => b.id === companyId)
          if (!brand) return null
          return (
            <Badge
              key={companyId}
              variant="secondary"
              className="flex items-center gap-1 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
            >
              {brand.name}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onToggleCompany(companyId)}
              />
            </Badge>
          )
        })}
        {Array.from(filters.tags).map((tagId) => {
          const tag = TAGS.find((t) => t.id === tagId)
          if (!tag) return null
          return (
            <Badge
              key={tagId}
              variant="secondary"
              className="flex items-center gap-1 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
            >
              {tag.label}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => onToggleTag(tagId)}
              />
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
