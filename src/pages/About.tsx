import { ShieldCheck, Smartphone, CheckCircle2, XCircle, MessagesSquare } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const stillUpdated = ['Samsung S24 Ultra', 'Samsung A26', 'Samsung A55']
const outOfService = ['Samsung A50', 'Samsung A51', 'Samsung A52', 'Galaxy S20 / S21']

export default function About() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 text-4xl font-bold">About ATLGroup</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          ATLGroup is our Friday technology group at Mount Street Neighbourhood
          House. This site holds our session recaps and walkthroughs, for
          current members.
        </p>
      </div>

      <section aria-labelledby="privacy">
        <Card className="bg-secondary/50">
          <CardContent className="flex items-start gap-3 p-6">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 id="privacy" className="mb-1 text-xl font-bold">
                A note on privacy
              </h2>
              <p className="text-lg">
                Recaps here share only the lessons we learn together. Personal
                stories stay in the room.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="ground-rules">
        <h2 id="ground-rules" className="mb-3 text-2xl font-bold">
          Our ground rules
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="h-full">
            <CardContent className="flex h-full flex-col gap-2 p-6">
              <h3 className="text-xl font-bold">Independence</h3>
              <p className="text-lg">
                We practise working things out ourselves — and helping each
                other — so we are not reliant on anyone else.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex h-full flex-col gap-2 p-6">
              <h3 className="text-xl font-bold">Calmness</h3>
              <p className="text-lg">
                Nothing on a device is worth getting flustered over. We take
                our time, and there is no such thing as a silly question.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section aria-labelledby="devices">
        <h2 id="devices" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <Smartphone className="h-7 w-7 text-primary" aria-hidden />
          Devices in our group &amp; software updates
        </h2>
        <p className="mb-4 max-w-3xl text-lg">
          These are the devices members had with them when we checked in Term
          3. What matters is whether the maker is still sending security
          updates:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="mb-2 flex items-center gap-2 text-xl font-bold text-primary">
                <CheckCircle2 className="h-6 w-6" aria-hidden />
                Still receiving updates
              </h3>
              <ul className="space-y-1 text-lg">
                {stillUpdated.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              <p className="mt-2 text-base text-muted-foreground">
                These keep getting security fixes, so they are safe to keep
                using.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="mb-2 flex items-center gap-2 text-xl font-bold">
                <XCircle className="h-6 w-6" aria-hidden />
                No longer receiving updates
              </h3>
              <ul className="space-y-1 text-lg">
                {outOfService.map((d) => (
                  <li key={d}>• {d}</li>
                ))}
              </ul>
              <p className="mt-2 text-base text-muted-foreground">
                Security updates have stopped for these — over time it is worth
                planning an upgrade.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Not sure about yours? Bring it on Friday and we will check together.
        </p>
      </section>

      <section aria-labelledby="notes">
        <h2 id="notes" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <MessagesSquare className="h-7 w-7 text-primary" aria-hidden />
          Notes for members
        </h2>
        <div className="space-y-3">
          {[
            {
              q: 'I missed a session — can I catch up?',
              a: 'Yes. Every session has a recap and step-by-step walkthroughs under Sessions. Bring any questions to the next Friday.',
            },
            {
              q: 'Something online felt off this week?',
              a: 'Mention it on Friday — chances are someone else saw the same thing, and we can all learn from it.',
            },
          ].map((item) => (
            <Card key={item.q}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{item.q}</h3>
                <p className="mt-1 text-lg">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
