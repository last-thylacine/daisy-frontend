export type HapticFeedbackImpactStyle = "light" | "medium" | "heavy" | "rigid" | "soft"
export type HapticFeedbackNotificationType = "error" | "success" | "warning"
export const IMPACT_STYLES = ["light", "medium", "heavy", "rigid", "soft"] as const
export const NOTIFICATION_TYPES = ["error", "success", "warning"] as const
