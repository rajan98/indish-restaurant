import aboutDescription from "./home/about";
import dailyOffer from "./home/dailyOffer";
import featuredFood from "./home/featuredFoods";
import heroDescriptions from "./home/hero";

const Description = {
  hero: { ...heroDescriptions },
  about: { ...aboutDescription },
  featuredFood,
  dailyOffer
};

export default Description;
