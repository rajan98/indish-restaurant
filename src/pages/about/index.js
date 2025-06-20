import Head from "next/head";
import EachPageLayout from "../../components/layout/EachPageLayout";
import APP_CONSTANTS from "../../constants/app_constants";

export default function index() {
  return (
    <>
    <Head>
       <title>{`About Us | ${APP_CONSTANTS.company_name_title_case}`}</title>
    </Head>
      <EachPageLayout title={"About"}>
      <div className="min-h-screen bg-black text-white">
        {/* First Section with Text and Image */}
        <div className="flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Embark on a culinary adventure at Mehmaan, where tradition meets
                modern innovation. We celebrate the vibrant tapestry of Indian
                flavors, using fresh, seasonal ingredients to create dishes that
                are both familiar and exciting Restaurant in Wahroonga. Our
                modern Indian cuisine reimagines classic favorites with a
                contemporary twist, while staying true to the depth and soul of
                authentic Indian spices. Prepare to be surprised and delighted
                by our unique take on timeless Indian food.
              </p>
            </div>

            {/* Restaurant Interior Image */}
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-blue-900/20" />
              <img
                src="/images/About/Background.webp"
                alt="Mehmaan Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </EachPageLayout>
    </>
  );
}
