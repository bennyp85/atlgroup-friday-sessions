import { NavLink, Link, Outlet } from 'react-router'
import { TabletSmartphone, HeartHandshake } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/sessions', label: 'Sessions' },
  { to: '/program', label: 'Program' },
  { to: '/about', label: 'About' },
]

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary no-underline"
          >
            <TabletSmartphone className="h-7 w-7" aria-hidden />
            <span>ATLGroup</span>
            <span className="hidden text-base font-medium text-muted-foreground sm:inline">
              Friday Sessions
            </span>
          </Link>
          <nav aria-label="Main" className="ml-auto">
            <ul className="flex flex-wrap gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        'inline-block rounded-lg px-4 py-2 text-lg font-semibold no-underline transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-secondary',
                      ].join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t bg-secondary/60">
        <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-base">
          <p className="flex items-start gap-2 font-medium">
            <HeartHandshake className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span>
              A note on privacy: these recaps share only the lessons we learn
              together — personal stories stay in the room.
            </span>
          </p>
          <p className="text-muted-foreground">
            ATLGroup · Mount Street Neighbourhood House · Fridays 9:30 – 11:00 am
          </p>
        </div>
      </footer>
    </div>
  )
}
