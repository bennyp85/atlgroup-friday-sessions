import { Link, useParams, Navigate } from 'react-router'
import {
  ArrowLeft,
  CalendarDays,
  ListChecks,
  MessagesSquare,
  Lightbulb,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { sessions } from '@/data/sessions'

export default function SessionDetail() {
  const { id } = useParams()
  const session = sessions.find((s) => s.id === id)

  if (!session) return <Navigate to="/sessions" replace />

  const index = sessions.findIndex((s) => s.id === id)
  const prev = sessions[index + 1]

  return (
    <article className="space-y-8">
      <div>
        <Button asChild variant="ghost" size="lg" className="mb-4 -ml-4">
          <Link to="/sessions" className="no-underline">
            <ArrowLeft className="mr-2 h-5 w-5" aria-hidden /> All sessions
          </Link>
        </Button>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{session.term}</Badge>
          <Badge variant="outline">Week {session.week}</Badge>
          {session.status === 'planned' && (
            <Badge className="bg-accent text-accent-foreground hover:bg-accent">
              This week’s session
            </Badge>
          )}
        </div>
        <h1 className="mb-2 text-4xl font-bold">{session.title}</h1>
        <p className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
          <CalendarDays className="h-5 w-5 shrink-0" aria-hidden />
          {session.dateLabel}
        </p>
        <p className="mt-3 max-w-3xl text-xl leading-relaxed">
          {session.tagline}
        </p>
      </div>

      {session.topics.length > 0 && (
        <section aria-labelledby="topics">
          <h2 id="topics" className="mb-3 text-2xl font-bold">
            What we covered
          </h2>
          <Card>
            <CardContent className="p-6">
              <ul className="grid gap-x-8 gap-y-2 text-lg sm:grid-cols-2">
                {session.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-1.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}

      {session.walkthroughs.map((wt) => (
        <section key={wt.title} aria-labelledby={`wt-${wt.title}`}>
          <h2 id={`wt-${wt.title}`} className="mb-3 flex items-center gap-2 text-2xl font-bold">
            <ListChecks className="h-7 w-7 text-primary" aria-hidden />
            Walkthrough: {wt.title}
          </h2>
          {wt.intro && (
            <p className="mb-4 max-w-3xl text-lg">{wt.intro}</p>
          )}
          <ol className="space-y-3">
            {wt.steps.map((step, i) => (
              <li key={step.title}>
                <Card>
                  <CardContent className="flex items-start gap-4 p-5">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-lg">{step.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </section>
      ))}

      {session.discussion && session.discussion.length > 0 && (
        <section aria-labelledby="discussion">
          <h2 id="discussion" className="mb-3 flex items-center gap-2 text-2xl font-bold">
            <MessagesSquare className="h-7 w-7 text-primary" aria-hidden />
            Things we talked about
          </h2>
          <Card className="bg-secondary/50">
            <CardContent className="p-6">
              <ul className="space-y-2 text-lg">
                {session.discussion.map((q) => (
                  <li key={q} className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 text-primary">•</span>
                    {q}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}

      {session.faq && session.faq.length > 0 && (
        <section aria-labelledby="faq">
          <h2 id="faq" className="mb-3 flex items-center gap-2 text-2xl font-bold">
            <HelpCircle className="h-7 w-7 text-primary" aria-hidden />
            Likely questions from members (FAQ)
          </h2>
          <div className="space-y-3">
            {session.faq.map((item) => (
              <Card key={item.q} className="bg-secondary/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Q: {item.q}</h3>
                  <p className="mt-1 text-lg">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {session.lessons.length > 0 && (
        <section aria-labelledby="lessons">
          <h2 id="lessons" className="mb-3 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-7 w-7 text-primary" aria-hidden />
            Lessons learned
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {session.lessons.map((lesson) => (
              <Card key={lesson.title} className="h-full">
                <CardContent className="flex h-full flex-col gap-2 p-6">
                  <h3 className="text-xl font-bold text-primary">
                    {lesson.title}
                  </h3>
                  <p>{lesson.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {session.resources.length > 0 && (
        <section aria-labelledby="resources">
          <h2 id="resources" className="mb-3 text-2xl font-bold">
            Session materials
          </h2>
          <ul className="space-y-2">
            {session.resources.map((res) => (
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
      )}

      {prev && (
        <>
          <Separator />
          <Button asChild variant="outline" size="lg">
            <Link to={`/sessions/${prev.id}`} className="no-underline">
              <ArrowLeft className="mr-2 h-5 w-5" aria-hidden />
              Earlier: Week {prev.week} — {prev.title}
            </Link>
          </Button>
        </>
      )}
    </article>
  )
}
