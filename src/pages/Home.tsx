import { ChevronDown, Copy, Check, Radio, Tv, Mail, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CONTACT, LINKS, SITE, asset } from '@/config'

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <Button variant="outline" size="sm" onClick={copy} className="gap-2 border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50">
      {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
      {label}：{value}
    </Button>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero：hzm2 海港图全屏压暗 + 站名浮于其上 */}
      <section className="relative flex h-svh flex-col items-center justify-center overflow-hidden">
        <img
          src={asset('assets/hero-harbor.webp')}
          alt="灰泽满 Hazel · 海港"
          className="hero-drift absolute inset-0 size-full object-cover"
        />
        {/* 压暗 + 上下渐变，保证文字可读、与页身衔接 */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-[0.22em] text-zinc-100 drop-shadow-lg sm:text-7xl sm:tracking-[0.35em]">
            {SITE.name}
          </h1>
          <p className="mt-5 text-sm tracking-[0.2em] text-zinc-300 sm:text-lg sm:tracking-[0.3em]">
            {SITE.slogan}
          </p>
          <p className="mt-2 max-w-xs text-xs leading-5 tracking-widest text-zinc-400 [text-shadow:0_1px_8px_rgb(0_0_0/0.9)] sm:max-w-none">
            {SITE.description}
          </p>
        </div>

        <button
          aria-label="向下滚动"
          onClick={() => document.getElementById('card')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-8 z-10 animate-bounce text-zinc-500 transition-colors hover:text-zinc-200"
        >
          <ChevronDown className="size-6" />
        </button>
      </section>

      {/* 名片卡 */}
      <section id="card" className="relative z-10 mx-auto max-w-xl px-4 pb-24 pt-14 sm:px-6 sm:pt-16">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md sm:p-8">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={asset('assets/avatar.webp')}
              alt="灰泽满 Hazel 头像"
              className="size-16 shrink-0 rounded-full border border-white/15 object-cover sm:size-20"
            />
            <div>
              <h2 className="text-lg font-bold text-zinc-100 sm:text-xl">{SITE.liver}</h2>
              <p className="mt-1 text-sm text-zinc-400">
                VirtuaReal 二十七期 · 风纪委员 🩶
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            <Button asChild size="sm" className="gap-2 bg-zinc-100 text-zinc-900 hover:bg-white">
              <a href={LINKS.bilibiliSpace} target="_blank" rel="noreferrer">
                <Tv className="size-3.5" /> B站主页
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="gap-2 border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50">
              <a href={LINKS.bilibiliLive} target="_blank" rel="noreferrer">
                <Radio className="size-3.5" /> 直播间
              </a>
            </Button>
            {CONTACT.email && (
              <Button asChild variant="outline" size="sm" className="gap-2 border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50">
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="size-3.5" /> {CONTACT.email}
                </a>
              </Button>
            )}
            {CONTACT.wechat && <CopyField label="微信" value={CONTACT.wechat} />}
            {CONTACT.qq && <CopyField label="QQ" value={CONTACT.qq} />}
            {!CONTACT.wechat && !CONTACT.qq && (
              <span className="inline-flex items-center gap-2 text-xs text-zinc-600">
                <MessageCircle className="size-3.5" /> 微信 / QQ 联系方式待站长补充
              </span>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
