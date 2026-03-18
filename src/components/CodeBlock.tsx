import { codeToHtml } from 'shiki';

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({ code, language = 'javascript', filename }: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: 'github-dark-default',
  });

  return (
    <div className="w-[560px] overflow-hidden rounded-none border border-border-primary bg-bg-input font-mono text-sm">
      <div className="flex h-10 items-center gap-3 border-b border-border-primary px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-red" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-green" />
        <span className="flex-1" />
        {filename && <span className="text-xs text-text-tertiary">{filename}</span>}
      </div>
      <div
        className="[&_pre]:!bg-transparent [&_pre]:p-3 [&_pre]:overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
