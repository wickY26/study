'use client'
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
  theme?: string;
}

export function Providers({ children, themeProps, theme }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider themes={['light', 'dark', 'university', 'summer']} forcedTheme={theme}>{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
