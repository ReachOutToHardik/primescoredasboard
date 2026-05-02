import { useState } from 'react'
import {
  Bell,
  FileText,
  LayoutDashboard,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'

// Import the real images
import overviewImg from '../data/overview.png'
import accountImg from '../data/account.png'
import enquiriesImg from '../data/enquiries.png'
import comparisonImg from '../data/comparision.png'

const tabImages: Record<string, string> = {
  'Overview': overviewImg,
  'Accounts': accountImg,
  'Enquiries': enquiriesImg,
  'Comparison': comparisonImg,
}

function ImagePlaceholder({ title }: { title: string }) {
  const imgSrc = tabImages[title] || overviewImg

  return (
    <Reveal>
      <div className="w-full overflow-hidden rounded-2xl border border-brandNavy/8 bg-white shadow-card">
        <img
          src={imgSrc}
          alt={`${title} view`}
          className="h-auto w-full object-cover"
        />
      </div>
    </Reveal>
  )
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  const tabs = [
    { id: 'Overview', icon: LayoutDashboard, label: 'Overview' },
    { id: 'Accounts', icon: FileText, label: 'Accounts' },
    { id: 'Enquiries', icon: Bell, label: 'Enquiries' },
    { id: 'Comparison', icon: ShieldCheck, label: 'Comparison' },
  ]

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
                {tabs.map((x) => (
                  <button
                    key={x.id}
                    onClick={() => setActiveTab(x.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      activeTab === x.id
                        ? 'bg-brandNavy/[0.04] font-semibold text-brandNavy'
                        : 'text-textSecondary hover:bg-brandNavy/[0.04] hover:text-brandNavy'
                    }`}
                  >
                    <x.icon className="h-4 w-4" />
                    <span>{x.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-brandRed/8 p-3">
                <div className="text-sm font-semibold text-brandNavy">Book Expert Call</div>
                <div className="mt-0.5 text-xs text-textSecondary">15 min · Clear next steps</div>
                <Button className="mt-3 h-9 w-full text-xs">Schedule</Button>
              </div>
            </aside>
          </Reveal>

          {/* Main content */}
          <div className="grid gap-6">
            {/* Mobile Tabs */}
            <Reveal>
              <div className="flex overflow-x-auto rounded-xl border border-brandNavy/8 bg-white p-2 shadow-sm lg:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((x) => (
                  <button
                    key={x.id}
                    onClick={() => setActiveTab(x.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors ${
                      activeTab === x.id
                        ? 'bg-brandNavy/[0.04] font-semibold text-brandNavy'
                        : 'text-textSecondary hover:bg-brandNavy/[0.04] hover:text-brandNavy'
                    }`}
                  >
                    <x.icon className="h-4 w-4" />
                    <span>{x.label}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <ImagePlaceholder title={activeTab} />
          </div>
        </div>
      </section>
    </div>
  )
}
