// Renders paragraphs made of { bold, text } segments (from data.js)
export function RichText({ paragraphs, className = '' }) {
  return (
    <div className={className}>
      {paragraphs.map((segments, i) => (
        <p key={i} className={i > 0 ? 'mt-4' : ''}>
          {segments.map((seg, j) =>
            seg.bold ? (
              <strong key={j} className="font-bold">
                {seg.text}
              </strong>
            ) : (
              <span key={j}>{seg.text}</span>
            )
          )}
        </p>
      ))}
    </div>
  )
}

// A small cog/gear glyph used as a recurring decorative motif
export function Gear({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <path
        fill={color}
        d="M50 0 56 4 62 0 66 6 73 3 75 10 82 9 82 16 89 17 87 24 93 27 89 33 95 38 89 42 93 48 86 50 93 52 89 58 95 62 89 67 93 73 87 76 89 83 82 84 82 91 75 90 73 97 66 94 62 100 56 96 50 100 44 96 38 100 34 94 27 97 25 90 18 91 18 84 11 83 13 76 7 73 11 67 5 62 11 58 7 52 14 50 7 48 11 42 5 38 11 33 7 27 13 24 11 17 18 16 18 9 25 10 27 3 34 6 38 0 44 4Z"
      />
      <circle cx="50" cy="50" r="20" fill="#d4c49e" />
    </svg>
  )
}
