import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const host = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ece9e4",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ff4d00",
          }}
        >
          ( Portfolio )
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -4,
            }}
          >
            {siteConfig.shortName === "Naseef" ? "Muhammed" : siteConfig.shortName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 120,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: -4,
              color: "#ff4d00",
            }}
          >
            Naseef
          </div>
          <div style={{ display: "flex", fontSize: 38, marginTop: 28, opacity: 0.75 }}>
            {siteConfig.jobTitle} · React · Next.js · Node.js · Python
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          <span>
            {siteConfig.location.locality}, {siteConfig.location.region}
          </span>
          <span>{host}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}