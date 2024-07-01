import config from "@/config/default";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <section className="dark:bg-gradient-center bg-white container flex flex-col items-center justify-center overflow-hidden py-10 md:py-20 space-y-12">
      <BannerContent
        title={config.bannerTitle}
        description={config.bannerDescription}
      />
      <BannerImage bannerImageSrc={config.bannerImage} />
    </section>
  );
};

export default Banner;
