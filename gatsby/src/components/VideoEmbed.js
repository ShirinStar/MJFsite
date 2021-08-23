import React from 'react';
import getVideoId from 'get-video-id';

export default function VideoEmbed({ link }) {
  const { id } = getVideoId(link);
  const { service } = getVideoId(link);
  const vimeoEmbedUrl = `https://player.vimeo.com/video/${id}`;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${id}`;

  const responsiveVideoContainer = {
    padding: '56.25% 0 0 0',
    position: 'relative',
  };

  const responsiveVideoPlayer = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <>
      {/* {!id ? <div>Missing YouTube or Vimeo URL</div> : ''} */}
      {service === 'vimeo' ? (
        <div style={responsiveVideoContainer}>
          <iframe
            src={vimeoEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      ) : (
        ''
      )}
      {service === 'youtube' ? (
        <div style={responsiveVideoContainer}>
          <iframe
            src={youtubeEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
