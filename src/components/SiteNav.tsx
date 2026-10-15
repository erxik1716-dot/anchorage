import { Anchor, Home, Images, Puzzle, UserRound } from 'lucide-react'
import { NavLink } from 'react-router'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { SITE } from '@/config'

const NAV = [
  { to: '/', label: '首页', icon: Home },
  { to: '/gallery', label: '画廊', icon: Images },
  { to: '/plugins', label: '插件', icon: Puzzle },
  { to: '/about', label: '关于', icon: UserRound },
]

const pill =
  'flex h-11 items-center rounded-full border border-white/15 bg-zinc-900/70 shadow-lg shadow-black/40 backdrop-blur-xl backdrop-saturate-150'

/**
 * 顶部悬浮导航 —— 苹果式侧置布局：
 * 左侧站标胶囊与右侧导航胶囊同高、同边框、同磨砂，视觉对齐
 */
export default function SiteNav() {
  return (
    <TooltipProvider delayDuration={150}>
      <header className="fixed inset-x-0 top-4 z-40 flex items-start justify-between px-4 sm:px-5">
        {/* 站标胶囊 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <NavLink to="/" aria-label={SITE.name} className={`${pill} px-3.5 text-zinc-400 transition-colors hover:text-zinc-100`}>
              <Anchor className="size-4" />
            </NavLink>
          </TooltipTrigger>
          <TooltipContent side="bottom">{SITE.name}</TooltipContent>
        </Tooltip>

        {/* 导航胶囊 */}
        <nav aria-label="主导航" className={`${pill} gap-1 px-1.5`}>
          {NAV.map(({ to, label, icon: Icon }) => (
            <Tooltip key={to}>
              <TooltipTrigger asChild>
                <NavLink
                  to={to}
                  end={to === '/'}
                  aria-label={label}
                  className={({ isActive }) =>
                    `grid size-8 place-items-center rounded-full transition-colors ${
                      isActive
                        ? 'bg-white/15 text-zinc-50'
                        : 'text-zinc-500 hover:bg-white/5 hover:text-zinc-200'
                    }`
                  }
                >
                  <Icon className="size-4" />
                </NavLink>
              </TooltipTrigger>
              <TooltipContent side="bottom">{label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </header>
    </TooltipProvider>
  )
}
