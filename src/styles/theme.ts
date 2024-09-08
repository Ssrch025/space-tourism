'use client'
import { Bellefair, Barlow_Condensed, Barlow } from 'next/font/google';
import { Breakpoint, createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {

  interface Palette {
    space: {
      darkNavy: string
      purple: string
      white: string
    }
  }

  interface PaletteOptions {
    space: {
      darkNavy: string
      purple: string
      white: string
    }
  }

  interface ResponsiveTypographyProperties {
    xs?: React.CSSProperties
    sm?: React.CSSProperties
    md?: React.CSSProperties
    lg?: React.CSSProperties
    xl?: React.CSSProperties
  }

  type TresponsiveTypography = React.CSSProperties | ResponsiveTypographyProperties

  // define type in theme
  interface TypographyVariants {
    heading1: TresponsiveTypography
    heading2: TresponsiveTypography
    heading3: TresponsiveTypography
    heading4: TresponsiveTypography
    heading5: TresponsiveTypography
    subheading1: TresponsiveTypography
    subheading2: TresponsiveTypography
    nav: TresponsiveTypography
    body: TresponsiveTypography
  }

  // allow configuration type in createTheme
  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties
    heading2?: React.CSSProperties
    heading3?: React.CSSProperties
    heading4?: React.CSSProperties
    heading5?: React.CSSProperties
    subheading1?: React.CSSProperties
    subheading2?: React.CSSProperties
    navtext?: React.CSSProperties
    bodytext?: React.CSSProperties
  }
}

const getResponsiveSize = (xs: number, sm: number, md: number): any => {
  const theme = createTheme()
  const sizes = [{ key: 'xs', size: xs }, { key: 'sm', size: md }, { key: 'md', size: md }]
  return sizes.reduce((prev, curr) => {
    return {
      ...prev,
      [theme.breakpoints.up(curr.key as Breakpoint)]: { fontSize: `${curr.size}px` }
    }
  }, {})
}

// update type in variant
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true
    heading2: true
    heading3: true
    heading4: true
    heading5: true
    subheading1: true
    subheading2: true
    navtext: true
    bodytext: true
  }
}

const bellefair = Bellefair({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const barlow = Barlow({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    space: {
      darkNavy: '#0B0D17',
      purple: '#D0D6F9',
      white: '#FFFFFF',
    }
  },
  typography: {
    fontFamily: bellefair.style.fontFamily,
    heading1: getResponsiveSize(80, 150, 150),
    heading2: { fontSize: '100px' },
    heading3: { fontSize: '56px' },
    heading4: { fontSize: '32px' },
    heading5: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontSize: getResponsiveSize(19, 20, 28),
      letterSpacing: '4.75px',
    },
    subheading1: { fontSize: '28px' },
    subheading2: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontSize: '14px',
      letterSpacing: '2.35px',
    },
    navtext: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontSize: getResponsiveSize(14, 14, 16),
      letterSpacing: '2.7px',
    },
    bodytext: {
      fontFamily: barlow.style.fontFamily,
      fontSize: getResponsiveSize(15, 16, 18),
    },
  },
})

export default theme
