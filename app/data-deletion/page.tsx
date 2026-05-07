import type { Metadata } from 'next';
import DeletionForm from '@/components/DeletionForm';

export const metadata: Metadata = {
  title: 'Request Data Deletion | SkoConnect',
  description: 'Request deletion of your personal data from SkoConnect in compliance with data protection regulations.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-surface-50">
      {/* ── Minimal top bar ── */}
      <nav className="w-full border-b border-surface-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 text-ink-800 hover:text-brand-600 transition-colors" aria-label="Back to SkoConnect">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="#0F766E" />
              <path d="M7 9h14M7 14h10M7 19h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-semibold text-sm tracking-tight">SkoConnect</span>
          </a>
          <a
            href="/"
            className="text-sm text-ink-400 hover:text-brand-600 transition-colors"
          >
            ← Back to home
          </a>
        </div>
      </nav>

      {/* ── Form container ── */}
      <div className="max-w-lg mx-auto px-6 py-16 md:py-24">
        <DeletionForm
          type="data"
          heading="Request Data Deletion"
          description="Request the deletion of your personal data stored by SkoConnect. This includes profile information, activity logs, and any other personally identifiable data we hold."
          confirmLabel="I confirm I want to delete my personal data from SkoConnect."
          successTimeline="Your request has been received. We will process your data deletion request within 14 business days."
        />
      </div>

      {/* ── Footer info ── */}
      <footer className="border-t border-surface-200 bg-white mt-auto">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-body-sm text-ink-300">
            SkoConnect ·{' '}
            <a href="https://admin.skoconnect.com/privacy" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Privacy Policy
            </a>
            {' · '}
            <a href="https://admin.skoconnect.com/terms" className="text-brand-600 hover:text-brand-700 underline underline-offset-2">
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
