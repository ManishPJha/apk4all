type Video = {
  title: string;
  width: number | string;
  height: number | string;
  src: string;
};

function Video({ title, width = 500, height = "auto", src, ...rest }: Video) {
  return (
    <video
      className="overflow-hidden rounded"
      width={width}
      height={height}
      controls
      {...rest}
    >
      <source
        src={src.match(/^http/) ? src : `/videos/${src}`}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
