export interface Brand {
  id: string
  name: string
  logoUrl: string
}

export interface Tag {
  id: string
  label: string
}

export interface Post {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
  companyId: string
  companyName: string
  tags: string[]
  readTime: string
  featured?: boolean
}

export interface FilterState {
  companies: Set<string>
  tags: Set<string>
  search: string
}
