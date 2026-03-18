import {
  CodeBlock,
  CodeEditor,
  HeroSection,
  LeaderboardEntry,
  Logo,
  RoastQuote,
  ScoreDisplay,
  ScoreRing,
  StatsFooter,
  TableRow,
  TableRowCell,
} from '@/components';
import { AnalysisCard } from '@/components/AnalysisCard';
import {
  Badge,
  Button,
  Caption,
  Code,
  Description,
  DiffLine,
  Heading,
  SectionTitle,
  Toggle,
} from '@/components/ui';

export default function ComponentsPage() {
  const sampleCode = `function calculateTotal() {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}`;

  return (
    <div className="min-h-screen bg-bg-page p-8">
      <div className="mx-auto max-w-4xl space-y-16">
        <section className="space-y-5">
          <SectionTitle label="logo" />

          <div className="flex items-center gap-8">
            <Logo size="sm" />
            <Logo size="md" />
            <Logo size="lg" />
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="stats_footer" />

          <StatsFooter totalRoasted={2847} avgScore={4.2} />
        </section>

        <section className="space-y-5">
          <SectionTitle label="hero_section" />

          <HeroSection
            title="shame_leaderboard"
            subtitle="// the most roasted code on the internet"
          />
        </section>

        <section className="space-y-5">
          <SectionTitle label="typography" />

          <div className="space-y-5">
            <Heading>paste your code. get roasted.</Heading>

            <SectionTitle label="detailed_analysis" className="mt-6" />

            <Description>description text sample</Description>

            <Caption>lang: javascript · 7 lines</Caption>

            <br />

            <Code className="text-syn-type">function calculateTotal()</Code>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="buttons" />

          <div className="flex items-center gap-4">
            <Button variant="primary">$ roast_my_code</Button>
            <Button variant="secondary">$ share_roast</Button>
            <Button variant="link">$ view_all &gt;&gt;</Button>
            <Button variant="primary" disabled>
              disabled
            </Button>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="toggle" />

          <div className="flex items-center gap-8">
            <Toggle label="roast mode" checked={true} />
            <Toggle label="roast mode" checked={false} />
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="badge_status" />

          <div className="flex items-center gap-6">
            <Badge variant="critical">critical</Badge>
            <Badge variant="warning">warning</Badge>
            <Badge variant="good">good</Badge>
            <Badge variant="needs_serious_help">needs_serious_help</Badge>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="cards" />

          <AnalysisCard
            variant="critical"
            title="using var instead of const/let"
            description="the var keyword is function-scoped rather than block-scoped, which can lead to unexpected behavior and bugs. modern javascript uses const for immutable bindings and let for mutable ones."
          />
        </section>

        <section className="space-y-5">
          <SectionTitle label="code_block" />

          <CodeBlock code={sampleCode} language="javascript" filename="calculate.js" />
        </section>

        <section className="space-y-5">
          <SectionTitle label="code_editor" />

          <div className="space-y-8">
            <div>
              <p className="mb-2 font-mono text-xs text-text-tertiary">default</p>
              <CodeEditor filename="script.js" lineCount={5} state="default" />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-text-tertiary">focus</p>
              <CodeEditor filename="script.js" lineCount={5} state="focus" />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-text-tertiary">error</p>
              <CodeEditor filename="script.js" lineCount={5} state="error" />
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-text-tertiary">disabled</p>
              <CodeEditor filename="script.js" lineCount={5} state="disabled" />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="diff_line" />

          <div className="w-[560px] overflow-hidden rounded-none border border-border-primary">
            <DiffLine type="removed" prefix="-" code="var total = 0;" />
            <DiffLine type="added" prefix="+" code="const total = 0;" />
            <DiffLine type="context" prefix=" " code="for (let i = 0; i < items.length; i++) {" />
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="table_row" />

          <div className="w-full overflow-hidden rounded-none border border-border-primary">
            <TableRow>
              <TableRowCell className="w-10 text-text-tertiary">#1</TableRowCell>
              <TableRowCell className="w-14 font-bold text-accent-red">2.1</TableRowCell>
              <TableRowCell className="flex-1 truncate text-text-secondary">
                function calculateTotal(items) {'{'} var total = 0; ...
              </TableRowCell>
              <TableRowCell className="w-24 text-right text-text-tertiary">javascript</TableRowCell>
            </TableRow>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="leaderboard_entry" />

          <div className="w-full overflow-hidden rounded-none border border-border-primary">
            <LeaderboardEntry>
              <LeaderboardEntry.Rank>#1</LeaderboardEntry.Rank>
              <LeaderboardEntry.Score>2.1</LeaderboardEntry.Score>
              <LeaderboardEntry.Code>
                function calculateTotal(items) {'{'} var total = 0; ...
              </LeaderboardEntry.Code>
              <LeaderboardEntry.Language>javascript</LeaderboardEntry.Language>
            </LeaderboardEntry>
            <LeaderboardEntry>
              <LeaderboardEntry.Rank>#2</LeaderboardEntry.Rank>
              <LeaderboardEntry.Score>3.5</LeaderboardEntry.Score>
              <LeaderboardEntry.Code>
                const handleClick = () ={'>'} console.log('click');
              </LeaderboardEntry.Code>
              <LeaderboardEntry.Language>javascript</LeaderboardEntry.Language>
            </LeaderboardEntry>
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="score_ring" />

          <ScoreRing score={3.5} maxScore={10} />
        </section>

        <section className="space-y-5">
          <SectionTitle label="score_display" />

          <div className="flex items-center gap-8">
            <ScoreDisplay score={2.5} />
            <ScoreDisplay score={5.0} />
            <ScoreDisplay score={8.5} />
          </div>
        </section>

        <section className="space-y-5">
          <SectionTitle label="roast_quote" />

          <RoastQuote quote="this code looks like it was written during a power outage... in 2005." />
        </section>
      </div>
    </div>
  );
}
