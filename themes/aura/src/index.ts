import { tags as t } from '@lezer/highlight';
import { createTheme, CreateThemeOptions } from '@uiw/codemirror-themes';

export const defaultSettingsAura: CreateThemeOptions['settings'] = {
  background: '#21202e',
  foreground: '#edecee',
  caret: '#a277ff',
  selection: '#5a51898f',
  selectionMatch: '#5a51898f',
  gutterBackground: '#21202e',
  gutterForeground: '#edecee',
  gutterBorder: 'transparent',
  lineHighlight: '#a394f033',
};

export const auraInit = (options?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = options || {};
  return createTheme({
    theme: theme,
    settings: {
      ...defaultSettingsAura,
      ...settings,
    },
    styles: [
      { tag: t.keyword, color: '#a277ff' },
      { tag: [t.name, t.deleted, t.character, t.macroName], color: '#edecee' },
      { tag: [t.propertyName], color: '#ffca85' },
      { tag: [t.processingInstruction, t.string, t.inserted, t.special(t.string)], color: '#61ffca' },
      { tag: [t.function(t.variableName), t.labelName], color: '#ffca85' },
      { tag: [t.color, t.constant(t.name), t.standard(t.name)], color: '#61ffca' },
      { tag: [t.definition(t.name), t.separator], color: '#edecee' },
      { tag: [t.className], color: '#82e2ff' },
      { tag: [t.number, t.changed, t.annotation, t.modifier, t.self, t.namespace], color: '#61ffca' },
      { tag: [t.typeName], color: '#82e2ff' },
      { tag: [t.operator, t.operatorKeyword], color: '#a277ff' },
      { tag: [t.url, t.escape, t.regexp, t.link], color: '#61ffca' },
      { tag: [t.meta, t.comment], color: '#6d6d6d' },
      { tag: t.strong, fontWeight: 'bold' },
      { tag: t.emphasis, fontStyle: 'italic' },
      { tag: t.link, textDecoration: 'underline' },
      { tag: t.heading, fontWeight: 'bold', color: '#a277ff' },
      { tag: [t.atom, t.bool, t.special(t.variableName)], color: '#edecee' },
      { tag: t.invalid, color: '#ff6767' },
      { tag: t.strikethrough, textDecoration: 'line-through' },
      ...styles,
    ],
  });
};

export const aura = auraInit();
