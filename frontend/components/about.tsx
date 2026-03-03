import Image from "next/image"

const stats = [
  { value: "+12", label: "שנות ניסיון" },
  { value: "+200", label: "פרויקטים שהושלמו" },
  { value: "98%", label: "שימור לקוחות" },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Right in RTL - Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {"אודותינו"}
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"אנחנו בונים שותפויות, לא רק פרויקטים"}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {"Apex נוסדה בשנת 2014 וצמחה מחברת ייעוץ בוטיק לשותפה אמינה של עסקים ברחבי העולם. הצוות שלנו של אסטרטגים, טכנולוגים ומפעילים מנוסים מביא עשורים של ניסיון מצטבר במגוון תעשיות."}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {"אנחנו מאמינים שטרנספורמציה אמיתית דורשת יותר מייעוץ — היא דורשת שיתוף פעולה, אחריות והבנה עמוקה של האתגרים הייחודיים שלכם. לכן כל התקשרות מתחילה בהקשבה."}
            </p>

          </div>

          {/* Left in RTL - Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/50 bg-secondary/50 px-6 py-8 text-center lg:text-start"
              >
                <p className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
