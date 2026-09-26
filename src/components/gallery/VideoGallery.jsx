export default function VideoGallery({ videos = [] }) {
  if (!Array.isArray(videos) || videos.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((video) => (
        <article
          key={video.id}
          className="sound-card overflow-hidden"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            className="aspect-video w-full object-cover"
          >
            <source
              src={video.src}
              type="video/mp4"
            />

            Your browser does not support video playback.
          </video>

          {(video.title || video.category) && (
            <div className="p-5">
              {video.category && (
                <span className="sound-section-label">
                  {video.category}
                </span>
              )}

              {video.title && (
                <h3 className="mt-2 text-xl font-bold text-sound-white">
                  {video.title}
                </h3>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}