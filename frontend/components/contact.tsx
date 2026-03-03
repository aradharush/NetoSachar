"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/submitContact"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false) // סטייט לטעינה

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    // איסוף הנתונים מהטופס
    const formData = new FormData(e.currentTarget)
    
    // קריאה לפונקציית השרת
    const result = await submitContactForm(formData)
    
    setLoading(false)

    if (result.success) {
      setSubmitted(true)
    } else {
      alert("אירעה שגיאה. אנא נסו שוב.")
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Info */}
          <div className="flex flex-col justify-center">
            {/* ... כל הטקסט של ה-Info נשאר בדיוק אותו דבר ... */}
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {"צרו קשר"}
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {"בואו נתחיל שיחה"}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {"מוכנים לקחת את העסק שלכם לשלב הבא? מלאו את הטופס והצוות שלנו יחזור אליכם תוך 24 שעות. ללא התחייבות, רק שיחה על אפשרויות."}
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary">
                  <Send className="size-3.5 text-primary-foreground" />
                </div>
                hello@apexbusiness.com
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary">
                  <CheckCircle2 className="size-7 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {"ההודעה נשלחה"}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {"תודה שפניתם אלינו. ניצור אתכם קשר בקרוב."}
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  {"שליחת הודעה נוספת"}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">{"שם"}</Label>
                    <Input id="name" name="name" placeholder="השם שלכם" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">{"אימייל"}</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" dir="ltr" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">{"נושא"}</Label>
                  <Input id="subject" name="subject" placeholder="במה נוכל לעזור?" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">{"הודעה"}</Label>
                  <Textarea id="message" name="message" placeholder="ספרו לנו על הפרויקט שלכם..." className="min-h-32" required />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full rounded-full text-base"
                  disabled={loading} // מנטרל את הכפתור בזמן טעינה
                >
                  {loading ? "שולח..." : "שליחת הודעה"}
                  {!loading && <Send className="me-1 size-4" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}