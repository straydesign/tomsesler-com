import { ImageResponse } from "next/og";

export const alt = "Tom Sesler — Product Designer & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #6366f1, #8b5cf6)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.1,
            display: "flex",
          }}
        >
          Tom Sesler
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            marginTop: "16px",
            display: "flex",
          }}
        >
          Product Designer & Web Developer
        </div>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.3)",
            marginTop: "32px",
            display: "flex",
            gap: "24px",
          }}
        >
          <span>straydesign.co</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span>straywebdesign.co</span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span>tomsesler.com</span>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(to right, #6366f1, #8b5cf6)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
