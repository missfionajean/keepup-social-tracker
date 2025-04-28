// declares all require values for emotion palette
type Emotion = "depressed" | "pessimistic" | "sad" | "upset" | "angry" | "irritable" | "tense" | "nervous" | "excited" | "optimistic" | "happy" | "content" | "relaxed" | "calm" | "bored" | "gloomy"

type Color = `#${string}`

// Record ensures that all emotions are present and all values are strings (hex codes)
const ePalette: Record<Emotion, Color> = {
    depressed: "#C180FF",
    pessimistic: "#DF80FE",
    sad: "#FE80FE",
    upset: "#FE80BF",
    angry: "#FE8081",
    irritable: "#FFBF81",
    tense: "#FFFF80",
    nervous: "#E2FF7F",
    excited: "#81FF81",
    optimistic: "#81FFBF",
    happy: "#7FFFDE",
    content: "#80DFFF",
    relaxed: "#7FBFFF",
    calm: "#819FFF",
    bored: "#807FFE",
    gloomy: "#A080FF"
}

// export for use in other files
export default ePalette