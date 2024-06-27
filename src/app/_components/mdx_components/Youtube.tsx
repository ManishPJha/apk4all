"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type YouTube = {
  id: string;
  title: string;
};

const Youtube = ({ id, title, ...rest }: YouTube) => {
  return (
    <div className="overflow-hidden rounded">
      <LiteYouTubeEmbed id={id} title={title} {...rest} />
    </div>
  );
};

export default Youtube;
