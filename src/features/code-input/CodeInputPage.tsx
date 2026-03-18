'use client';

import { CodeEditor, Navbar, StatsFooter } from '@/components';
import {
  ActionsBar,
  HeroTitle,
  LeaderboardPreview,
  RoastToggle,
  SubmitButton,
  useCodeInput,
  useRoastMode,
} from '@/features/code-input';

export const CodeInputPage = () => {
  const { code, visibleLines, setCode, isEmpty } = useCodeInput();
  const { isRoastMode, toggle } = useRoastMode();

  const handleSubmit = () => {
    console.log('Submitting code:', code, 'Roast mode:', isRoastMode);
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg-page">
      <Navbar logoText="devroast" links={[{ label: 'leaderboard', href: '#' }]} />

      <main className="flex flex-1 flex-col gap-8 pt-20 pb-0 px-10">
        <div className="mx-auto flex w-full max-w-[780px] flex-col gap-8">
          <HeroTitle />

          <CodeEditor
            filename="code.js"
            lineCount={Math.max(code.split('\n').length, visibleLines)}
            state={isEmpty ? 'default' : 'focus'}
            value={code}
            onChange={setCode}
            placeholder="// paste your code here..."
            className="h-[360px]"
          />

          <ActionsBar
            left={<RoastToggle checked={isRoastMode} onChange={toggle} />}
            right={<SubmitButton onClick={handleSubmit} disabled={isEmpty} />}
          />

          <div className="flex justify-center">
            <StatsFooter totalRoasted={2847} avgScore={4.2} />
          </div>
        </div>

        <div className="h-16" />

        <div className="mx-auto mb-16 flex w-full max-w-[960px]">
          <LeaderboardPreview />
        </div>
      </main>
    </div>
  );
};
