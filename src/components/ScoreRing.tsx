import type { ComponentPropsWithoutRef } from 'react';

export interface ScoreRingProps extends ComponentPropsWithoutRef<'div'> {
  score: number;
  maxScore?: number;
}

export const ScoreRing = ({ score, maxScore = 10, className, ...props }: ScoreRingProps) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div
      className={`relative flex h-[180px] w-[180px] items-center justify-center ${className ?? ''}`}
      {...props}
    >
      <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 180 180" aria-hidden="true">
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-accent-green)" />
            <stop offset="100%" stopColor="var(--color-accent-amber)" />
          </linearGradient>
        </defs>
        <circle
          cx="90"
          cy="90"
          r="88"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-border-primary"
        />
        <circle
          cx="90"
          cy="90"
          r="88"
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="4"
          strokeDasharray={`${percentage * 5.53} 553`}
          strokeLinecap="round"
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
      <div
        className="flex flex-col items-center"
        role="img"
        aria-label={`Score: ${score} out of ${maxScore}`}
      >
        <span className="font-mono text-5xl font-bold text-text-primary">{score}</span>
        <span className="font-mono text-base text-text-tertiary">/{maxScore}</span>
      </div>
    </div>
  );
};
