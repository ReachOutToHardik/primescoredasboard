
import { useParams, Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CityService() {
  const { city } = useParams();
  const cityName = city ? city.charAt(0).toUpperCase() + city.slice(1).replace(/-/g, ' ') : '';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/5 rounded-l-[10rem] -z-0" />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-8">
              <MapPin className="h-4 w-4 text-[#10b981]" />
              <span className="text-sm font-bold text-gray-900">Serving {cityName}</span>
            </div>
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
              Premium Credit Rectification in <span className="text-[#10b981]">{cityName}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Join thousands of residents in {cityName} who have successfully cleared their credit reports and regained financial freedom with Primescore's expert legal-backed dispute process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#10b981] text-white rounded-xl font-bold hover:shadow-lg transition-all text-center">
                Get Free Consultation
              </Link>
              <Link to="/how-it-works" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-gray-100 transition-all text-center">
                Learn the Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 border-b border-gray-100">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Clients in ' + cityName, value: '2,500+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Avg. Score Boost', value: '120+' },
              { label: 'Trust Rating', value: '4.9/5' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Primescore in City */}
      <section className="py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Why {cityName} Trusts Primescore</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand the local banking landscape in {cityName} and work directly with major institutions to resolve your credit disputes effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Expert Legal Team',
                desc: 'Our legal experts handle complex CIBIL disputes that standard automated tools cannot resolve.',
                icon: ShieldCheck
              },
              {
                title: 'Local Bureau Focus',
                desc: 'We have deep experience dealing with bank branches and regional bureau offices in ' + cityName + '.',
                icon: MapPin
              },
              {
                title: 'Premium Result Guarantee',
                desc: 'We dont just file disputes; we follow up until the errors are removed from your record.',
                icon: Star
              }
            ].map((item) => (
              <div key={item.title} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8">
                  <item.icon className="h-7 w-7 text-[#10b981]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized SEO Content */}
      <section className="py-24 bg-gray-900 text-white rounded-[4rem] mx-4 lg:mx-12 mb-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-dots" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-8">Ready to boost your CIBIL score in {cityName}?</h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Dont let a low credit score hold you back from your dream home or car in {cityName}. Our specialized team is ready to analyze your report today.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#10b981] text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
          >
            Start Your Free Analysis <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* FAQ / SEO Text */}
      <section className="py-24 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12">Credit Rectification in {cityName}: Frequently Asked Questions</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#10b981]" /> How long does credit repair take in {cityName}?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While every case is unique, most clients in {cityName} see significant improvements in their credit scores within 60 to 90 days. Our legal-first approach ensures that bureaus and lenders respond within the mandatory timelines.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-[#10b981]" /> Is credit rectification legal in India?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely. Every citizen has a legal right to an accurate credit report. We work within the framework of the Credit Information Companies (Regulation) Act, 2005 to ensure your rights are protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
