import Image from "next/image";

export default function Logomark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 ring-1 ring-white/20 ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.jpeg"
        alt="Northoak Global Investment Limited"
        width={size}
        height={size}
        className="h-full w-full object-contain"
        priority
      />
    </span>
  );
}
