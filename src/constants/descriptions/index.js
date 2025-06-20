import aboutDescription from "./home/about";
import featuredFood from "./home/featuredFoods";
import heroDescriptions from "./home/hero";

const Description = {
  hero: { ...heroDescriptions },
  about: { ...aboutDescription },
  featuredFood: [...featuredFood]
};

export default Description;
