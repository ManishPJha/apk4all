import Banner from "../_components/banner";

export default async function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col items-center justify-start h-full w-full bg-white dark:bg-backgroundColor-primary">
        <Banner />
      </div>
    </>
  );
}
