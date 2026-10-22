import React, { useState } from 'react';
import { Mail, X, CheckCircle2, AlertCircle, Send, LoaderCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const SendEmail: React.FC = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const closeModal = () => {
    if (isSending) return;
    setIsOpen(false);
    setMessage('');
    setSent(false);
  };

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');

    const normalizedEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail, website }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send the email right now.');
      }

      setSent(true);
      setMessage('Email sent! Please check your inbox (and spam folder).');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const panelClass = theme === 'dark'
    ? 'bg-[#17171D] border-[#34343D] text-zinc-100'
    : 'bg-white border-pink-200 text-zinc-900';

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl border p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 ${panelClass}`}>
          <div className="flex items-start gap-4">
            <div className={`rounded-xl p-3 ${theme === 'dark' ? 'bg-pink-950/50 text-pink-300' : 'bg-pink-50 text-pink-700'}`}>
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Want a test email?</h2>
              <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Enter your email and we’ll send you a short portfolio message using Brevo.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => { setIsOpen(true); setMessage(''); setSent(false); }}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            <Send className="w-4 h-4" />
            Send email
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="send-email-title"
            className={`relative w-full max-w-md rounded-2xl border p-6 shadow-2xl ${panelClass}`}
          >
            <button
              type="button"
              onClick={closeModal}
              disabled={isSending}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-lg p-2 text-zinc-500 hover:bg-pink-50 hover:text-pink-700 disabled:opacity-50"
            >
              <X className="w-5 h-5" />
            </button>

            {sent ? (
              <div className="py-5 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
                <h3 id="send-email-title" className="mt-4 text-xl font-bold">Check your inbox!</h3>
                <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{message}</p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-pink-700"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="mb-5 flex items-center gap-3">
                  <div className={`rounded-xl p-3 ${theme === 'dark' ? 'bg-pink-950/50 text-pink-300' : 'bg-pink-50 text-pink-700'}`}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 id="send-email-title" className="text-xl font-bold">Send email</h3>
                    <p className={`mt-1 text-xs ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>We’ll send one short test email to your inbox.</p>
                  </div>
                </div>

                <form onSubmit={handleSend} className="space-y-4">
                  <div>
                    <label htmlFor="send-email-address" className="mb-2 block text-sm font-medium">Your email address</label>
                    <input
                      id="send-email-address"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className={`w-full rounded-lg border px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-pink-500 ${theme === 'dark' ? 'border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500' : 'border-pink-200 bg-white text-zinc-900 placeholder:text-zinc-500'}`}
                    />
                  </div>

                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="send-email-website">Leave this field empty</label>
                    <input id="send-email-website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
                  </div>

                  <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    By selecting Send email, you’re requesting one test email. Your address won’t be shown publicly.
                  </p>

                  {message && (
                    <p role="alert" className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-rose-300' : 'text-rose-700'}`}>
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                      <span>{message}</span>
                    </p>
                  )}

                  <div className="flex justify-end gap-3 pt-1">
                    <button type="button" onClick={closeModal} disabled={isSending} className={`rounded-lg border px-4 py-2.5 text-sm font-medium disabled:opacity-50 ${theme === 'dark' ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800' : 'border-pink-200 text-zinc-700 hover:bg-pink-50'}`}>
                      Cancel
                    </button>
                    <button type="submit" disabled={isSending} className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60">
                      {isSending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      {isSending ? 'Sending…' : 'Send email'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
