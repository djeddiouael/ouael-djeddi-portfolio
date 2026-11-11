import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-6 h-6", size = 24 }: { name: string; className?: string; size?: number }) {
  const norm = name.toLowerCase();

  switch (norm) {
    case "python":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" className={className}>
          <path
            d="M11.91 2c-5.4 0-5.06 2.34-5.06 2.34l.01 2.42h5.13v.73H4.75S2 7.18 2 12.62c0 5.43 2.4 5.25 2.4 5.25h1.43v-2.02s-.08-2.4 2.37-2.4h5.12s2.3.04 2.3-2.28V4.32S16.03 2 11.91 2zm-2.78 1.54a.8.8 0 110 1.6.8.8 0 010-1.6z"
            fill="currentColor"
            className="text-blue-400"
          />
          <path
            d="M12.09 22c5.4 0 5.06-2.34 5.06-2.34l-.01-2.42h-5.13v-.73h7.24S22 16.82 22 11.38c0-5.43-2.4-5.25-2.4-5.25h-1.43v2.02s.08 2.4-2.37 2.4h-5.12s-2.3-.04-2.3 2.28v6.85S7.97 22 12.09 22zm2.78-1.54a.8.8 0 110-1.6.8.8 0 010 1.6z"
            fill="currentColor"
            className="text-yellow-400"
          />
        </svg>
      );

    case "pytorch":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M13.5 3L11 6.5l2 2-5 5a6 6 0 108.5 0l-3-3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15.5" cy="4.5" r="1.5" fill="currentColor" />
        </svg>
      );

    case "tensorflow":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22V12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 7l-9 5L3 7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 9.5l4.5 2.5 4.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "scikitlearn":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="7" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="17" r="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 9.5L14.5 14.5M14.5 9.5L9.5 14.5" strokeLinecap="round" />
        </svg>
      );

    case "numpy":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" strokeLinecap="round" />
        </svg>
      );

    case "pandas":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 4h4v6H4zM10 8h4v12h-4zM16 12h4v8h-4zM4 14h4v6H4z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "vision":
    case "computer vision":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 9v1m0 4v1m-3-3h1m4 0h1" strokeLinecap="round" />
        </svg>
      );

    case "react":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(30 12 12)" strokeLinecap="round" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(90 12 12)" strokeLinecap="round" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(150 12 12)" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="9.5" strokeLinecap="round" />
          <path d="M9 8v8M15 8v4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 8.5l7 8.5" strokeLinecap="round" />
        </svg>
      );

    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M12 2.5l8 4.6v9.2l-8 4.6-8-4.6V7.1l8-4.6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7v5l4 2.3M12 12l-4 2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path
            d="M6 9c1.5-2 3.5-3 6-3 3.5 0 5 2 6.5 3.5C20 11 21.5 12 23 12c-1.5 2-3.5 3-6 3-3.5 0-5-2-6.5-3.5C9 10 7.5 9 6 9z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 15c1.5-2 3.5-3 6-3 3.5 0 5 2 6.5 3.5C15 17 16.5 18 18 18c-1.5 2-3.5 3-6 3-3.5 0-5-2-6.5-3.5C4 16 2.5 15 1 15z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "typescript":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 9h6M10 9v8M14 13.5c.5-.5 1.5-.7 2.2-.3.7.4.8 1.2.3 1.8-.8 1-2.5.5-2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "javascript":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 13.5v2a1.5 1.5 0 01-3 0M14 13.5c.5-.5 1.5-.7 2.2-.3.7.4.8 1.2.3 1.8-.8 1-2.5.5-2.5 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "html":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7H8l.5 5h7l-.5 5-3 1-3-1-.2-2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "css":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 7.5h-9l.4 4.5h8l-.5 5.2-3.4 1-3.4-1-.2-2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M18 11.5a3 3 0 100-6 3 3 0 000 6zM6 18.5a3 3 0 100-6 3 3 0 000 6zM6 5.5a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5v4M8.5 14l7-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case "vscode":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M16 2l5 3v14l-5 3L8 15l8-3V2z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 8.5l5 3.5-5 3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "docker":
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <path d="M4 12h16c0 4-3 7-8 7s-8-3-8-7z" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="5" y="8" width="2.5" height="2.5" rx="0.5" />
          <rect x="8.5" y="8" width="2.5" height="2.5" rx="0.5" />
          <rect x="12" y="8" width="2.5" height="2.5" rx="0.5" />
          <rect x="8.5" y="5" width="2.5" height="2.5" rx="0.5" />
          <rect x="12" y="5" width="2.5" height="2.5" rx="0.5" />
          <path d="M18.5 11c1-1 2.5-.5 3 0" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" strokeLinecap="round" />
        </svg>
      );
  }
}
