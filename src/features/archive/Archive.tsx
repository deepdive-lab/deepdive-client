import { useMemo, useState } from "react"
import { POSTS } from "@/data/content"
import type { FilterState } from "@/types/content"
import { ArchiveHeader } from "./ArchiveHeader"
import { ArchiveSidebar } from "./ArchiveSidebar"
import { ArchiveContent } from "./ArchiveContent"

const createInitialFilters = (): FilterState => ({
  companies: new Set(),
  tags: new Set(),
  search: "",
})

export function Archive() {
  const [filters, setFilters] = useState<FilterState>(() => createInitialFilters())
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  const toggleCompany = (id: string) => {
    setFilters((prev) => {
      const companies = new Set(prev.companies)
      companies.has(id) ? companies.delete(id) : companies.add(id)
      return { ...prev, companies }
    })
  }

  const toggleTag = (id: string) => {
    setFilters((prev) => {
      const tags = new Set(prev.tags)
      tags.has(id) ? tags.delete(id) : tags.add(id)
      return { ...prev, tags }
    })
  }

  const clearFilters = () => setFilters(createInitialFilters())

  const filteredPosts = useMemo(() => {
    return POSTS.filter((post) => {
      const search = filters.search.trim().toLowerCase()
      const matchesSearch =
        search.length === 0 ||
        post.title.toLowerCase().includes(search) ||
        post.description.toLowerCase().includes(search)

      const matchesCompany =
        filters.companies.size === 0 || filters.companies.has(post.companyId)

      const matchesTags =
        filters.tags.size === 0 || post.tags.some((tag) => filters.tags.has(tag))

      return matchesSearch && matchesCompany && matchesTags
    })
  }, [filters])

  return (
    <section className="border-t border-slate-800/50 bg-slate-950/30 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <ArchiveHeader
          search={filters.search}
          onSearchChange={(value) => setFilters((prev) => ({ ...prev, search: value }))}
          isMobileFilterOpen={isMobileFilterOpen}
          onToggleMobileFilter={() => setIsMobileFilterOpen((open) => !open)}
        />

        <div className="flex flex-col gap-10 lg:flex-row">
          <ArchiveSidebar
            filters={filters}
            onToggleTag={toggleTag}
            onToggleCompany={toggleCompany}
            onClearFilters={clearFilters}
            isOpen={isMobileFilterOpen}
          />
          <ArchiveContent
            posts={filteredPosts}
            onClearFilters={clearFilters}
          />
        </div>
      </div>
    </section>
  )
}

export default Archive
