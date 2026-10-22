import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';
import { TollFreeBanner } from '../components/TollFreeBanner';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    query: '',
  });

  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const [submittedTickets, setSubmittedTickets] = useState<Array<{
    id: string;
    fname: string;
    lname: string;
    email: string;
    query: string;
    date: string;
  }>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (notification) {
      setNotification(null);
    }
  };

  const handleReset = () => {
    setFormData({
      fname: '',
      lname: '',
      email: '',
      query: '',
    });
    setNotification(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check validation matching original sub() logic:
    if (
      !formData.fname.trim() ||
      !formData.lname.trim() ||
      !formData.email.trim() ||
      !formData.query.trim()
    ) {
      setNotification({
        type: 'error',
        message: 'Please enter all details before submitting!',
      });
      return;
    }

    // Add to ticket list
    const newTicket = {
      id: `TISSOT-TKT-${Date.now().toString().slice(-5)}`,
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      query: formData.query,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setSubmittedTickets((prev) => [newTicket, ...prev]);

    setNotification({
      type: 'success',
      message: 'Form submitted, Thank you! Your support ticket has been registered.',
    });

    // Reset form after successful submission
    setFormData({
      fname: '',
      lname: '',
      email: '',
      query: '',
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header section matching original contactus.html */}
      <div id="xyz" className="border-b-2 border-neutral-400 pb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-wide underline decoration-[#880e0e] underline-offset-8">
          Contact Us
        </h2>
        <h3 className="mt-4 text-lg sm:text-xl font-heading font-semibold text-neutral-800 leading-snug">
          Your feedback is important to us!
          <br />
          <span className="text-sm sm:text-base font-serif-luxury font-normal text-neutral-700">
            Kindly leave us any message or open a ticket for support below!
          </span>
        </h3>
      </div>

      {/* Notification banner (replaces raw window.alert) */}
      {notification && (
        <div
          className={`p-4 rounded border flex items-start gap-3 transition-all ${
            notification.type === 'success'
              ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
              : 'bg-red-50 border-red-400 text-red-900'
          }`}
        >
          {notification.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-sm font-sans-ui font-medium">
            {notification.message}
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-xs underline hover:opacity-75 font-sans-ui cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Contact Form matching original fin class inputs and layout */}
      <div className="bg-[#dedada] p-6 sm:p-8 rounded-lg border border-neutral-300 shadow-sm max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5 font-sans-ui">
          <div>
            <label htmlFor="fname" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              First Name *
            </label>
            <input
              className="fin w-full px-4 py-2.5 bg-white border border-neutral-400 rounded focus:outline-none focus:border-[#880e0e] text-sm text-neutral-900 transition-colors"
              required
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lname" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Last Name *
            </label>
            <input
              className="fin w-full px-4 py-2.5 bg-white border border-neutral-400 rounded focus:outline-none focus:border-[#880e0e] text-sm text-neutral-900 transition-colors"
              required
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="num" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Email *
            </label>
            <input
              className="fin w-full px-4 py-2.5 bg-white border border-neutral-400 rounded focus:outline-none focus:border-[#880e0e] text-sm text-neutral-900 transition-colors"
              required
              type="email"
              name="email"
              id="num"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="query" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              Your Query or Service Ticket *
            </label>
            <textarea
              required
              className="fin w-full px-4 py-2.5 bg-white border border-neutral-400 rounded focus:outline-none focus:border-[#880e0e] text-sm text-neutral-900 transition-colors"
              name="query"
              id="query"
              cols={38}
              rows={6}
              placeholder="Enter your query"
              value={formData.query}
              onChange={handleChange}
            />
          </div>

          {/* Action buttons matching original #sbmt and #reset */}
          <div id="xyz" className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              id="sbmt"
              className="flex items-center gap-2 bg-[#880e0e] hover:bg-[#680b0b] text-white font-heading font-bold px-8 py-3 text-sm tracking-wider uppercase rounded shadow transition-all hover:scale-105 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submit</span>
            </button>

            <button
              type="button"
              id="reset"
              onClick={handleReset}
              className="flex items-center gap-2 bg-[#c5c5c5] hover:bg-neutral-400 text-black font-heading font-bold px-6 py-3 text-sm tracking-wider uppercase rounded border border-neutral-400 shadow-xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </form>
      </div>

      {/* Submitted tickets feed (session based) */}
      {submittedTickets.length > 0 && (
        <div className="bg-[#dedada] p-6 rounded-lg border border-neutral-300 max-w-2xl font-sans-ui">
          <h4 className="font-heading font-bold text-sm text-neutral-900 flex items-center gap-2 mb-3">
            <Mail className="w-4 h-4 text-[#880e0e]" />
            Your Submitted Support Tickets ({submittedTickets.length})
          </h4>
          <div className="space-y-3">
            {submittedTickets.map((ticket) => (
              <div key={ticket.id} className="p-3 bg-white rounded border border-neutral-300 text-xs">
                <div className="flex justify-between items-center text-neutral-500 mb-1">
                  <span className="font-bold text-[#880e0e]">{ticket.id}</span>
                  <span>{ticket.date}</span>
                </div>
                <div className="font-semibold text-neutral-900">
                  {ticket.fname} {ticket.lname} &lt;{ticket.email}&gt;
                </div>
                <p className="mt-1 text-neutral-700 italic font-serif-luxury text-sm">
                  &ldquo;{ticket.query}&rdquo;
                </p>
                <div className="mt-2 text-[11px] text-emerald-700 font-medium">
                  ✓ Status: Dispatched to Le Locle Customer Support Desk
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toll-free support callout */}
      <TollFreeBanner />
    </div>
  );
};
