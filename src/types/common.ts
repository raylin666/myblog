export interface Settings {
  iconUrl: string
  logoUrl: string
  authorName: string
  authorDescription: string
  avatarUrl: string
  topAvatarUrl: string
  siteTitle: string
  coverUrls: string[]
  articleCount: number
  articleCommentCount: number
  articleLikeCount: number
}

export interface Menus {
  list: MenuItem[]
}

interface MenuItem {
  id: number
  name: string
  iconName: string
  target?: string
  routeName: string
  hrefUrl?: string
  position: 'left' | 'right'
}