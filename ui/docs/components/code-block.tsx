"use client";

import * as React from "react";
import { highlight, type LanguageName } from "sugar-high";
import { Button, Card } from "@noarka/ui";
import { CheckCircleLinearIcon, CopyLinearIcon, AltArrowDownLinearIcon, DocumentTextLinearIcon } from "@solar-icons/react";

const LANG_MAP: Record<string, LanguageName> = {
  bash: "shell",
  css: "css",
  tsx: "typescript",
};

export function highlightHtml(code: string, lang: string) {
  const raw = highlight(code, { lang: LANG_MAP[lang] ?? "plaintext" });
  // Collapse whitespace between line spans. Under `white-space: pre` those
  // newlines would otherwise render as extra blank lines between rows.
  return raw
    .replace(/<\/span>\s*<span class="sh__line">/g, '</span><span class="sh__line">')
    .trim();
}

export function CodeContent({ code, lang, plain = false }: { code: string; lang: string; plain?: boolean }) {
  const html = React.useMemo(() => {
    if (plain) {
      const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return escaped
        .split("\n")
        .map((line) => `<span class="sh__line">${line}</span>`)
        .join("");
    }
    return highlightHtml(code, lang);
  }, [code, lang, plain]);

  return (
    <div className="flex overflow-x-auto">
      <div
        aria-hidden="true"
        className="codeblock-gutter sticky left-0 z-10 shrink-0 bg-card/60 backdrop-blur-sm py-4 pr-5 pl-4 text-right select-none"
      >
        {Array.from({ length: code.split("\n").length }, (_, i) => (
          <span key={i} className="block text-[#858585]">
            {i + 1}
          </span>
        ))}
      </div>
      <pre className="codeblock min-w-0 flex-1 overflow-visible py-4 pr-4">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

export function CodeBlock({ code, lang = "bash", filename, collapsible = false }: { code: string; lang?: string; filename?: string; collapsible?: boolean }) {
  const [copied, setCopied] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const lineCount = code.split("\n").length;
  const enabled = collapsible && lineCount > 14;
  const collapsed = enabled && !expanded;

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  function toggle() {
    setExpanded(!expanded);
  }

  return (
    <Card className="gap-0 overflow-hidden border bg-card p-0">
      <div className="flex items-center justify-between border-b px-4 py-2">
        {filename ? (
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <DocumentTextLinearIcon size={14} />
            {filename}
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">{lang}</span>
        )}
        <div className="flex items-center gap-1">
          {enabled && (
            <button
              onClick={toggle}
              className="rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {expanded ? "Collapse" : "Expand"}
            </button>
          )}
          <Button variant="ghost" size="icon-xs" onClick={copy} aria-label="Copy code">
            {copied ? (
              <CheckCircleLinearIcon size={16} className="text-success" />
            ) : (
              <CopyLinearIcon size={16} />
            )}
          </Button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`transition-[max-height] duration-300 ease-in-out ${
            collapsed ? "max-h-[320px] overflow-hidden" : "max-h-[5000px]"
          }`}
        >
          <CodeContent code={code} lang={lang} />
        </div>
        {enabled && collapsed && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/80 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-4 flex justify-center">
              <button
                onClick={toggle}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Expand
                <AltArrowDownLinearIcon size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </Card>
  );
}
