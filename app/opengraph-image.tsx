import { ImageResponse } from "next/og";

export const alt = "Meehir Prabhakar | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#0f0f0f",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        width: 64,
                        height: 4,
                        backgroundColor: "#e5e5e5",
                        marginBottom: 32,
                    }}
                />

                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 600,
                        color: "#f4f4f5",
                        marginBottom: 20,
                    }}
                >
                    Meehir Prabhakar
                </div>
                <div
                    style={{
                        fontSize: 32,
                        color: "#a1a1aa",
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}
                >
                    Computer Vision & Software Engineer building edge AI,
                    dual-model vision pipelines, and multi-channel SIEM
                    frameworks.
                </div>
            </div>
        ),
        { ...size }
    );
}
