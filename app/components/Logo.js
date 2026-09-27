'use client';

export default function Logo({ className = "h-10 text-current", variant = "full", light = false }) {
  if (variant === "monogram") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="NR Interiors Monogram"
      >
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <path
          d="M32 68V32L52 68V32"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52 32H64C69.5 32 73 35.5 73 40C73 44.5 69.5 48 64 48H52M62 48L72 68"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Full horizontal luxury lockup matching heanlyharris style
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 flex-shrink-0"
      >
        <rect
          x="2"
          y="2"
          width="50"
          height="50"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* N */}
        <path
          d="M14 38V16L27 38V16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* R */}
        <path
          d="M27 16H36C39.5 16 42 18.5 42 22C42 25.5 39.5 28 36 28H27M34 28L42 38"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-col text-left">
        <span
          className="font-serif-luxury text-lg tracking-[0.22em] font-normal uppercase leading-tight"
          style={{ letterSpacing: '0.24em' }}
        >
          nrinteriors
        </span>
        <span
          className="font-sans-clean text-[8.5px] uppercase tracking-[0.34em] opacity-75 font-light"
          style={{ letterSpacing: '0.34em' }}
        >
          London &amp; Surrey
        </span>
      </div>
    </div>
  );
}
