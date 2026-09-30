export default function HeroSection() {
  return (
    <section className="sound-video top-30  ">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="sound-video-media"
        aria-hidden="true"
      >
        <source
          src="/videos/soundFusion.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}