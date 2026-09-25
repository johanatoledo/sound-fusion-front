import QRCode from "qrcode";
import path from "path";

const urlSoundFusion= "https://nails-vibe.toledanadev.com";

const outputPath = path.join(process.cwd(), "public", "qr-wed-sound-fusion.png");

QRCode.toFile(outputPath, urlSoundFusion, {
  width: 1000,
  margin: 2,
  color: {
    dark: "#1F1F1F",
    light: "#FFFFFF",
  },
})
  .then(() => {
    console.log("✅ QR generado correctamente:");
    console.log(outputPath);
  })
  .catch((error) => {
    console.error("❌ Error generando QR:", error);
  });