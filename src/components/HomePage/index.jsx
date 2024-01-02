/* eslint-disable react/prop-types */
import FeaturedAd from "./featuredAd";
import HeroSection from "./heroSection";
import TopCategories from "./topCategories";
import TrendingProducts from "./trendingProducts";

export default function HomePage({ onClickFav }) {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <FeaturedAd />
      <TrendingProducts onClickFav={onClickFav} />
    </div>
  );
}
