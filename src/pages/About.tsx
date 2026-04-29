import { ShieldCheck, Sparkles, Target, Users } from 'lucide-react'
import Reveal from '../components/ui/Reveal'

const team = [
  { name: 'Arjun Verma', role: 'Founder & CEO', focus: 'Credit strategy & compliance' },
  { name: 'Meera Nair', role: 'Head of Disputes', focus: 'Bureau filings & escalations' },
  { name: 'Rahul Singh', role: 'Product Lead', focus: 'Dashboards & transparency UX' },
  { name: 'Sana Khan', role: 'Client Success', focus: 'Onboarding & case outcomes' },
]

const avatarColors = ['bg-brandRed/15 text-brandRed', 'bg-blue/15 text-blue', 'bg-success/15 text-success', 'bg-brandNavy/10 text-brandNavy']

export default function About() {
  return (
    <div className="pb-20">
      <section className="pt-12 sm:pt-16">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">About us</p>
            <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
              We believe every Indian deserves fair credit.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
              A single inaccurate tag can block home loans, business credit, even rentals. Primescore exists to
              correct what's wrong — with documentation, discipline, and transparency.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Founding story</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-brandNavy">
                Built from the gap we saw
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-textSecondary">
                Too many people were being rejected for loans because of errors they didn't create — and
                couldn't navigate. The dispute ecosystem is fragmented: unclear timelines, weak drafts, no tracking.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                We built Primescore like a premium rectification desk: audit → evidence → filing → follow-ups →
                clean outcomes, with a dashboard that shows the truth in real time.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Values</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-brandNavy">
                The Primescore standard
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { t: 'Trust', d: 'Clear drafts, transparent timelines.', i: ShieldCheck },
                  { t: 'Transparency', d: 'Track every filing with reference IDs.', i: Sparkles },
                  { t: 'Technology', d: 'System-led detection + expert judgement.', i: Target },
                  { t: 'India-first', d: 'Built for Indian lenders and bureau cycles.', i: Users },
                ].map((v) => (
                  <div key={v.t} className="rounded-xl border border-brandNavy/6 bg-night/50 p-4">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-brandRed/10">
                        <v.i className="h-4 w-4 text-brandRed" />
                      </div>
                      <span className="text-sm font-semibold text-brandNavy">{v.t}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-textSecondary">{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section className="mt-24">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Team</p>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-brandNavy sm:text-4xl">
              The people behind outcomes
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 0.04}>
              <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated">
                <div className={['mx-auto grid h-14 w-14 place-items-center rounded-full font-display text-lg font-bold', avatarColors[idx % avatarColors.length]].join(' ')}>
                  {m.name.split(' ').slice(0, 2).map((x) => x[0]).join('')}
                </div>
                <div className="mt-4 text-center">
                  <div className="font-semibold text-brandNavy">{m.name}</div>
                  <div className="mt-0.5 text-sm text-textSecondary">{m.role}</div>
                  <div className="mt-3 text-xs text-textSecondary">
                    <span className="font-medium text-brandNavy">{m.focus}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-24">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Timeline</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-brandNavy">2020 → 2025</h2>
              <div className="mt-5 grid gap-3">
                {[
                  { y: '2020', t: 'First dispute desk launched' },
                  { y: '2021', t: 'Evidence pack standardization' },
                  { y: '2023', t: 'Dashboard tracking shipped' },
                  { y: '2024', t: 'Expert network expanded' },
                  { y: '2025', t: 'Scaled with discipline' },
                ].map((x) => (
                  <div key={x.y} className="flex items-center gap-4 rounded-xl border border-brandNavy/6 bg-night/50 px-4 py-3.5">
                    <span className="font-mono text-sm font-semibold text-brandRed">{x.y}</span>
                    <span className="text-sm font-medium text-brandNavy">{x.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Recognition</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-brandNavy">Press & mentions</h2>
              <p className="mt-3 text-sm text-textSecondary">
                Publications where our work has been featured or discussed.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {['Mint', 'ET Markets', 'Business Standard', 'YourStory', 'Moneycontrol', 'The Hindu BL'].map((x) => (
                  <div key={x} className="rounded-xl border border-brandNavy/6 bg-night/50 px-4 py-3 text-center text-sm font-medium text-brandNavy">
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-brandRed/8 p-4">
                <p className="text-sm leading-relaxed text-textSecondary">
                  <span className="font-semibold text-brandNavy">Our promise:</span> Premium experience, clean documentation,
                  and transparent execution.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
