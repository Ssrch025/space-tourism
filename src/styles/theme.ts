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
      grey: string
    }
  }

  interface PaletteOptions {
    space: {
      darkNavy: string
      purple: string
      white: string
      grey: string
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
    navtext: TresponsiveTypography
    bodytext: TresponsiveTypography
    button: TresponsiveTypography
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
    button?: React.CSSProperties
  }
}

const getResponsiveSize = (xs: number, sm?: number, md?: number): any => {
  const theme = createTheme()
  const sizes = [
    { key: 'xs', size: xs },
    { key: 'sm', size: sm ?? xs },
    { key: 'md', size: md ?? xs },
  ]
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
      grey: '#383B4B',
    }
  },
  typography: {
    fontFamily: bellefair.style.fontFamily,
    heading1: getResponsiveSize(80, 150, 150),
    heading2: getResponsiveSize(56, 80, 100),
    heading3: getResponsiveSize(24, 40, 56),
    heading4: getResponsiveSize(16, 24, 32),
    heading5: {
      fontFamily: barlowCondensed.style.fontFamily,
      ...getResponsiveSize(16, 20, 28),
      letterSpacing: '4.75px',
    },
    subheading1: getResponsiveSize(28),
    subheading2: {
      fontFamily: barlowCondensed.style.fontFamily,
      ...getResponsiveSize(14),
      letterSpacing: '2.35px',
    },
    navtext: {
      fontFamily: barlowCondensed.style.fontFamily,
      ...getResponsiveSize(14, 14, 16),
      letterSpacing: '2.7px',
    },
    bodytext: {
      fontFamily: barlow.style.fontFamily,
      ...getResponsiveSize(15, 16, 18),
    },
    button: getResponsiveSize(20, 32, 32)
  },
})

export default theme
