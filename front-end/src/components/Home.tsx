import { basePalette, PaletteType, softPalette, vibrantPalette } from "../utilities/ColorPalettes";


function Home({ setPalette }: { setPalette: React.Dispatch<React.SetStateAction<PaletteType>> }) {
    return (
        <>
            <h2>Landing Page</h2>
            <p>This will be the landing page for the site, which gives the elevator pitch and some quick info, with links for sign-in, sign-up, more info and a contact page for user feedback.</p>

            <h2>Palette Picker Workspace</h2>
            <p>This is a workspace for the palette picker component, which will affect the whole app, so remember to lift the state to App.tsx!</p>

                        <h2>Base Color Palette</h2>
                        <button onClick={() => setPalette(basePalette)}>Use This Palette</button>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            {Object.entries(basePalette).map(([priority, color], index) => (
                                <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                                    {priority}
                                </div>
                            ))}
                        </div>
            
                        <h2>Soft Color Palette</h2>
                        <button onClick={() => setPalette(softPalette)}>Use This Palette</button>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            {Object.entries(softPalette).map(([priority, color], index) => (
                                <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                                    {priority}
                                </div>
                            ))}
                        </div>
            
                        <h2>Vibrant Color Palette</h2>
                        <button onClick={() => setPalette(vibrantPalette)}>Use This Palette</button>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            {Object.entries(vibrantPalette).map(([priority, color], index) => (
                                <div key={index} style={{ backgroundColor: color, width: "100px", height: "100px" }}>
                                    {priority}
                                </div>
                            ))}
                        </div>
        </>
    )
}

export default Home;