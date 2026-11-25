/** Brand palette mirror for use in JS (CSS variables live in styles/globals.css). */
export const theme = {
  palladian: '#EEE9DF',
  oatmeal: '#C9C1B1',
  abyssal: '#1B2632',
  fantastic: '#2C3B4D',
  flame: '#FFB162',
  truffle: '#A35139',
} as const;

export const motionConfig = {
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: 0.7,
  stagger: 0.09,
};
