export interface Brand {
  id: string
  name: string
  logoUrl: string
}

export interface Tag {
  id: string
  name: string
}

export interface Post {
  id: string
  companyId: string
  companyName: string
  title: string
  description: string
  content: string
  thumbnail_url: string
  origin_url: string
  published_at: string
  readTime: string
  viewCount: number
  tags: string[]
}

export interface FilterState {
  companies: Set<string>
  tags: Set<string>
  search: string
}
