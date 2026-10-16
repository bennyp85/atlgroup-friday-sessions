import { Link } from 'react-router'
import { CalendarDays, MapPin, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { sessions, sharedLessons, programInfo } from '@/data/sessions'
import SessionCard from '@/components/SessionCard'

export default function Home() {
  const thisWeek = sessions.find((s) => s.highlight)
  const latestRecaps = sessions
    .filter((s) => s.status === 'recap')
    .slice(0, 3)

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl bg-primary px-6 py-8 text-primary-foreground sm:px-10">
        <p className="mb-1 text-lg font-medium opacity-90">
          Mount Street Neighbourhood House
        </p>
        <h1 className="mb-3 text-4xl font-bold sm:text-5xl">
          ATLGroup Friday Sessions
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed">
          Recaps and walkthroughs from our Friday sessions, for our members.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-base font-medium">
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2">
            <CalendarDays className="h-5 w-5" aria-hidden />
            {programInfo.regular.day}
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2">
            <MapPin className="h-5 w-5" aria-hidden />
            Mount Street Neighbourhood House
          </span>
        </div>
      </section>

      {/* This week */}
      {thisWeek && (
        <section aria-labelledby="this-week">
          <h2 id="this-week" className="mb-4 text-3xl font-bold">
            This week’s session
          </h2>
          <SessionCard session={thisWeek} />
        </section>
      )}

      {/* Quick actions */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            to: '/sessions',
            icon: <CalendarDays className="h-8 w-8" aria-hidden />,
            title: 'Browse all sessions',
            text: 'Every recap, by term and week.',
          },
          {
            to: '/program',
            icon: <MapPin className="h-8 w-8" aria-hidden />,
            title: 'Term program',
            text: 'Dates, times and special events.',
          },
          {
            to: '/about',
            icon: <ShieldCheck className="h-8 w-8" aria-hidden />,
            title: 'About our group',
            text: 'Ground rules, devices and notes.',
          },
        ].map((item) => (
          <Link key={item.to} to={item.to} className="no-underline">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-2 p-6">
                <span className="text-primary">{item.icon}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {/* Latest recaps */}
      <section aria-labelledby="latest">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 id="latest" className="text-3xl font-bold">
            Latest recaps
          </h2>
          <Button asChild variant="outline" size="lg">
            <Link to="/sessions" className="no-underline">
              All sessions <ArrowRight className="ml-1 h-5 w-5" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {latestRecaps.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </div>
      </section>

      {/* Lessons learned */}
      <section aria-labelledby="lessons">
        <div className="mb-4">
          <h2 id="lessons" className="mb-1 text-3xl font-bold">
            Lessons we have learned together
          </h2>
          <p className="flex items-center gap-2 text-base text-muted-foreground">
            <ShieldCheck className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            The stories behind these lessons stay in the room.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {sharedLessons.map((lesson) => (
            <Card key={lesson.title} className="h-full">
              <CardContent className="flex h-full flex-col gap-2 p-6">
                <span className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <Lightbulb className="h-6 w-6 shrink-0" aria-hidden />
                  {lesson.title}
                </span>
                <p>{lesson.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
