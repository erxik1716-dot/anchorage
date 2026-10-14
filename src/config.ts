/**
 * 全站配置 —— 站名 / slogan / 链接集中在这里，改一处全站生效。
 * 详见 C:\website\设计文档.md
 */

export const SITE = {
  /** 站名（暂定，可改） */
  name: 'ANCHORAGE',
  /** 副标题 slogan（可改） */
  slogan: '为 Hazel 停靠的港',
  /** 角色名 */
  liver: '灰泽满 Hazel',
  /** 一句话站点描述 */
  description: 'VirtuaReal 社团所属主播 灰泽满 Hazel 的社区向个人网站',
} as const

/** 主播相关链接 */
export const LINKS = {
  bilibiliSpace: 'https://space.bilibili.com/1298779265',
  bilibiliLive: 'https://live.bilibili.com/1713546334',
} as const

/** 站长联系方式（暂未提供，留空则不展示） */
export const CONTACT = {
  wechat: '',
  qq: '',
} as const

/** 静态资源路径（适配 GitHub Pages 子路径部署） */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`

export interface GalleryItem {
  src: string
  title: string
  kind: '插画' | '立绘' | '头像'
}

/** 画廊素材清单（源文件位于 C:\website\参考集） */
export const GALLERY: GalleryItem[] = [
  { src: asset('assets/gallery/harbor.webp'), title: '海港 · HAZEL live', kind: '插画' },
  { src: asset('assets/gallery/library.webp'), title: '图书馆 · 午后', kind: '插画' },
  { src: asset('assets/gallery/cs3-uniform.webp'), title: '立绘 · 风纪制服', kind: '立绘' },
  { src: asset('assets/gallery/cs1-school.webp'), title: '立绘 · 校服', kind: '立绘' },
  { src: asset('assets/gallery/cs2-dress.webp'), title: '立绘 · 白裙私服', kind: '立绘' },
  { src: asset('assets/gallery/face-glasses.webp'), title: '头像 · 眼镜', kind: '头像' },
  { src: asset('assets/gallery/face-tears.webp'), title: '头像 · 泪眼', kind: '头像' },
  { src: asset('assets/gallery/greenscreen.webp'), title: '半身 · 绿幕', kind: '头像' },
  { src: asset('assets/gallery/face-mini.webp'), title: '头像 · 迷你', kind: '头像' },
  { src: asset('assets/gallery/vr-closeup.webp'), title: 'VR · 特写', kind: '头像' },
]
