import { Link } from 'react-router'
import { CalendarDays, ArrowRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Session } from '@/data/sessions'

function statusBadge(session: Session) {
  if (session.status === 'planned')
    return (
      <Badge className="bg-accent text-accent-foreground hover:bg-accent">
        This week’s session
      </Badge>
    )
  if (session.status === 'awaiting-recap')
    return (
      <Badge variant="secondary">Recap coming soon</Badge>
    )
  return <Badge variant="outline">Recap</Badge>
}

export default function SessionCard({ session }: { session: Session }) {
  const body = (
    <Card
      className={`h-full transition-shadow hover:shadow-md ${
        session.highlight ? 'border-2 border-primary' : ''
      }`}
    >
      <CardContent className="flex h-full flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary">{session.term}</Badge>
          <Badge variant="outline">Week {session.week}</Badge>
          {statusBadge(session)}
        </div>
        <h3 className="text-2xl font-bold">{session.title}</h3>
        <p className="flex items-center gap-2 text-base font-medium text-muted-foreground">
          <CalendarDays className="h-5 w-5 shrink-0" aria-hidden />
          {session.dateLabel}
        </p>
        <p className="flex-1">{session.tagline}</p>
        {session.topics.length > 0 && (
          <p className="text-base font-medium text-muted-foreground">
            {session.topics.length} topic{session.topics.length > 1 ? 's' : ''} covered
          </p>
        )}
        {session.status !== 'awaiting-recap' && (
          <p className="flex items-center gap-2 text-lg font-semibold text-primary">
            {session.status === 'planned' ? 'See the plan' : 'Read the recap'}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </p>
        )}
        {session.status === 'awaiting-recap' && (
          <p className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
            <Clock className="h-5 w-5" aria-hidden />
            Notes are filed after the session
          </p>
        )}
      </CardContent>
    </Card>
  )

  if (session.status === 'awaiting-recap') return body
  return (
    <Link to={`/sessions/${session.id}`} className="block no-underline">
      {body}
    </Link>
  )
}
