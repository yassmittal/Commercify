/* eslint-disable react/prop-types */
import FeaturedAd from "./featuredAd";
import HeroSection from "./heroSection";
import TopCategories from "./topCategories";
import TrendingProducts from "./trendingProducts";

export default function HomePage({ onClickFav, isItemFav }) {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <FeaturedAd />
      <TrendingProducts onClickFav={onClickFav} isItemFav={isItemFav} />
    </div>
  );
}
