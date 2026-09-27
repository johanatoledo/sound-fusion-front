export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      >
        <source
          src="/videos/soundFusion.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}