import {
  ArrowRight,
  Brain,
  CheckCircle2,
  FileUp,
  Lock,
  Radar,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Activity,
  Award,
  Mail
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { faqs, services, testimonials } from '../data/primescore'
import Button from '../components/ui/Button'
import AnimatedCounter from '../components/ui/AnimatedCounter'
import FAQAccordion from '../components/ui/FAQAccordion'
import Reveal from '../components/ui/Reveal'
import HeroInteractive from '../components/ui/HeroInteractive'
import DashboardPreview3D from '../components/ui/DashboardPreview3D'
import { useMemo, useState } from 'react'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brandYellow text-brandYellow" />
      ))}
    </div>
  )
}

const serviceIcons: Record<string, typeof ShieldCheck> = {
  rectification: ShieldCheck,
  settlement: Lock,
  'card-disputes': FileUp,
  monitoring: Radar,
  coaching: TrendingUp,
  emi: Brain,
}

export default function Home() {
  const [ctaEmail, setCtaEmail] = useState('')
  const [ctaStatus, setCtaStatus] = useState<'idle' | 'sent'>('idle')

  const statItems = useMemo(
    () => [
      { label: 'Clients Supported', value: 50000, suffix: '+' },
      { label: 'Value Unlocked', value: 2400, prefix: '₹', suffix: ' Cr+' },
      { label: 'Cases Tracked', value: 97, suffix: '%' },
      { label: 'Avg. Turnaround', value: 90, suffix: ' Days' },
    ],
    [],
  )

  return (
    <div className="pb-20">
      {/* ═══ HERO ═══ */}
      <HeroInteractive />

      {/* ═══ STATS ═══ */}
      <section className="-mx-4 sm:-mx-6 lg:-mx-12">
        <div className="border-y border-brandNavy/5 bg-brandNavy px-4 py-12 sm:px-6 lg:px-12 text-white">
          <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-4">
            {statItems.map((s) => (
              <Reveal key={s.label}>
                <div className="text-center">
                  <div className="font-display text-4xl font-black tracking-tight sm:text-5xl text-white">
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-white/70 uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="mt-32" id="how">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandRed">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
              Three steps to a cleaner report
            </h2>
            <p className="mt-4 text-base text-textSecondary">We do the heavy lifting. You track the progress.</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: FileUp,
              num: '01',
              title: 'Upload Your Report',
              desc: 'Quick onboarding. We only request essential documents through a secure, encrypted upload portal.',
            },
            {
              icon: Brain,
              num: '02',
              title: 'We Identify & Dispute',
              desc: 'Our experts detect disputable inaccuracies and prepare bureau-ready evidence packs backed by law.',
            },
            {
              icon: TrendingUp,
              num: '03',
              title: 'Score Recovers',
              desc: 'Corrections reflect — your credit strengthens and premium loan approvals become easier than ever.',
            },
          ].map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.08}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-brandNavy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30 hover:shadow-elevated">
                <div className="absolute -right-4 -top-4 text-[120px] font-black leading-none text-brandNavy/[0.03] transition-colors group-hover:text-brandRed/[0.05]">
                  {step.num}
                </div>
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brandRed/10 transition-colors group-hover:bg-brandRed">
                    <step.icon className="h-6 w-6 text-brandRed transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-brandNavy">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-textSecondary">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ DASHBOARD HIGHLIGHT ═══ */}
      <section className="mt-32">
        <Reveal>
          <div className="rounded-[3rem] bg-brandNavy px-6 py-16 sm:px-16 sm:py-20 lg:px-24">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <img src="/logo.png" alt="Primescore" className="h-8 w-auto brightness-0 invert mb-8" />
                <h2 className="font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
                  Total transparency.<br/>No black boxes.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                  Unlike traditional agencies, we give you a live dashboard to track every dispute, reference ID, and score change. You are always in control of your financial data.
                </p>
                <div className="mt-10 grid gap-4">
                  {[
                    'Live case tracking & timelines',
                    'Direct chat with your credit expert',
                    'Secure document vault',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-brandGreen" />
                      <span className="text-base font-medium text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <NavLink to="/dashboard">
                    <Button className="bg-white text-brandNavy hover:bg-white/90">View Sample Dashboard</Button>
                  </NavLink>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                 <DashboardPreview3D />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="mt-32" id="services">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandRed">Services</p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
                Everything you need to repair credit
              </h2>
            </div>
            <NavLink to="/services" className="shrink-0">
              <Button variant="ghost" className="h-12 border-brandNavy/20">
                View all services <ArrowRight className="h-5 w-5" />
              </Button>
            </NavLink>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = serviceIcons[s.id] || ShieldCheck
            return (
              <Reveal key={s.id} delay={idx * 0.05}>
                <div className="group flex h-full flex-col rounded-[2rem] border border-brandNavy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/30 hover:shadow-elevated">
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brandNavy/5">
                      <Icon className="h-6 w-6 text-brandNavy" />
                    </div>
                    <span className="rounded-full bg-brandYellow/10 px-3 py-1 font-mono text-xs font-bold text-brandYellow">
                      {s.priceRange}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-brandNavy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-textSecondary">{s.short}</p>
                  <NavLink to="/services" className="mt-8">
                    <Button variant="ghost" className="w-full text-brandNavy">
                      Learn More
                    </Button>
                  </NavLink>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="mt-32">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandRed">Testimonials</p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
                Real recoveries.
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-brandNavy/10 bg-white px-4 py-2 shadow-sm">
              <Stars count={5} />
              <span className="ml-2 text-sm font-bold text-brandNavy">4.9/5 Average</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.06}>
              <div className="flex h-full flex-col rounded-[2rem] border border-brandNavy/10 bg-white p-8 shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-brandNavy text-white font-display text-lg font-bold">
                      {t.name.split(' ').map((w) => w[0]).join('')}
                    </div>
                    <div>
                      <div className="text-base font-bold text-brandNavy">{t.name}</div>
                      <div className="text-xs font-medium text-textSecondary">{t.role}, {t.city}</div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 flex-1 text-base italic leading-relaxed text-textSecondary">"{t.quote}"</p>

                <div className="mt-8 flex items-center gap-2 rounded-2xl bg-night px-4 py-4 border border-brandNavy/5">
                  <div className="flex-1 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-textSecondary">Before</div>
                    <div className="mt-1 font-mono text-xl font-black text-brandNavy">{t.before}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-textSecondary/50" />
                  <div className="flex-1 text-center">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-brandGreen">After</div>
                    <div className="mt-1 font-mono text-xl font-black text-brandGreen">{t.after}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FAQ & INQUIRY ═══ */}
      <section className="mt-32 mb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* FAQ Side */}
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brandRed">FAQ</p>
                <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
                  Common questions
                </h2>
                <div className="mt-10">
                  <FAQAccordion items={faqs} />
                </div>
              </div>
            </Reveal>

            {/* Inquiry Side */}
            <Reveal delay={0.2}>
              <div className="rounded-[2.5rem] border border-brandNavy/10 bg-white p-8 shadow-card sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-brandRed/5 blur-3xl pointer-events-none" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brandRed/10">
                    <Mail className="h-6 w-6 text-brandRed" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-brandNavy">Send us a message</h3>
                    <p className="mt-1 text-sm text-textSecondary">We typically reply within 2 hours.</p>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!ctaEmail.trim()) return
                    setCtaStatus('sent')
                    setTimeout(() => setCtaStatus('idle'), 2500)
                    setCtaEmail('')
                  }}
                  className="relative z-10 mt-8 flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-14 w-full rounded-2xl border border-brandNavy/10 bg-brandNavy/[0.02] px-5 text-base text-brandNavy placeholder:text-textSecondary outline-none transition-colors focus:border-brandNavy focus:bg-white"
                    required
                  />
                  <input
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-brandNavy/10 bg-brandNavy/[0.02] px-5 text-base text-brandNavy placeholder:text-textSecondary outline-none transition-colors focus:border-brandNavy focus:bg-white"
                    required
                  />
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-brandNavy/10 bg-brandNavy/[0.02] p-5 text-base text-brandNavy placeholder:text-textSecondary outline-none transition-colors focus:border-brandNavy focus:bg-white"
                    required
                  />
                  
                  <div className="mt-2 text-sm text-textSecondary">
                    Or email us directly at <a href="mailto:info@primescore.in" className="font-bold text-brandRed hover:underline">info@primescore.in</a>
                  </div>

                  <Button type="submit" className="mt-4 h-14 w-full text-base shadow-glowRed">
                    {ctaStatus === 'sent' ? 'Message Sent ✓' : 'Send Inquiry'}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}

