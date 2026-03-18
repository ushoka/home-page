import type { ThemeRegistration } from 'shiki';

const darkColors = {
  background: 'var(--color-gray-950)',
  foreground: 'var(--color-gray-200)',
  foregroundStrong: 'var(--color-gray-50)',
  surface: 'var(--color-gray-900)',
  muted: 'var(--color-gray-500)',
  blue: 'var(--color-blue-300)',
  blueSoft: 'var(--color-blue-200)',
  green: 'var(--color-green-300)',
  orange: 'var(--color-orange-400)',
  violet: 'var(--color-violet-300)',
  rose: 'var(--color-rose-400)',
  red: 'var(--color-red-300)',
  deletedBackground: 'var(--color-red-950)',
  insertedBackground: 'var(--color-green-950)',
  changedBackground: 'var(--color-orange-950)',
} as const;

const lightColors = {
  background: 'var(--color-white)',
  foreground: 'var(--color-gray-900)',
  foregroundSoft: 'var(--color-gray-50)',
  overlay: 'var(--color-gray-100)',
  muted: 'var(--color-gray-500)',
  mutedStrong: 'var(--color-gray-600)',
  blue: 'var(--color-blue-700)',
  blueDeep: 'var(--color-blue-900)',
  green: 'var(--color-green-800)',
  orange: 'var(--color-orange-800)',
  violet: 'var(--color-violet-600)',
  red: 'var(--color-red-600)',
  rose: 'var(--color-rose-800)',
  deletedBackground: 'var(--color-rose-50)',
  insertedBackground: 'var(--color-green-100)',
  changedBackground: 'var(--color-orange-100)',
} as const;

export const darkTheme: ThemeRegistration = {
  name: 'dark',
  type: 'dark',
  colors: {
    'editor.background': darkColors.background,
    'editor.foreground': darkColors.foreground,
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: darkColors.muted },
    },
    {
      scope: ['constant.other.placeholder', 'constant.character'],
      settings: { foreground: darkColors.rose },
    },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.other.constant',
        'variable.other.enummember',
        'variable.language',
        'entity',
      ],
      settings: { foreground: darkColors.blue },
    },
    {
      scope: ['entity.name', 'meta.export.default', 'meta.definition.variable'],
      settings: { foreground: darkColors.orange },
    },
    {
      scope: [
        'variable.parameter.function',
        'meta.jsx.children',
        'meta.block',
        'meta.tag.attributes',
        'entity.name.constant',
        'meta.object.member',
        'meta.embedded.expression',
      ],
      settings: { foreground: darkColors.foreground },
    },
    {
      scope: 'entity.name.function',
      settings: { foreground: darkColors.violet },
    },
    {
      scope: ['entity.name.tag', 'support.class.component'],
      settings: { foreground: darkColors.green },
    },
    { scope: 'keyword', settings: { foreground: darkColors.rose } },
    {
      scope: ['storage', 'storage.type'],
      settings: { foreground: darkColors.rose },
    },
    {
      scope: [
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ],
      settings: { foreground: darkColors.foreground },
    },
    {
      scope: ['string', 'string punctuation.section.embedded source'],
      settings: { foreground: darkColors.blueSoft },
    },
    { scope: 'support', settings: { foreground: darkColors.blue } },
    {
      scope: 'meta.property-name',
      settings: { foreground: darkColors.blue },
    },
    { scope: 'variable', settings: { foreground: darkColors.orange } },
    {
      scope: 'variable.other',
      settings: { foreground: darkColors.foreground },
    },
    {
      scope: [
        'invalid.broken',
        'invalid.deprecated',
        'invalid.illegal',
        'invalid.unimplemented',
        'message.error',
      ],
      settings: { foreground: darkColors.red },
    },
    {
      scope: 'carriage-return',
      settings: {
        background: darkColors.rose,
        foreground: darkColors.foregroundStrong,
      },
    },
    {
      scope: 'string variable',
      settings: { foreground: darkColors.blue },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: { foreground: darkColors.blueSoft },
    },
    {
      scope: [
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition',
      ],
      settings: { foreground: darkColors.blueSoft },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: { foreground: darkColors.green },
    },
    {
      scope: ['support.constant', 'support.variable', 'meta.module-reference'],
      settings: { foreground: darkColors.blue },
    },
    {
      scope: 'support.type.property-name.json',
      settings: { foreground: darkColors.green },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: { foreground: darkColors.orange },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name', 'markup.inline.raw'],
      settings: { foreground: darkColors.blue },
    },
    { scope: 'markup.quote', settings: { foreground: darkColors.green } },
    {
      scope: ['markup.italic', 'markup.bold'],
      settings: { foreground: darkColors.foreground },
    },
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        background: darkColors.deletedBackground,
        foreground: darkColors.red,
      },
    },
    {
      scope: 'punctuation.section.embedded',
      settings: { foreground: darkColors.rose },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: darkColors.insertedBackground,
        foreground: darkColors.green,
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: darkColors.changedBackground,
        foreground: darkColors.orange,
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        background: darkColors.blue,
        foreground: darkColors.surface,
      },
    },
    {
      scope: ['meta.diff.range', 'entity.name.function'],
      settings: { foreground: darkColors.violet },
    },
    {
      scope: ['meta.diff.header', 'meta.separator', 'meta.output'],
      settings: { foreground: darkColors.blue },
    },
    {
      scope: [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ],
      settings: { foreground: darkColors.muted },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: { foreground: darkColors.red },
    },
    {
      scope: ['constant.other.reference.link', 'string.other.link'],
      settings: { foreground: darkColors.blueSoft },
    },
  ],
};

