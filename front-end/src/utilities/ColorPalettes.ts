// declares all required values for palette objects
type Priority = "none" | "low" | "medium" | "high" | "urgent"

type Color = `#${string}`

interface PaletteType {
	none: string;
    low: string;
    medium: string;
    high: string;
    urgent: string;
}

// Record ensures that all emotions are present and all values are strings (hex codes)
const basePalette: Record<Priority, Color> = {
    none: "#00C452",
    low: "#A1E45C",
    medium: "#FFF762",
    high: "#FFA743",
    urgent: "#FF4C20",
}

const softPalette: Record<Priority, Color> = {
    none: "#4CBA8C",
    low: "#ABD086",
    medium: "#FFE480",
    high: "#FCB380",
    urgent: "#F55174",
}

const vibrantPalette: Record<Priority, Color> = {
    none: "#64E600",
    low: "#CBFF00",
    medium: "#FFFF00",
    high: "#FF9A00",
    urgent: "#FF0000",
}

// export for use in other files
export { basePalette, softPalette, vibrantPalette };
export type { Color, PaletteType, Priority };