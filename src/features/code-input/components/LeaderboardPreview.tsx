import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { TableRow, TableRowCell } from '@/components';
import { cn } from '@/lib/utils';
import type { LeaderboardEntryData } from '../types';

export interface LeaderboardPreviewProps extends ComponentPropsWithoutRef<'div'> {
  entries?: LeaderboardEntryData[];
  totalCount?: number;
}

const MOCK_ENTRIES: LeaderboardEntryData[] = [
  {
    rank: 1,
    score: 1.8,
    codePreview: 'function calculateTotal(items) { var total = 0; ...',
    language: 'javascript',
  },
  {
    rank: 2,
    score: 2.1,
    codePreview:
      'const fetchData = async () => { await new Promise(resolve => setTimeout(resolve, 5000)); ...',
    language: 'typescript',
  },
  {
    rank: 3,
    score: 2.4,
    codePreview: 'for (let i = 0; i < 1000000; i++) { console.log(i); ...',
    language: 'python',
  },
];

export const LeaderboardPreview = ({
  entries = MOCK_ENTRIES,
  totalCount = 2847,
  className,
  ...props
}: LeaderboardPreviewProps) => {
  return (
    <div className={cn('flex w-full flex-col gap-6', className)} {...props}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-accent-green">{'//'}</span>
          <span className="font-mono text-sm font-bold text-text-primary">shame_leaderboard</span>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 border border-border-primary px-3 py-1.5 font-mono text-xs text-text-secondary hover:border-border-focus"
        >
          {'$ view_all >>'}
        </Link>
      </div>

      <p className="font-mono text-sm text-text-tertiary">
        {'// the worst code on the internet, ranked by shame'}
      </p>

      <div className="w-full overflow-hidden border border-border-primary">
        <div className="flex w-full bg-bg-surface px-5 py-2.5">
          <TableRowCell className="w-12 shrink-0 text-text-tertiary">rank</TableRowCell>
          <TableRowCell className="w-16 shrink-0 text-text-tertiary">score</TableRowCell>
          <TableRowCell className="flex-1 text-text-tertiary">code</TableRowCell>
          <TableRowCell className="w-24 shrink-0 text-right text-text-tertiary">
            language
          </TableRowCell>
        </div>

        {entries.map((entry) => (
          <TableRow key={entry.rank}>
            <TableRowCell className="w-12 shrink-0 text-text-tertiary">#{entry.rank}</TableRowCell>
            <TableRowCell className="w-16 shrink-0 font-bold text-accent-red">
              {entry.score.toFixed(1)}
            </TableRowCell>
            <TableRowCell className="flex-1 truncate text-text-secondary">
              {entry.codePreview}
            </TableRowCell>
            <TableRowCell className="w-24 shrink-0 text-right text-text-tertiary">
              {entry.language}
            </TableRowCell>
          </TableRow>
        ))}
      </div>

      <p className="text-center font-mono text-xs text-text-tertiary">
        {'showing top 3 of '}
        {totalCount.toLocaleString()}
        {' · view full leaderboard >>'}
      </p>
    </div>
  );
};
