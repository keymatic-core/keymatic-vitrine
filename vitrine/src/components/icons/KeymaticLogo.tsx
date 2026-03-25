export function KeymaticIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      <defs>
        <linearGradient id="km-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Key body */}
      <rect x="2" y="8" width="14" height="16" rx="4" fill="url(#km-grad)" />
      <circle cx="9" cy="16" r="3" fill="#09090b" opacity="0.3" />
      <circle cx="9" cy="16" r="1.5" fill="white" opacity="0.9" />
      {/* Key teeth (digital) */}
      <rect x="16" y="12" width="6" height="3" rx="1" fill="url(#km-grad)" />
      <rect x="16" y="17" width="10" height="3" rx="1" fill="url(#km-grad)" />
      <rect x="22" y="12" width="4" height="3" rx="1" fill="url(#km-grad)" opacity="0.7" />
      {/* Spark */}
      <circle cx="28" cy="13.5" r="2" fill="#a855f7" opacity="0.8" />
      <circle cx="28" cy="13.5" r="1" fill="white" />
    </svg>
  );
}
