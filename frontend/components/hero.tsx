import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28 lg:pb-40 lg:pt-36">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
          <span className="inline-block size-2 rounded-full bg-foreground" />
          {"כעת מקבלים לקוחות חדשים ל-2026"}
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          {"פתרונות אסטרטגיים לעסק המודרני"}
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"אנחנו משתפים פעולה עם חברות חדשניות כדי לספק ייעוץ, אסטרטגיה וטרנספורמציה דיגיטלית שמובילה לצמיחה מדידה."}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="rounded-full px-8 text-base">
            <Link href="#contact">
              {"בקשו גישה"}
              <ArrowLeft className="me-1 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 text-base"
          >
            <Link href="#services">{"למידע נוסף"}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
