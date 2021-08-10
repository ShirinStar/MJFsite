import React from 'react';
import getVideoId from 'get-video-id';

const VideoEmbedPreview = ({ value }) => {
  const { url } = value;
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

  if (url) {
    const { id } = getVideoId(url);
    const { service } = getVideoId(url);

    const vimeoEmbedUrl = `https://player.vimeo.com/video/${id}`;
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${id}`;

    if (!id) {
      return <div>Missing YouTube or Vimeo URL</div>;
    }

    if (service === 'vimeo') {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={vimeoEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      );
    }

    if (service === 'youtube') {
      return (
        <div style={responsiveVideoContainer}>
          <iframe
            src={youtubeEmbedUrl}
            style={responsiveVideoPlayer}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
  }

  return <div />;
};

export default {
  name: 'videoEmbed',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: VideoEmbedPreview,
  },
};
