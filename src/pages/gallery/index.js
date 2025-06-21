import Head from "next/head";
import EachPageLayout from "../../components/layout/EachPageLayout";
import APP_CONSTANTS from "../../constants/app_constants";

export default function index() {
  const images = [
    "/images/Home/DailyOffer/2.webp",
    "/images/Home/DailyOffer/3.webp",
    "/images/Home/PhotoGallery/1.webp",
    "/images/Home/PhotoGallery/2.webp",
    "/images/Home/PhotoGallery/3.webp",
    "/images/Home/PhotoGallery/4.webp",
    "/images/Home/PhotoGallery/5.webp",
    "/images/Home/DailyOffer/1.webp",
  ];
  return (
    <>
      <Head>
        <title>{`Gallery | ${APP_CONSTANTS.company_name_title_case}`}</title>
      </Head>
      <EachPageLayout title={"Gallery"}>
        <div className="min-h-screen bg-black p-4 md:p-8 lg:p-12">
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Restaurant image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </EachPageLayout>
    </>
  );
}
