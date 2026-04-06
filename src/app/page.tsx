import LandingApple from "@/components/LandingApple";
import { loadLandingForTina } from "@/lib/load-landing";

export const metadata = {
  title: "Rowan & Co. — Real Estate",
  description: "Austin metro homes with a discreet, data-sharp edge.",
};

export default function HomePage() {
  const props = loadLandingForTina("home.md");
  return <LandingApple {...props} />;
}
