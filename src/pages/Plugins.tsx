import { Puzzle } from 'lucide-react'

/** 插件页：MVP 阶段留空占位，结构先行 */
export default function Plugins() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-widest text-zinc-100">插件</h1>
        <p className="mt-2 text-sm text-zinc-500">
          站长自研的插件 / 桌宠 / AI 模型将在这里发布
        </p>
      </header>

      {/* 空状态占位 */}
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] py-24 text-center">
        <Puzzle className="size-10 text-zinc-700" />
        <p className="mt-5 text-zinc-400">这里还空着</p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">
          站长正在船坞里赶工，第一批作品很快就到港。
        </p>
      </div>
    </main>
  )
}
