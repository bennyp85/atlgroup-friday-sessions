import { CalendarDays, ExternalLink, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { programInfo } from '@/data/sessions'

export default function Program() {
  const { regular, events, resources, termOutline } = programInfo

  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Term 4 2026 program</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          When we meet, what is coming up, and the big ideas guiding our term.
        </p>
      </div>

      <section aria-labelledby="regular">
        <h2 id="regular" className="mb-3 text-2xl font-bold">
          Our regular session
        </h2>
        <Card className="border-2 border-primary">
          <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">{regular.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-lg">
                <CalendarDays className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                {regular.day}
              </p>
              <p className="text-lg">{regular.dates}</p>
              <p className="text-lg text-muted-foreground">{regular.sessions}</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
              <p className="text-2xl font-bold text-primary">{regular.fee}</p>
              <p className="text-lg">{regular.note}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="events">
        <h2 id="events" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <Sparkles className="h-7 w-7 text-primary" aria-hidden />
          Special events this term
        </h2>
        <p className="mb-4 max-w-3xl rounded-lg border border-dashed bg-card px-4 py-3 text-lg">
          Please note: special event dates are copied from the term program and
          can change — ask the Mount Street Neighbourhood House manager
          directly to confirm before attending.
        </p>
        <ul className="space-y-3">
          {events.map((event) => (
            <li key={event.title}>
              <Card>
                <CardContent className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:gap-6">
                  <Badge
                    variant="secondary"
                    className="w-fit shrink-0 px-3 py-1.5 text-base font-semibold"
                  >
                    {event.date}
                  </Badge>
                  <div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-lg text-muted-foreground">
                      {event.detail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="outline">
        <h2 id="outline" className="mb-3 text-2xl font-bold">
          What this term is all about
        </h2>
        <Card className="bg-secondary/50">
          <CardContent className="space-y-4 p-6">
            <div>
              <h3 className="text-xl font-bold">The big idea</h3>
              <p className="text-lg">{termOutline.bigIdea}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Our guiding question</h3>
              <p className="text-lg italic">“{termOutline.guidingQuestion}”</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold">Our goals</h3>
              <ul className="space-y-1 text-lg">
                {termOutline.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 text-primary">•</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="materials">
        <h2 id="materials" className="mb-3 text-2xl font-bold">
          Program materials
        </h2>
        <ul className="space-y-2">
          {resources.map((res) => (
            <li key={res.url}>
              <a
                href={res.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-3 text-lg font-semibold text-primary no-underline hover:bg-secondary"
              >
                <ExternalLink className="h-5 w-5" aria-hidden />
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
