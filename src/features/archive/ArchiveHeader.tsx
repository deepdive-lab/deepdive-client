import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface ArchiveHeaderProps {
  search: string
  onSearchChange: (value: string) => void
}

export function ArchiveHeader({
  search,
  onSearchChange,
}: ArchiveHeaderProps) {
  return (
    <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80">
          Archive
        </p>
        <h2 className="text-3xl font-bold text-white">Latest Curations</h2>
        <p className="text-sm text-slate-400">
          Explore technical insights from top engineering teams.
        </p>
      </div>

      <div className="flex w-full items-center gap-2 md:w-auto">
        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Search articles..."
            className="pl-9 bg-slate-900/50 border-slate-800 focus:ring-indigo-500/50"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
