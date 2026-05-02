import { useState } from 'react'
import { Search, Building2, MapPin, CheckCircle2, XCircle } from 'lucide-react'

export default function IfscCode() {
  const [ifsc, setIfsc] = useState('')
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ifsc.trim()) return
    setLoading(true)
    setError('')
    setData(null)

    try {
      const res = await fetch(`https://ifsc.razorpay.com/${ifsc.toUpperCase()}`)
      if (!res.ok) throw new Error('Invalid IFSC Code or Bank details not found')
      const json = await res.json()
      setData(json)
    } catch (err: any) {
      setError('Bank branch not found. Please verify the 11-digit IFSC code.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-20 lg:py-24 min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-gray-900 sm:text-5xl">
            IFSC Code Finder
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Verify any bank's IFSC code instantly for secure money transfers.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10 mb-8">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter 11-digit IFSC Code (e.g., HDFC0000123)"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                maxLength={11}
                className="w-full pl-12 pr-32 py-4 rounded-xl border border-gray-200 focus:border-brandNavy focus:ring-1 focus:ring-brandNavy outline-none transition-all uppercase text-lg font-medium"
                required
              />
              <button 
                type="submit" 
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 px-6 bg-brandNavy text-white rounded-lg font-medium hover:bg-brandNavy/90 transition-colors disabled:opacity-70"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
            {error && (
              <p className="mt-4 text-red-500 font-medium text-center">{error}</p>
            )}
          </form>
        </div>

        {/* Results Card */}
        {data && (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                <Building2 className="h-6 w-6 text-brandNavy" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{data.BANK}</h2>
                <p className="text-gray-500 font-medium">{data.BRANCH} Branch</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">IFSC Code</label>
                  <p className="text-xl font-mono font-bold text-brandNavy mt-1">{data.IFSC}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">MICR Code</label>
                  <p className="text-lg font-mono font-medium text-gray-900 mt-1">{data.MICR || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</label>
                  <div className="flex items-start gap-2 mt-1">
                    <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                    <p className="text-gray-900 leading-relaxed">{data.ADDRESS}</p>
                  </div>
                  <p className="text-gray-600 ml-7 mt-1">{data.CITY}, {data.STATE}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Payment Facilities</h3>
                <div className="space-y-4">
                  {[
                    { label: 'NEFT Transfer', value: data.NEFT },
                    { label: 'RTGS Transfer', value: data.RTGS },
                    { label: 'IMPS Transfer', value: data.IMPS },
                    { label: 'UPI Supported', value: data.UPI }
                  ].map(facility => (
                    <div key={facility.label} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{facility.label}</span>
                      {facility.value ? (
                        <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2 py-1 rounded-md text-sm font-bold">
                          <CheckCircle2 className="h-4 w-4" /> Yes
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2 py-1 rounded-md text-sm font-bold">
                          <XCircle className="h-4 w-4" /> No
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEO Content */}
        <div className="mt-20 prose prose-lg prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is an IFSC Code?</h2>
          <p className="text-gray-600 mb-6">
            IFSC stands for Indian Financial System Code. It is an 11-character alphanumeric code used to uniquely identify all bank branches participating in the various online money transfer schemes in India. The code is mandatory for fund transfers through NEFT (National Electronic Funds Transfer), RTGS (Real Time Gross Settlement), and IMPS (Immediate Payment Service).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Read an IFSC Code?</h2>
          <p className="text-gray-600 mb-6">
            An 11-digit IFSC code is broken down into three parts:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>First 4 characters:</strong> Alphabets representing the name of the bank (e.g., SBIN for State Bank of India, HDFC for HDFC Bank).</li>
            <li><strong>Fifth character:</strong> Always the number '0' (zero), reserved for future use.</li>
            <li><strong>Last 6 characters:</strong> Usually numbers, representing the specific branch of the bank.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why is the IFSC Code Important?</h2>
          <p className="text-gray-600 mb-6">
            The primary purpose of an IFSC code is to ensure safe and accurate electronic fund transfers. When transferring money online, the IFSC code directs the banking network to route the funds exactly to the destination branch, preventing errors or delays. Without a valid IFSC code, online banking transactions cannot be completed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Can I Find My IFSC Code?</h2>
          <p className="text-gray-600">
            You can find the IFSC code of your bank branch printed on your bank passbook, checkbook leaves, and account statements. Alternatively, you can use our free IFSC Code Finder tool above to search for any bank branch across India instantly. All you need is the 11-digit code to get the complete address and transfer facilities available.
          </p>
        </div>

      </div>
    </div>
  )
}
