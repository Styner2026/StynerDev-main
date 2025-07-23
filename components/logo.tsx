"use client"

interface LogoProps {
  size?: number
  color?: string
  textColor?: string
  withText?: boolean
  className?: string
}

export default function Logo({
  size = 32,
  color = "#ff6347", // Default to the site's primary color
  textColor = "currentColor",
  withText = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div style={{ width: size * 1.2, height: size * 1.2 }}>
        <svg
          width={size * 1.2}
          height={size * 1.2}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          {/* Elegant background circle with gradient */}
          <circle cx="24" cy="24" r="22" fill="white" stroke="url(#logoGradient)" strokeWidth="2.5" />

          {/* Stylized elegant S */}
          <path
            d="M32 16C32 16 26 16 22 16C18 16 16 18 16 22C16 26 18 28 22 28C26 28 30 28 30 28C32 28 34 30 34 32C34 36 32 38 28 38C24 38 16 38 16 38"
            stroke="url(#logoGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Decorative flourish elements */}
          <path
            d="M14 14C12 16 10 20 10 24C10 28 12 32 14 34"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="1 3"
          />

          <path
            d="M34 14C36 16 38 20 38 24C38 28 36 32 34 34"
            stroke="url(#logoGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="1 3"
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="logoGradient" x1="10" y1="10" x2="38" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff6347" />
              <stop offset="1" stopColor="#ff8c7a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {withText && (
        <span
          className="font-['Serif_Italic'] italic font-medium text-4xl md:text-5xl tracking-wide"
          style={{
            color: textColor,
            textShadow: "1px 1px 2px rgba(0,0,0,0.15), 0px 0px 1px rgba(0,0,0,0.1)",
          }}
        >
          Styner<span className="text-3xl md:text-4xl" style={{ marginLeft: "0.05em" }}>.Dev</span>
        </span>
      )}
    </div>
  )
}
