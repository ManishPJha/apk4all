import Image from "next/image";

const BannerImage = ({ bannerImageSrc }: { bannerImageSrc: string }) => {
  if (!bannerImageSrc) return null;

  return (
    <figure className="relative">
      <Image
        src={bannerImageSrc}
        alt="banner-image"
        height={888}
        width={2328}
        className="h-full w-full object-cover"
      />
      <div className="to-shadow pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent"></div>
    </figure>
  );
};

export default BannerImage;
