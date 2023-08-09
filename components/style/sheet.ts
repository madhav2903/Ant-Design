import type * as React from 'react';

const styleMap: Partial<Record<keyof React.CSSProperties, string>> = {
  WebkitBackfaceVisibility: 'a',
  WebkitBoxOrient: 'b',
  WebkitLineClamp: 'c',
  WebkitTapHighlightColor: 'd',
  WebkitTransformStyle: 'e',
  alignItems: 'f',
  alignSelf: 'g',
  animationDelay: 'h',
  animationDirection: 'i',
  animationDuration: 'j',
  animationFillMode: 'k',
  animationIterationCount: 'l',
  animationName: 'm',
  animationPlayState: 'n',
  animationTimingFunction: 'o',
  appearance: 'p',
  background: 'q',
  backgroundClip: 'r',
  backgroundColor: 's',
  backgroundImage: 't',
  backgroundPosition: 'u',
  backgroundRepeat: 'v',
  backgroundSize: 'w',
  border: 'x',
  borderBlockEnd: 'y',
  borderBlockEndColor: 'z',
  borderBlockEndWidth: 'A',
  borderBlockStart: 'B',
  borderBlockStartColor: 'C',
  borderBlockStartWidth: 'D',
  borderBottom: 'E',
  borderBottomColor: 'F',
  borderBottomWidth: 'G',
  borderCollapse: 'H',
  borderColor: 'I',
  borderEndEndRadius: 'J',
  borderEndStartRadius: 'K',
  borderInlineEnd: 'L',
  borderInlineEndColor: 'M',
  borderInlineEndWidth: 'N',
  borderInlineStart: 'O',
  borderInlineStartColor: 'P',
  borderInlineStartWidth: 'Q',
  borderLeft: 'R',
  borderLeftColor: 'S',
  borderRadius: 'T',
  borderRight: 'U',
  borderRightColor: 'V',
  borderSpacing: 'W',
  borderStartEndRadius: 'X',
  borderStartStartRadius: 'Y',
  borderStyle: 'Z',
  borderTop: 'aa',
  borderTopColor: 'ab',
  borderTopWidth: 'ac',
  borderWidth: 'ad',
  bottom: 'ae',
  boxShadow: 'af',
  boxSizing: 'ag',
  columnGap: 'ah',
  container: 'ai',
  content: 'aj',
  cursor: 'ak',
  direction: 'al',
  display: 'am',
  filter: 'an',
  flexBasis: 'ao',
  flexDirection: 'ap',
  flexFlow: 'aq',
  flexGrow: 'ar',
  flexShrink: 'as',
  flexWrap: 'at',
  fontFamily: 'au',
  fontSize: 'av',
  fontStretch: 'aw',
  fontStyle: 'ax',
  fontVariant: 'ay',
  fontWeight: 'az',
  height: 'aA',
  insetBlock: 'aB',
  insetBlockEnd: 'aC',
  insetBlockStart: 'aD',
  insetInline: 'aE',
  insetInlineEnd: 'aF',
  insetInlineStart: 'aG',
  justifyContent: 'aH',
  justifyItems: 'aI',
  letterSpacing: 'aJ',
  lineHeight: 'aK',
  listStyle: 'aL',
  listStylePosition: 'aM',
  listStyleType: 'aN',
  margin: 'aO',
  marginBlock: 'aP',
  marginBlockEnd: 'aQ',
  marginBlockStart: 'aR',
  marginBottom: 'aS',
  marginInline: 'aT',
  marginInlineEnd: 'aU',
  marginInlineStart: 'aV',
  marginLeft: 'aW',
  marginRight: 'aX',
  marginTop: 'aY',
  maxHeight: 'aZ',
  maxWidth: 'ba',
  minHeight: 'bb',
  minWidth: 'bc',
  objectFit: 'bd',
  opacity: 'be',
  outline: 'bf',
  outlineColor: 'bg',
  overflow: 'bh',
  overflowWrap: 'bi',
  overflowX: 'bj',
  overflowY: 'bk',
  padding: 'bl',
  paddingBlock: 'bm',
  paddingBlockStart: 'bn',
  paddingBottom: 'bo',
  paddingInline: 'bp',
  paddingInlineEnd: 'bq',
  paddingInlineStart: 'br',
  paddingLeft: 'bs',
  paddingRight: 'bt',
  paddingTop: 'bu',
  pointerEvents: 'bv',
  position: 'bw',
  resize: 'bx',
  rowGap: 'by',
  stroke: 'bz',
  tabSize: 'bA',
  tableLayout: 'bB',
  textAlign: 'bC',
  textDecoration: 'bD',
  textDecorationSkipInk: 'bE',
  textIndent: 'bF',
  textOverflow: 'bG',
  textRendering: 'bH',
  textShadow: 'bI',
  textTransform: 'bJ',
  touchAction: 'bK',
  transform: 'bL',
  transformOrigin: 'bM',
  transition: 'bN',
  transitionDuration: 'bO',
  transitionTimingFunction: 'bP',
  userSelect: 'bQ',
  verticalAlign: 'bR',
  visibility: 'bS',
  whiteSpace: 'bT',
  width: 'bU',
  willChange: 'bV',
  wordBreak: 'bW',
  wordWrap: 'bX',
  writingMode: 'bY',
  zIndex: 'bZ',
};

type RevertType = Record<string, keyof React.CSSProperties>;

const revertStyleMap: RevertType = Object.keys(styleMap).reduce((acc, key) => {
  acc[(styleMap as any)[key]] = key as keyof React.CSSProperties;
  return acc;
}, {} as RevertType);

export default revertStyleMap;