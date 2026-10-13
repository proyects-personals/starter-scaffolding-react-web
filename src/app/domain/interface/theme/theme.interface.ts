import type { ThemeName } from "@domain";
import type { ReactNode } from "react";

/**
 * @description Valor expuesto por el ThemeContext.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeContextValue {
  theme: AppTheme;
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

/**
 * @description Props del ThemeProvider.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * @description Colores del contenido textual de la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeTextColors {
  primary: string;
  secondary: string;
  muted: string;
  disabled: string;
  inverse: string;
  link: string;
  linkHover: string;
}

/**
 * @description Colores utilizados para superficies de la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeSurfaceColors {
  background: string;
  surface: string;
  surfaceElevated: string;
  surfaceHover: string;
  surfaceActive: string;
  surfaceDisabled: string;
}

/**
 * @description Colores utilizados para estados semánticos.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeStateColors {
  success: string;
  successBackground: string;
  warning: string;
  warningBackground: string;
  error: string;
  errorBackground: string;
  info: string;
  infoBackground: string;
}

/**
 * @description Colores principales de identidad visual.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeBrandColors {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primaryContrast: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  secondaryContrast: string;
  accent: string;
  accentHover: string;
  accentContrast: string;
}

/**
 * @description Colores utilizados para bordes y separadores.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeBorderColors {
  default: string;
  subtle: string;
  strong: string;
  focus: string;
  hover: string;
  active: string;
  disabled: string;
}

/**
 * @description Configuración de sombras de la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeShadowColors {
  color: string;
  subtle: string;
  small: string;
  medium: string;
  large: string;
  glow: string;
}

/**
 * @description Configuración de efectos visuales del tema.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeEffects {
  overlay: string;
  backdrop: string;
  blur: string;
  blurStrong: string;
  glassBackground: string;
  glassBorder: string;
}

/**
 * @description Configuración tipográfica del tema.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeTypography {
  heading: {
    primary: string;
    secondary: string;
    muted: string;
  };
  body: {
    primary: string;
    secondary: string;
    muted: string;
  };
  label: {
    primary: string;
    secondary: string;
    muted: string;
  };
  button: {
    primary: string;
    secondary: string;
  };
}

/**
 * @description Paleta completa de colores y estilos visuales.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeColors {
  surface: ThemeSurfaceColors;
  text: ThemeTextColors;
  brand: ThemeBrandColors;
  state: ThemeStateColors;
  border: ThemeBorderColors;
  shadow: ThemeShadowColors;
  effects: ThemeEffects;
  typography: ThemeTypography;
}

/**
 * @description Configuración visual completa de un tema.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AppTheme {
  name: ThemeName;
  colors: ThemeColors;
}
