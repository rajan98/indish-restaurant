import fs from "fs";
import path from "path";
import Head from "next/head";
import EachPageLayout from "../../components/layout/EachPageLayout";
import APP_CONSTANTS from "../../constants/app_constants";

export async function getStaticProps() {
  const galleryDir = path.join(
    process.cwd(),
    "public",
    "images",
    "Home",
    "PhotoGallery"
  );

  let images = [];

  try {
    const entries = fs.readdirSync(galleryDir, { withFileTypes: true });
    const imageExtensions = /\.(webp|jpg|jpeg|png|avif|gif)$/i;

    images = entries
      .filter((entry) => entry.isFile() && imageExtensions.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
      )
      .map((fileName) => `/images/Home/PhotoGallery/${fileName}`);
  } catch (error) {
    console.error("Error reading PhotoGallery directory:", error);
  }

  return {
    props: {
      images,
    },
  };
}

export default function index({ images = [] }) {
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
