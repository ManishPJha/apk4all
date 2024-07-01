import { type BannerContentsProps } from "@/types/app/components/banner";

const BannerContent = ({ title, description }: BannerContentsProps) => {
  return (
    <article className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center text-xl font-bold text-primary-400 sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </section>
      <p className="mt-4 flex flex-col items-center justify-center px-14 text-center text-xs dark:text-secondary-50 text-secondary-900 sm:text-base md:mt-8 md:p-0 md:text-xl">
        {description}
      </p>
    </article>
  );
};

export default BannerContent;
