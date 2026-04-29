import {
  Bell,
  Calendar,
  CheckCircle2,
  FileText,
  FolderUp,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Timer,
  UserRound,
} from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import CreditScoreGauge from '../components/ui/CreditScoreGauge'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const history = [
  { month: 'Nov', score: 552 },
  { month: 'Dec', score: 566 },
  { month: 'Jan', score: 603 },
  { month: 'Feb', score: 641 },
  { month: 'Mar', score: 692 },
  { month: 'Apr', score: 748 },
]

const disputes = [
  { title: 'Duplicate personal loan account', status: 'Filed', eta: '14–21 days' },
  { title: 'Wrong 30 DPD late tag (credit card)', status: 'Pending', eta: '3–5 days' },
  { title: 'Unrecognized inquiry — NBFC', status: 'Resolved', eta: 'Completed' },
]

const uploads = [
  { name: 'CIBIL_Report_April.pdf', date: 'Apr 22, 2026' },
  { name: 'KYC_PAN.jpg', date: 'Apr 22, 2026' },
  { name: 'Bank_Statement_Mar.pdf', date: 'Apr 23, 2026' },
]

const notifications = [
  { title: 'Dispute filed with reference ID', detail: 'Tracking is live.', time: '2h ago' },
  { title: 'Expert review complete', detail: 'Audit summary is ready.', time: 'Yesterday' },
  { title: 'Score snapshot captured', detail: 'Monthly baseline updated.', time: '3d ago' },
]

function StatusPill({ status }: { status: string }) {
  const cls =
    status === 'Resolved'
      ? 'bg-success/10 text-success'
      : status === 'Filed'
        ? 'bg-brandRed/10 text-brandRed'
        : 'bg-blue/10 text-blue'
  return <span className={['rounded-full px-2.5 py-0.5 text-xs font-semibold', cls].join(' ')}>{status}</span>
}

export default function Dashboard() {
  return (
    <div className="pb-20">
      <section className="pt-12 sm:pt-16">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-textSecondary">Dashboard</p>
            <h1 className="mt-3 font-display text-4xl font-black tracking-tight text-brandNavy sm:text-5xl">
              Your Primescore Dashboard
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary">
              Preview of what clients see: score movement, active disputes, documents, and next actions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-12">
        <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
          {/* Sidebar */}
          <Reveal>
            <aside className="sticky top-20 hidden h-fit rounded-2xl border border-brandNavy/8 bg-white p-4 shadow-card lg:block">
              <div className="flex items-center gap-3 px-2 pb-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brandRed/12 font-display text-sm font-bold text-brandRed">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-brandNavy">Client</div>
                  <div className="font-mono text-xs text-textSecondary">PS-28419</div>
                </div>
              </div>

              <div className="grid gap-1">
                {[
                  { icon: LayoutDashboard, label: 'Overview' },
                  { icon: ShieldCheck, label: 'Disputes' },
                  { icon: FolderUp, label: 'Documents' },
                  { icon: Bell, label: 'Notifications' },
                  { icon: Calendar, label: 'Expert Call' },
                ].map((x) => (
                  <div key={x.label} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-textSecondary transition-colors hover:bg-brandNavy/[0.04] hover:text-brandNavy">
                    <x.icon className="h-4 w-4" />
                    <span className="font-medium">{x.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-brandRed/8 p-3">
                <div className="text-sm font-semibold text-brandNavy">Book Expert Call</div>
                <div className="mt-0.5 text-xs text-textSecondary">15 min · Clear next steps</div>
                <Button className="mt-3 h-9 w-full text-xs">Schedule</Button>
              </div>
            </aside>
          </Reveal>

          {/* Main content */}
          <div className="grid gap-6">
            <Reveal>
              <CreditScoreGauge from={520} to={748} label="Current Score" />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Score History Chart */}
              <Reveal>
                <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-textSecondary">Score History</p>
                      <h3 className="mt-1 font-display text-lg font-bold text-brandNavy">Last 6 months</h3>
                    </div>
                    <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">+196 pts</span>
                  </div>
                  <div className="mt-5 h-52">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={history} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <CartesianGrid stroke="rgba(15,23,41,0.06)" vertical={false} />
                        <XAxis dataKey="month" stroke="rgba(90,100,120,0.8)" tickLine={false} axisLine={false} />
                        <YAxis domain={[500, 800]} stroke="rgba(90,100,120,0.8)" tickLine={false} axisLine={false} width={36} />
                        <Tooltip
                          contentStyle={{ background: 'white', border: '1px solid rgba(15,23,41,0.08)', borderRadius: 12, color: '#0F1729' }}
                          labelStyle={{ color: '#5A6478' }}
                        />
                        <Line type="monotone" dataKey="score" stroke="#E4A907" strokeWidth={2.5}
                          dot={{ r: 3.5, stroke: '#F7F8FC', strokeWidth: 2, fill: '#E4A907' }} activeDot={{ r: 5 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Reveal>

              {/* Disputes */}
              <Reveal>
                <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card">
                  <p className="text-xs font-medium uppercase tracking-wider text-textSecondary">Active Disputes</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brandNavy">What's in motion</h3>
                  <div className="mt-5 grid gap-3">
                    {disputes.map((d) => (
                      <div key={d.title} className="rounded-xl border border-brandNavy/6 bg-night/50 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-medium text-brandNavy">{d.title}</div>
                            <div className="mt-1 flex items-center gap-1.5 text-xs text-textSecondary">
                              <Timer className="h-3.5 w-3.5" /> {d.eta}
                            </div>
                          </div>
                          <StatusPill status={d.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 rounded-xl bg-brandRed/8 p-3.5">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span className="text-sm text-brandNavy"><span className="font-semibold">Next:</span> approve dispute pack</span>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Documents */}
              <Reveal>
                <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card">
                  <p className="text-xs font-medium uppercase tracking-wider text-textSecondary">Documents</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brandNavy">Uploaded files</h3>
                  <div className="mt-5 grid gap-2.5">
                    {uploads.map((u) => (
                      <div key={u.name} className="flex items-center justify-between gap-3 rounded-xl border border-brandNavy/6 bg-night/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-blue" />
                          <div>
                            <div className="text-sm font-medium text-brandNavy">{u.name}</div>
                            <div className="text-xs text-textSecondary">{u.date}</div>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-textSecondary">Verified</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 w-full">
                    <FolderUp className="h-4 w-4" /> Upload more
                  </Button>
                </div>
              </Reveal>

              {/* Notifications */}
              <Reveal>
                <div className="rounded-2xl border border-brandNavy/8 bg-white p-6 shadow-card">
                  <p className="text-xs font-medium uppercase tracking-wider text-textSecondary">Notifications</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-brandNavy">Recent updates</h3>
                  <div className="mt-5 grid gap-2.5">
                    {notifications.map((n) => (
                      <div key={n.title} className="rounded-xl border border-brandNavy/6 bg-night/50 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-medium text-brandNavy">{n.title}</div>
                            <div className="mt-0.5 text-xs text-textSecondary">{n.detail}</div>
                          </div>
                          <span className="shrink-0 font-mono text-xs text-textSecondary">{n.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-brandRed/8 p-3.5">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-brandRed" />
                      <div>
                        <div className="text-sm font-semibold text-brandNavy">Book Expert Call</div>
                        <div className="text-xs text-textSecondary">Triage your profile in 15 minutes.</div>
                      </div>
                    </div>
                    <Button className="mt-3 w-full">Schedule now</Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
