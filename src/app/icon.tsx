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
          background: "#0a0a0a",
          color: "#ff4d00",
          fontSize: 24,
          fontWeight: 800,
          borderRadius: 6,
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}