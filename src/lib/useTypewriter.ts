import { useEffect, useMemo, useState } from 'react'

export function useTypewriter(lines: readonly string[], wordDelay = 220, holdDelay = 4200) {
  const [lineIndex, setLineIndex] = useState(0)
  const words = useMemo(() => lines[lineIndex].split(' '), [lines, lineIndex])
  const [visibleCount, setVisibleCount] = useState(1)

  useEffect(() => {
    if (visibleCount < words.length) {
      const timer = window.setTimeout(
        () => setVisibleCount((c) => Math.min(c + 1, words.length)),
        wordDelay
      )
      return () => window.clearTimeout(timer)
    }

    const timer = window.setTimeout(() => {
      setLineIndex((i) => (i + 1) % lines.length)
      setVisibleCount(1)
    }, holdDelay)
    return () => window.clearTimeout(timer)
  }, [visibleCount, words.length, lines.length, lineIndex, wordDelay, holdDelay])

  return { words, visibleCount, currentLine: lines[lineIndex] }
}
