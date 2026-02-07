/**
 * WCAG Contrast Checker Utility
 * Calculates contrast ratios between colors to ensure WCAG AA/AAA compliance
 *
 * WCAG AA Requirements:
 * - Normal text (< 18pt or < 14pt bold): 4.5:1 minimum
 * - Large text (≥ 18pt or ≥ 14pt bold): 3:1 minimum
 *
 * WCAG AAA Requirements:
 * - Normal text: 7:1 minimum
 * - Large text: 4.5:1 minimum
 */

/**
 * Convert hex color to RGB object
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    throw new Error(`Invalid hex color: ${hex}`)
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  }
}

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.0 formula
 */
function getRelativeLuminance(rgb: { r: number; g: number; b: number }): number {
  const { r, g, b } = rgb

  // Convert RGB values from 0-255 to 0-1
  const [rs, gs, bs] = [r, g, b].map(val => {
    const v = val / 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })

  // Calculate relative luminance
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 * Returns ratio as decimal (e.g., 5.5 for 5.5:1)
 */
export function getContrastRatio(foregroundHex: string, backgroundHex: string): number {
  const fgRgb = hexToRgb(foregroundHex)
  const bgRgb = hexToRgb(backgroundHex)

  const fgLuminance = getRelativeLuminance(fgRgb)
  const bgLuminance = getRelativeLuminance(bgRgb)

  const lighter = Math.max(fgLuminance, bgLuminance)
  const darker = Math.min(fgLuminance, bgLuminance)

  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Check if contrast ratio meets WCAG AA standard
 */
export function meetsWcagAA(
  contrastRatio: number,
  isLargeText: boolean = false
): boolean {
  const minimum = isLargeText ? 3 : 4.5
  return contrastRatio >= minimum
}

/**
 * Check if contrast ratio meets WCAG AAA standard
 */
export function meetsWcagAAA(
  contrastRatio: number,
  isLargeText: boolean = false
): boolean {
  const minimum = isLargeText ? 4.5 : 7
  return contrastRatio >= minimum
}

/**
 * Validate color pair for accessibility
 */
export function validateColorPair(
  foregroundHex: string,
  backgroundHex: string,
  options: { isLargeText?: boolean; wcagLevel?: 'AA' | 'AAA' } = {}
): {
  contrastRatio: number
  meetsStandard: boolean
  wcagLevel: string
  message: string
} {
  const { isLargeText = false, wcagLevel = 'AA' } = options
  const contrastRatio = getContrastRatio(foregroundHex, backgroundHex)

  let meetsStandard = false
  if (wcagLevel === 'AA') {
    meetsStandard = meetsWcagAA(contrastRatio, isLargeText)
  } else {
    meetsStandard = meetsWcagAAA(contrastRatio, isLargeText)
  }

  const textType = isLargeText ? 'large text' : 'normal text'
  const minimumRatio = wcagLevel === 'AA' ? (isLargeText ? 3 : 4.5) : isLargeText ? 4.5 : 7

  return {
    contrastRatio: Number(contrastRatio.toFixed(2)),
    meetsStandard,
    wcagLevel: `WCAG ${wcagLevel}`,
    message: meetsStandard
      ? `✅ ${contrastRatio.toFixed(2)}:1 passes WCAG ${wcagLevel} for ${textType} (required: ${minimumRatio}:1)`
      : `❌ ${contrastRatio.toFixed(2)}:1 fails WCAG ${wcagLevel} for ${textType} (required: ${minimumRatio}:1)`,
  }
}
