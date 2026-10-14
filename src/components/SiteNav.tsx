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

/** 顶部图标导航（参考 laplace.live 的纯图标导航栏） */
export default function SiteNav() {
  return (
    <TooltipProvider delayDuration={150}>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4">
        <NavLink
          to="/"
          aria-label={SITE.name}
          className="text-zinc-400 transition-colors hover:text-zinc-100"
        >
          <Anchor className="size-5" />
        </NavLink>

        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-md">
          {NAV.map(({ to, label, icon: Icon }) => (
            <Tooltip key={to}>
              <TooltipTrigger asChild>
                <NavLink
                  to={to}
                  end={to === '/'}
                  aria-label={label}
                  className={({ isActive }) =>
                    `grid size-9 place-items-center rounded-full transition-colors ${
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