export const lightTheme: ThemeRegistration = {
  name: 'light',
  type: 'light',
  colors: {
    'editor.background': lightColors.background,
    'editor.foreground': lightColors.foreground,
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
      settings: { foreground: lightColors.muted },
    },
    {
      scope: ['constant.other.placeholder', 'constant.character'],
      settings: { foreground: lightColors.red },
    },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.other.constant',
        'variable.other.enummember',
        'variable.language',
        'entity',
      ],
      settings: { foreground: lightColors.blue },
    },
    {
      scope: ['entity.name', 'meta.export.default', 'meta.definition.variable'],
      settings: { foreground: lightColors.orange },
    },
    {
      scope: [
        'variable.parameter.function',
        'meta.jsx.children',
        'meta.block',
        'meta.tag.attributes',
        'entity.name.constant',
        'meta.object.member',
        'meta.embedded.expression',
      ],
      settings: { foreground: lightColors.foreground },
    },
    {
      scope: 'entity.name.function',
      settings: { foreground: lightColors.violet },
    },
    {
      scope: ['entity.name.tag', 'support.class.component'],
      settings: { foreground: lightColors.green },
    },
    { scope: 'keyword', settings: { foreground: lightColors.red } },
    {
      scope: ['storage', 'storage.type'],
      settings: { foreground: lightColors.red },
    },
    {
      scope: [
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ],
      settings: { foreground: lightColors.foreground },
    },
    {
      scope: ['string', 'string punctuation.section.embedded source'],
      settings: { foreground: lightColors.blueDeep },
    },
    { scope: 'support', settings: { foreground: lightColors.blue } },
    {
      scope: 'meta.property-name',
      settings: { foreground: lightColors.blue },
    },
    { scope: 'variable', settings: { foreground: lightColors.orange } },
    {
      scope: 'variable.other',
      settings: { foreground: lightColors.foreground },
    },
    {
      scope: [
        'invalid.broken',
        'invalid.deprecated',
        'invalid.illegal',
        'invalid.unimplemented',
        'message.error',
      ],
      settings: { foreground: lightColors.rose },
    },
    {
      scope: 'carriage-return',
      settings: {
        background: lightColors.red,
        foreground: lightColors.foregroundSoft,
      },
    },
    {
      scope: 'string variable',
      settings: { foreground: lightColors.blue },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: { foreground: lightColors.blueDeep },
    },
    {
      scope: [
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition',
      ],
      settings: { foreground: lightColors.blueDeep },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: { foreground: lightColors.green },
    },
    {
      scope: ['support.constant', 'support.variable', 'meta.module-reference'],
      settings: { foreground: lightColors.blue },
    },
    {
      scope: 'support.type.property-name.json',
      settings: { foreground: lightColors.green },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: { foreground: lightColors.orange },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name', 'markup.inline.raw'],
      settings: { foreground: lightColors.blue },
    },
    { scope: 'markup.quote', settings: { foreground: lightColors.green } },
    {
      scope: ['markup.italic', 'markup.bold'],
      settings: { foreground: lightColors.foreground },
    },
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        background: lightColors.deletedBackground,
        foreground: lightColors.rose,
      },
    },
    {
      scope: 'punctuation.section.embedded',
      settings: { foreground: lightColors.red },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: lightColors.insertedBackground,
        foreground: lightColors.green,
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: lightColors.changedBackground,
        foreground: lightColors.orange,
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        background: lightColors.blue,
        foreground: lightColors.overlay,
      },
    },
    {
      scope: ['meta.diff.range', 'entity.name.function'],
      settings: { foreground: lightColors.violet },
    },
    {
      scope: ['meta.diff.header', 'meta.separator', 'meta.output'],
      settings: { foreground: lightColors.blue },
    },
    {
      scope: [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ],
      settings: { foreground: lightColors.mutedStrong },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: { foreground: lightColors.rose },
    },
    {
      scope: ['constant.other.reference.link', 'string.other.link'],
      settings: { foreground: lightColors.blueDeep },
    },
  ],
};
