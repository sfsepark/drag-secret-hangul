const baseData = {
  q : 'ㅂ',
  w : 'ㅈ',
  e : 'ㄷ',
  r : 'ㄱ',
  t : 'ㅅ',
  y : 'ㅛ',
  u : 'ㅕ',
  i : 'ㅑ',
  o : 'ㅐ',
  p : 'ㅔ',
  a : 'ㅁ',
  s : 'ㄴ',
  d : 'ㅇ',
  f : 'ㄹ',
  g : 'ㅎ',
  h : 'ㅗ',
  j : 'ㅓ',
  k : 'ㅏ',
  l : 'ㅣ',
  z : 'ㅋ',
  x : 'ㅌ',
  c : 'ㅊ',
  v : 'ㅍ',
  b : 'ㅠ',
  n : 'ㅜ',
  m : 'ㅡ',
}

const upperData = Object.entries(baseData).reduce((prev, [eng, kor]) => {
  prev[eng.toUpperCase()] = kor;
  return prev;
}, {})

const shiftKorData = {
  ...upperData,
  Q : 'ㅃ',
  W : 'ㅉ',
  E : 'ㄸ',
  R : 'ㄲ',
  T : 'ㅆ',
  O : 'ㅒ',
  P : 'ㅖ',
}

const data = {
  ...baseData,
  ...shiftKorData,
}

export default data;