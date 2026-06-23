export default function AmbientBlobs({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}>
      <div className="animate-blob absolute -left-32 top-0 h-96 w-96 rounded-full bg-azure-600/30 blur-3xl" />
      <div className="animate-blob absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl [animation-delay:4s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-ink-600/40 blur-3xl [animation-delay:8s]" />
    </div>
  );
}
