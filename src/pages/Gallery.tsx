import { X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { GALLERY } from '@/config'

/** 画廊：素材网格 + 点击灯箱 */
export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null)
  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-24">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-widest text-zinc-100">画廊</h1>
        <p className="mt-2 text-sm text-zinc-500">灰泽满 Hazel 相关图集 · 点击查看大图</p>
      </header>

      <div className="columns-2 gap-4 sm:columns-3 [&>figure]:mb-4">
        {GALLERY.map((item, i) => (
          <figure
            key={item.src}
            className="group relative cursor-zoom-in overflow-hidden rounded-xl border border-white/5 break-inside-avoid"
            onClick={() => setOpen(i)}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-left opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-xs text-zinc-400">{item.kind}</span>
              <p className="text-sm text-zinc-100">{item.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* 灯箱 */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="关闭"
            className="absolute right-5 top-5 text-zinc-400 transition-colors hover:text-zinc-100"
            onClick={close}
          >
            <X className="size-7" />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[open].src}
              alt={GALLERY[open].title}
              className="max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-zinc-400">
              {GALLERY[open].title}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  )
}
