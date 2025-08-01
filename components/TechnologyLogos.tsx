"use client"

interface TechnologyLogosProps {
  technology: string
  className?: string
  size?: number
}

export default function TechnologyLogos({ technology, className = "", size = 24 }: TechnologyLogosProps) {
  const logos: { [key: string]: JSX.Element } = {
    Python: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#3776AB"
          d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#3776AB"
          d="M8.5 7.5c-.828 0-1.5.672-1.5 1.5v6c0 .828.672 1.5 1.5 1.5h7c.828 0 1.5-.672 1.5-1.5V9c0-.828-.672-1.5-1.5-1.5h-7zm0 2h7v6h-7v-6z"
        />
        <path
          fill="#FFD43B"
          d="M9.5 8.5c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5V9c0-.276-.224-.5-.5-.5h-5z"
        />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#61DAFB"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#61DAFB"
          d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"
        />
        <path
          fill="#61DAFB"
          d="M12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 2c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"
        />
      </svg>
    ),
    TensorFlow: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#FF6F00"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#FF6F00"
          d="M7 7h10v10H7V7zm2 2v6h6V9H9z"
        />
        <path
          fill="#FF6F00"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    PyTorch: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#EE4C2C"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#EE4C2C"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#EE4C2C"
          d="M10 10h4v4h-4v-4z"
        />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#F7DF1E"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#F7DF1E"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#F7DF1E"
          d="M10 10h4v4h-4v-4z"
        />
      </svg>
    ),
    AWS: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#FF9900"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#FF9900"
          d="M7 7h10v10H7V7zm2 2v6h6V9H9z"
        />
        <path
          fill="#FF9900"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    GCP: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#4285F4"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#4285F4"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#4285F4"
          d="M10 10h4v4h-4v-4z"
        />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#339933"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#339933"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#339933"
          d="M10 10h4v4h-4v-4z"
        />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#2496ED"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#2496ED"
          d="M7 7h10v10H7V7zm2 2v6h6V9H9z"
        />
        <path
          fill="#2496ED"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#47A248"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#47A248"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#47A248"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    HuggingFace: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#FF6B6B"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#FF6B6B"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#FF6B6B"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    GitHub: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#181717"
          d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        />
      </svg>
    ),
    StackOverflow: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#F58025"
          d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.538 8.827 1.746-1.294L15.751 0z"
        />
      </svg>
    ),
    Pandas: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#130654"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#130654"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#130654"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    NumPy: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#4DABCF"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#4DABCF"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#4DABCF"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    "Scikit-Learn": (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#F7931E"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#F7931E"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#F7931E"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    HTML: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#E34F26"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#E34F26"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#E34F26"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    CSS: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#1572B6"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#1572B6"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#1572B6"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#000000"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#000000"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#000000"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#3178C6"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#3178C6"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#3178C6"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    Ubuntu: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#E95420"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#E95420"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#E95420"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    Nginx: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#009639"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#009639"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#009639"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    FastAPI: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#009688"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#009688"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#009688"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    OpenCV: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#5C3EE8"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#5C3EE8"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#5C3EE8"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    Apache: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#D22128"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#D22128"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#D22128"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    Airflow: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#017CEE"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#017CEE"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#017CEE"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#FFCA28"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#FFCA28"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#FFCA28"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    "React Native": (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#61DAFB"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#61DAFB"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#61DAFB"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    "TensorFlow Lite": (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#FF6F00"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#FF6F00"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#FF6F00"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
        <path
          fill="#336791"
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
        />
        <path
          fill="#336791"
          d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
        />
        <path
          fill="#336791"
          d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
        />
      </svg>
    ),
  }

  return logos[technology] || (
    <svg viewBox="0 0 24 24" className={className} width={size} height={size}>
      <path
        fill="#6B7280"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"
      />
      <path
        fill="#6B7280"
        d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z"
      />
      <path
        fill="#6B7280"
        d="M9 9h6v6H9V9zm1 1v4h4v-4h-4z"
      />
    </svg>
  )
} 