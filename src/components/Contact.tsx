import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { profileConfig } from '../config/profile';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate validation and generate mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 600);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hello ${profileConfig.fullName},\n\n${formData.message || ''}\n\nFrom: ${formData.name || ''} (${formData.email || ''})`
    );
    window.location.href = `mailto:${profileConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const copyEmailAddress = () => {
    navigator.clipboard.writeText(profileConfig.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/60 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have an idea? Let's connect.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            I'm always interested in learning, sharing ideas, and discussing technology. Feel free to
            reach out using the contact details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div
              className={`p-5 rounded-xl border transition-colors ${
                theme === 'dark' ? 'bg-[#17171D] border-[#27272A]' : 'bg-white border-zinc-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span>DIRECT EMAIL</span>
                </span>
                <button
                  onClick={copyEmailAddress}
                  className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${profileConfig.contact.email}`}
                className="font-medium text-sm text-violet-400 hover:underline block break-all"
              >
                {profileConfig.contact.email}
              </a>

              {profileConfig.contact.isPlaceholderEmail && (
                <p className="text-[11px] text-zinc-500 mt-2 leading-relaxed">
                  Notice: Replace placeholder with your real email in <code className="font-mono text-violet-400">src/config/profile.ts</code>.
                </p>
              )}
            </div>

            {/* Location & Social */}
            <div
              className={`p-5 rounded-xl border space-y-4 ${
                theme === 'dark' ? 'bg-[#17171D] border-[#27272A]' : 'bg-white border-zinc-200'
              }`}
            >
              <div>
                <span className="text-xs font-semibold text-zinc-400 flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>GENERAL LOCATION</span>
                </span>
                <span className="text-sm font-medium text-zinc-200">
                  {profileConfig.location.city}, {profileConfig.location.country}
                </span>
              </div>

              <div className="pt-3 border-t border-zinc-800/60 dark:border-zinc-800">
                <span className="text-xs font-semibold text-zinc-400 block mb-2">
                  DEVELOPER PROFILES:
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={profileConfig.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href={profileConfig.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-xs text-zinc-400 space-y-1">
              <span className="font-semibold text-zinc-300 block">Form Policy:</span>
              <p>
                In client-side mode, you can directly launch your native mail client or integrate an email
                API service (such as Resend) using environment variables.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border ${
              theme === 'dark' ? 'bg-[#17171D] border-[#27272A]' : 'bg-white border-zinc-200'
            }`}
          >
            {submissionSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-800/80 mx-auto flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-100">Message Ready!</h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-zinc-200">{formData.name}</strong>. Because this is a client-side demo without an external email server, you can dispatch this draft straight to your email client.
                </p>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handleMailtoDirect}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-medium rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 transition-colors"
                  >
                    Write Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 ${
                        errors.name
                          ? 'border-rose-500 bg-rose-950/20 text-rose-200'
                          : theme === 'dark'
                          ? 'bg-[#111116] border-[#27272A] text-zinc-200'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300">
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 ${
                        errors.email
                          ? 'border-rose-500 bg-rose-950/20 text-rose-200'
                          : theme === 'dark'
                          ? 'bg-[#111116] border-[#27272A] text-zinc-200'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="block text-xs font-medium text-zinc-300">
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Collaboration, idea, or project question"
                    className={`w-full px-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 ${
                      errors.subject
                        ? 'border-rose-500 bg-rose-950/20 text-rose-200'
                        : theme === 'dark'
                        ? 'bg-[#111116] border-[#27272A] text-zinc-200'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Alex, I came across your portfolio and would like to talk about..."
                    className={`w-full px-3 py-2 text-xs rounded-lg border transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none ${
                      errors.message
                        ? 'border-rose-500 bg-rose-950/20 text-rose-200'
                        : theme === 'dark'
                        ? 'bg-[#111116] border-[#27272A] text-zinc-200'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Preparing...' : 'Submit Message'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleMailtoDirect}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium rounded-lg border border-zinc-700 hover:bg-zinc-800 text-zinc-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-violet-400" />
                    <span>Send via Email Client</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
