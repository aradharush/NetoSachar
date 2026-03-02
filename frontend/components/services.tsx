import { BarChart3, Lightbulb, Rocket } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const services = [
  {
    icon: BarChart3,
    title: "ייעוץ אסטרטגי",
    description:
      "תובנות מבוססות נתונים ואסטרטגיות מעשיות המותאמות למיקום שלכם בשוק. אנחנו עוזרים לכם לזהות הזדמנויות ולנווט בנוף עסקי מורכב.",
  },
  {
    icon: Lightbulb,
    title: "טרנספורמציה דיגיטלית",
    description:
      "מודרניזציה מקצה לקצה של הטכנולוגיה והתפעול שלכם. ממערכות ישנות לפלטפורמות חדשניות, אנחנו מלווים כל שלב בדרך.",
  },
  {
    icon: Rocket,
    title: "האצת צמיחה",
    description:
      "מסגרות ומערכות סקלאביליות שנועדו להאיץ הכנסות, לייעל תפעול ולמצב את העסק שלכם להצלחה ארוכת טווח.",
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {"מה אנחנו עושים"}
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"שירותים שנבנו לצמיחה"}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {"כל מה שאתם צריכים כדי לשנות את העסק שלכם ולהוביל את התחרות."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/50 bg-card transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 flex size-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="size-5 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
