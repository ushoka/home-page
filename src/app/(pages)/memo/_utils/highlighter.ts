import { createHighlighter } from 'shiki';
import { darkTheme, lightTheme } from '@/app/(pages)/memo/_utils/shikiThemes';

const HIGHLIGHTER_LANGUAGES = [
  'plaintext',
  'jsx',
  'tsx',
  'html',
  'css',
  'markdown',
  'diff',
] satisfies Parameters<typeof createHighlighter>[0]['langs'];

type HighLightLanguage = (typeof HIGHLIGHTER_LANGUAGES)[number];

const highlighter = await createHighlighter({
  themes: [darkTheme, lightTheme],
  langs: HIGHLIGHTER_LANGUAGES,
});

function getHighlighterLanguage(lang: string): HighLightLanguage {
  switch (lang) {
    case 'javascript':
      return 'jsx';
    case 'typescript':
      return 'tsx';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'diff':
      return 'diff';
    default:
      return 'plaintext';
  }
}

export function highlightCodeToHtml(text: string, language: string) {
  return highlighter.codeToHtml(text, {
    lang: getHighlighterLanguage(language),
    defaultColor: false,
    themes: {
      dark: darkTheme.name,
      light: lightTheme.name,
    },
    transformers: [
      {
        name: 'keyboard-scroll',
        pre(node) {
          node.properties.tabindex = '0';
        },
      },
    ],
  });
}
