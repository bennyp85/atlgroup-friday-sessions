import { Smartphone, Wallet, BadgeDollarSign, Crown, CheckCircle2, AlertTriangle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const tiers = [
  {
    icon: Wallet,
    name: 'Budget',
    range: 'roughly under $350',
    blurb:
      'Does everything most of us need — calls, texts, WhatsApp, myGov, banking, decent photos — without fuss.',
    samsung: 'Samsung Galaxy A series (A16 / A26)',
    other: 'Oppo A series (e.g. Oppo A60)',
    note: 'Samsung promises years of security updates even on these, which is rare at this price. The A26 is already in our group.',
  },
  {
    icon: BadgeDollarSign,
    name: 'Mid-range',
    range: 'roughly $400 – $700',
    blurb:
      'Nicer screens, better cameras, bigger batteries — the sweet spot if the budget allows.',
    samsung: 'Samsung Galaxy A55 / A56',
    other: 'Oppo Reno series',
    note: 'The A55 is already in our group and well liked. These usually last comfortably 4–5 years.',
  },
  {
    icon: Crown,
    name: 'Flagship',
    range: 'roughly $1,000 and up',
    blurb:
      'The best screens and cameras money can buy, and the longest update promises — but honestly, more phone than most of us need.',
    samsung: 'Samsung Galaxy S series (S24 / S25)',
    other: 'Oppo Find X series',
    note: 'Only worth it if photography is a passion or you want the phone to last many years. Mid-range does the job otherwise.',
  },
]

const checklist = [
  'Security updates — how many years of updates does the maker promise? This matters more than any feature.',
  'Battery life — will it last a full day out and about?',
  'Screen and text size — can you read it comfortably in the shop? Try before buying.',
  'Storage — 128 GB is the comfortable minimum for photos and apps.',
  'Outright or on a plan — buying outright from a retailer is often cheaper overall; plans spread the cost but check the total.',
  'Help setting up — bring it to a Friday and we will transfer and set it up together.',
]

export default function PhoneGuide() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 flex items-center gap-3 text-4xl font-bold">
          <Smartphone className="h-9 w-9 text-primary" aria-hidden />
          Buying a new Android phone
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          The guide we put together after the group’s upgrade questions — three
          price tiers, two brands we trust, and what actually matters more than
          any brand name. Prices are rough guides only; shop around and watch
          for sales.
        </p>
      </div>

      <section aria-labelledby="tiers">
        <h2 id="tiers" className="mb-3 text-2xl font-bold">
          The three tiers
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="h-full">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <h3 className="flex items-center gap-2 text-xl font-bold text-primary">
                  <tier.icon className="h-6 w-6" aria-hidden />
                  {tier.name}
                  <span className="text-base font-medium text-muted-foreground">
                    · {tier.range}
                  </span>
                </h3>
                <p>{tier.blurb}</p>
                <ul className="space-y-2 text-lg">
                  <li>
                    <span className="font-semibold">Samsung:</span> {tier.samsung}
                  </li>
                  <li>
                    <span className="font-semibold">Alternative:</span> {tier.other}
                  </li>
                </ul>
                <p className="mt-auto text-base text-muted-foreground">
                  {tier.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="huawei">
        <Card className="bg-secondary/50">
          <CardContent className="flex items-start gap-3 p-6">
            <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
            <div>
              <h2 id="huawei" className="mb-1 text-xl font-bold">
                What about Huawei?
              </h2>
              <p className="text-lg">
                Huawei makes beautiful phones, but newer ones do{' '}
                <strong>not</strong> come with Google apps or the Play Store —
                no Google Maps as we know it, and banking and myGov apps become
                a struggle. For our group that is a deal-breaker, which is why
                we suggest Oppo as the second brand: full Google support,
                excellent value, easy to find in Australian shops.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="checklist">
        <h2 id="checklist" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden />
          What matters more than the brand
        </h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2 text-lg">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
          Still unsure? Bring your current phone on Friday and we will check
          whether it is still receiving updates before spending a cent.
        </p>
      </section>
    </div>
  )
}
