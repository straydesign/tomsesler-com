import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          borderRadius: "6px",
          fontSize: "14px",
          fontWeight: 700,
          color: "#E5E5E5",
          letterSpacing: "-0.5px",
        }}
      >
        TS
      </div>
    ),
    { ...size }
  );
}
