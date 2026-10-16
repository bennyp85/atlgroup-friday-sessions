import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { sessions, TERMS } from '@/data/sessions'
import SessionCard from '@/components/SessionCard'

export default function Sessions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="mb-2 text-4xl font-bold">Session recaps</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Pick a term to browse our Friday session recaps and walkthroughs.
        </p>
      </div>

      <Tabs defaultValue={TERMS[0]}>
        <TabsList className="h-auto">
          {TERMS.map((term) => (
            <TabsTrigger
              key={term}
              value={term}
              className="px-6 py-3 text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {term}
            </TabsTrigger>
          ))}
        </TabsList>
        {TERMS.map((term) => (
          <TabsContent key={term} value={term} className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {sessions
                .filter((s) => s.term === term)
                .map((s) => (
                  <SessionCard key={s.id} session={s} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
