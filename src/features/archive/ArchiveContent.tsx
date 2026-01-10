import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import type { Post } from "@/types/content"

interface ArchiveContentProps {
  posts: Post[]
  onClearFilters: () => void
}

export function ArchiveContent({ posts, onClearFilters }: ArchiveContentProps) {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Card
              key={post.id}
              className="group border border-slate-800 bg-slate-900/50 transition-all hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-slate-900/80"
            >
              <CardContent className="flex h-full flex-col gap-5">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="border-slate-700 text-slate-200">
                    {post.companyName}
                  </Badge>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>

                <div className="flex-1 space-y-2">
                  <CardTitle className="text-lg text-slate-100 transition-colors group-hover:text-indigo-400">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-slate-400 line-clamp-3">{post.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/70 px-2 py-1 text-[11px] uppercase tracking-wide text-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full rounded-xl border border-dashed border-slate-800/80 bg-slate-900/30 px-8 py-16 text-center">
            <p className="text-lg text-slate-300">조건에 맞는 글이 없습니다.</p>
            <p className="mt-2 text-sm text-slate-500">검색어와 필터를 다시 확인해주세요.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline" onClick={onClearFilters}>
                필터 리셋
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
