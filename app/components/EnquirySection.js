'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { InstagramIcon } from './Icons';

const areasCovered = [
  'London',
  'Richmond',
  'Wimbledon',
  'Surrey',
  'Harpenden',
  'Hertfordshire',
  'Berkshire',
  'Sunningdale',
  'Ascot',
  'Berkhamsted',
  'Kensington & Chelsea',
  'Cotswolds',
];

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: 'Full Interior Architecture & Design',
    budget: '£100,000 - £250,000',
    timeline: 'Within 3 - 6 Months',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <section id="enquire" className="bg-[#faf8f5] py-28 md:py-36 px-6 md:px-12 lg:px-20 border-b border-[#e6e0d3]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#8a866a] font-semibold mb-3 block">
            Start a Conversation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-[#181715] font-light leading-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-[#524f49] text-base md:text-lg font-light">
            For new project enquiries, private consultations, or portfolio requests, please contact Nadia and the studio below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Contact & Areas Covered */}
          <div className="lg:col-span-5 bg-[#f3efe8] p-8 md:p-10 rounded-xs border border-[#e6e0d3] space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold block mb-2">
                Studio Contact
              </span>
              <h3 className="font-serif-luxury text-2xl text-[#181715] font-normal mb-6">
                NR Interiors Studio
              </h3>

              <div className="space-y-4 text-sm font-light text-[#524f49]">
                <a
                  href="mailto:enquiries@nrinteriors.co.uk"
                  className="flex items-center gap-3.5 hover:text-[#8a866a] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-[#e6e0d3] flex items-center justify-center text-[#8a866a] group-hover:bg-[#8a866a] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#78756e]">Direct Email</p>
                    <p className="font-medium text-[#181715]">enquiries@nrinteriors.co.uk</p>
                  </div>
                </a>

                <a
                  href="tel:+447973123000"
                  className="flex items-center gap-3.5 hover:text-[#8a866a] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-[#e6e0d3] flex items-center justify-center text-[#8a866a] group-hover:bg-[#8a866a] group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#78756e]">Nadia Reynolds (Principal)</p>
                    <p className="font-medium text-[#181715]">+44 (0)7973 123 000</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 hover:text-[#8a866a] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-full bg-white border border-[#e6e0d3] flex items-center justify-center text-[#8a866a] group-hover:bg-[#8a866a] group-hover:text-white transition-colors shrink-0">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#78756e]">Social Portfolio</p>
                    <p className="font-medium text-[#181715]">@nrinteriors</p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-white border border-[#e6e0d3] flex items-center justify-center text-[#8a866a] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#78756e]">Studio Hours</p>
                    <p className="font-medium text-[#181715]">Mon – Fri, 9:00am – 6:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Covered Chips */}
            <div className="pt-6 border-t border-[#e6e0d3]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8a866a] font-semibold block mb-3">
                Key Areas Covered
              </span>
              <p className="text-xs text-[#78756e] font-light mb-3">
                Based in London and Surrey, accepting commissions across the UK and internationally:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {areasCovered.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white text-[#181715] text-[11px] rounded-xs border border-[#e6e0d3] font-light"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Gravity-Forms Style Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xs border border-[#e6e0d3] shadow-sm">
            {status === 'success' ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8a866a]/15 text-[#8a866a] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-3xl text-[#181715] font-light">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-sm text-[#524f49] max-w-md mx-auto font-light leading-relaxed">
                  Nadia has received your project details. We will be in touch within 24 hours to arrange an initial design consultation.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-full border border-[#181715] text-xs uppercase tracking-[0.2em] hover:bg-[#181715] hover:text-white transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Lady Victoria Spencer"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. victoria@spencer.co.uk"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+44 7..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Property Location / Postcode *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      placeholder="e.g. Richmond, TW10"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors cursor-pointer"
                    >
                      <option value="Full Interior Architecture & Design">Full Interior Architecture &amp; Design</option>
                      <option value="Heritage & Listed Property Renovation">Heritage &amp; Listed Property Renovation</option>
                      <option value="Bespoke Joinery & Interior Styling">Bespoke Joinery &amp; Interior Styling</option>
                      <option value="Turnkey Furnishing & Art Advisory">Turnkey Furnishing &amp; Art Advisory</option>
                      <option value="Initial Design Consultation">Initial Design Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors cursor-pointer"
                    >
                      <option value="£50,000 - £100,000">£50,000 – £100,000</option>
                      <option value="£100,000 - £250,000">£100,000 – £250,000</option>
                      <option value="£250,000 - £500,000">£250,000 – £500,000</option>
                      <option value="£500,000+">£500,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#181715] font-medium mb-2">
                    Project Details &amp; Vision
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell Nadia about your home, architectural character, key rooms, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#faf8f5] border border-[#e6e0d3] rounded-xs text-sm text-[#181715] focus:outline-none focus:border-[#8a866a] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#181715] text-[#faf8f5] hover:bg-[#8a866a] transition-colors duration-300 rounded-full text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-3 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#78756e] text-center mt-3 font-light">
                    Your details are kept strictly confidential under our studio privacy policy.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
