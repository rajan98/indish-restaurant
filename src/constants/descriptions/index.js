import aboutPage from "./about/aboutPage";
import aboutDescription from "./home/about";
import dailyOffer from "./home/dailyOffer";
import featuredFood from "./home/featuredFoods";
import customerFeedbacks from "./home/feedback";
import heroDescriptions from "./home/hero";
import planningEvent from "./home/planningEvent";
import whyPeopleLikeUs from "./home/whyPeopleLikeUs";

const Description = {
  hero: { ...heroDescriptions },
  about: { ...aboutDescription },
  featuredFood,
  dailyOffer,
  whyPeopleLikeUs,
  planningEvent,
  customerFeedbacks,
  aboutPage
};

export default Description;
