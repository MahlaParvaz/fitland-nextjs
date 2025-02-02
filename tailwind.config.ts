/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
const tailwindConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],

  theme: {
    extend: {
      colors: {
        // primary: {
        //   950: '#FA541C',
        //   900: '#190803',
        //   850: '#4B1908',
        //   700: '#963211',
        //   600: '#E14C19',
        //   400: '#FB7649',
        //   300: '#FC9877',
        //   150: '#FDCCBB',
        //   50: '#FEEEE8',
        // },
        // secondary: {
        //   950: '#032340',
        //   900: '#01070D',
        //   850: '#010A13',
        //   700: '#021526',
        //   400: '#194165',
        //   300: '#2F5F8A',
        //   150: '#518CC1',
        //   50: '#67AAE6',
        //   10: '#CFE8FF',
        //   0: '#EBF5FF',
        // },
        // gray: {
        //   700: '#404040',
        //   600: '#606060',
        //   500: '#868686',
        //   400: '#ADADAD',
        //   300: '#CBCBCB',
        //   200: '#D9D9D9',
        //   100: '#EDEDED',
        //   50: '#F9F9F9',
        // },
        // error: {
        //   10: '#FADDCA',
        //   20: '#E53935',
        //   30: '#8A1513',
        // },
        // success: {
        //   10: '#D3EDDD',
        //   20: '#66BB6A',
        //   30: '#257028',
        // },
        // warning: {
        //   10: '#FFF3BF',
        //   20: '#FFB300',
        //   30: '#995700',
        // },
        // white: '#FFFFFF',
        // black: '#000000',
        // background: '#D9D9D9',
      },
      // container: {
      //   center: true,
      //   padding: '1rem',
      // },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
      },
    },
  },
  plugins: [
    aspectRatio,
    forms({
      strategy: 'class',
    }),
  ],
};

export default tailwindConfig;
