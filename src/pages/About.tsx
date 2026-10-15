import { Radio, Tv } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LINKS, SITE, asset } from '@/config'

const PROFILE = [
  ['所属', 'VirtuaReal（二十七期）'],
  ['出道日', '2026 年 1 月 16 日'],
  ['生日', '8 月 8 日'],
  ['身份', '学校里的风纪委员'],
  ['特征', '灰发绿挑染 · 灰瞳 · 红珠发饰'],
  ['代表 Emoji', '🩶'],
]

/** 关于：关于 Hazel + 关于本站 */
export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-24 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-widest text-zinc-100">关于</h1>
      </header>

      {/* 关于 Hazel */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <img
            src={asset('assets/avatar.webp')}
            alt="灰泽满 Hazel"
            className="size-24 rounded-2xl border border-white/15 object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-zinc-100">灰泽满 Hazel</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">
              一个外表永远停留在十六岁的转校生。每隔几年就收拾好书包、换上新名字，
              重新开始一段学生生涯。对果冻有着近乎偏执的喜爱，书包挂件、笔记本封面、
              睡衣图案无一不是果冻造型。最近又转入了一所新学校，
              还凭借丰富的「学生经验」当选为风纪委员。
            </p>
            <p className="mt-2 text-xs text-zinc-600">—— 设定梗概引自 VirtuaReal 预告专栏</p>
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {PROFILE.map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-zinc-600">{k}</dt>
              <dd className="mt-1 text-sm text-zinc-300">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* 关于本站 */}
      <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <h2 className="text-lg font-bold text-zinc-100">关于 {SITE.name}</h2>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {SITE.description}，由粉丝搭建与维护，与 VirtuaReal 及灰泽满本人无关。
          这里陈列她的画作与身影，也会陆续靠岸一些站长自研的小玩意——插件、桌宠、AI 模型。
          灵感与版式致敬 <a href="https://laplace.live/" target="_blank" rel="noreferrer" className="text-zinc-200 underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-300">laplace.live</a>。
        </p>
      </section>
    </main>
  )
}
