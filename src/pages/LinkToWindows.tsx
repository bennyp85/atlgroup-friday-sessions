import { MonitorSmartphone, Link2, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    title: 'Open Phone Link on the computer',
    detail:
      'On the Windows 11 laptop, click Start and type “Phone Link”. Open it and choose Android, then sign in with your Microsoft account if asked. A QR code appears on the screen.',
  },
  {
    title: 'Open Link to Windows on the phone',
    detail:
      'On the phone, swipe down twice to open quick settings and tap-and-hold the “Link to Windows” tile. (No tile? It is under Settings → Connected devices → Link to Windows.)',
  },
  {
    title: 'Sign in and scan the QR code',
    detail:
      'Sign in with the same Microsoft account, then point the phone’s camera at the QR code on the laptop screen. The two devices introduce themselves.',
  },
  {
    title: 'Say yes to the permissions',
    detail:
      'The phone asks whether the computer may see notifications, messages, photos and calls. Allow the ones you want — you can change your mind at any time.',
  },
  {
    title: 'Try your first magic trick',
    detail:
      'In Phone Link, open Photos and drag a phone photo onto the laptop desktop — no cables, no emails to yourself. Then reply to a text message using the laptop’s keyboard.',
  },
]

const canDo = [
  'Read and reply to text messages with a real keyboard',
  'See phone notifications on the big screen',
  'Copy photos and files between phone and computer by dragging',
  'Answer and make phone calls from the laptop (it uses the phone’s SIM)',
  'Run phone apps in a window on the computer (Samsung and many others)',
]

export default function LinkToWindows() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="mb-2 flex items-center gap-3 text-4xl font-bold">
          <MonitorSmartphone className="h-9 w-9 text-primary" aria-hidden />
          Your Android phone and Windows 11
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Windows 11 has a built-in bridge to Android called{' '}
          <strong>Phone Link</strong> (the phone side is “Link to Windows”).
          Once linked, messages, photos, notifications and even calls from the
          phone appear on the computer — free, and already installed on both
          devices.
        </p>
      </div>

      <section aria-labelledby="setup">
        <h2 id="setup" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <Link2 className="h-7 w-7 text-primary" aria-hidden />
          Linking them, step by step
        </h2>
        <p className="mb-4 max-w-3xl text-lg">
          Both devices need to be on the same Wi-Fi, and you need your
          Microsoft account (the one Windows already uses). Five steps, ten
          minutes:
        </p>
        <ol className="space-y-3">
          {steps.map((step, i) => (
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

      <section aria-labelledby="cando">
        <h2 id="cando" className="mb-3 flex items-center gap-2 text-2xl font-bold">
          <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden />
          What you can do once linked
        </h2>
        <Card>
          <CardContent className="p-6">
            <ul className="grid gap-x-8 gap-y-2 text-lg sm:grid-cols-2">
              {canDo.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="faq">
        <h2 id="faq" className="mb-3 text-2xl font-bold">
          Likely questions from members (FAQ)
        </h2>
        <div className="space-y-3">
          {[
            {
              q: 'Does it cost anything?',
              a: 'No — Phone Link is a free part of Windows 11, and Link to Windows is free on the phone. It uses Wi-Fi, not mobile data.',
            },
            {
              q: 'My phone isn’t a Samsung — will it still work?',
              a: 'Most likely, yes. Many brands including Oppo, Honor and Motorola support it. Look for “Link to Windows” under Settings → Connected devices.',
            },
            {
              q: 'Is it safe? Who can see my phone?',
              a: 'Only your own computer can see it, and only while the link is active — you unlink in a tap, in the phone’s Link to Windows settings. As always, link only to a computer you own and trust.',
            },
          ].map((item) => (
            <Card key={item.q} className="bg-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Q: {item.q}</h3>
                <p className="mt-1 text-lg">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="safety">
        <Card className="bg-secondary/50">
          <CardContent className="flex items-start gap-3 p-6">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
            <p className="text-lg">
              A note on privacy: linking is between <strong>your</strong> phone
              and <strong>your</strong> computer. Never link a device that isn’t
              yours — and bring questions about it to Friday.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
