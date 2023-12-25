import FeaturedAd from "./featuredAd";
import HeroSection from "./heroSection";
import TopCategories from "./topCategories";
import TrendingProducts from "./trendingProducts";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <FeaturedAd />
      <TrendingProducts />

    </div>
  );
}
