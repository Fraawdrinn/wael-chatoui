import { Cabin, Inter } from 'next/font/google';

const cabin = Cabin({
  weight: '400',
  subsets: ['latin'],
});

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

const fonts = { cabin, inter }

export default fonts;
