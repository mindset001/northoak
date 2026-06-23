export default function Logomark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-azure-500 via-azure-600 to-ink-800 ring-1 ring-white/10 ${className ?? ""}`}
    >
      <span className="font-serif-display text-lg font-bold text-gold-300">N</span>
    </span>
  );
}
