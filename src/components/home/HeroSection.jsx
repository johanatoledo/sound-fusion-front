export default function HeroSection() {
  return (
    <section className="sound-video  top-14 md:top-25 lg:top-26">
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
          src="/videos/sound-fusion-entertainment.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}