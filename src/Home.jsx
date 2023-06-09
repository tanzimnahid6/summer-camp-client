import BannerSlider from "./Components/Banner/BannerSlider"
import PopularClass from "./Components/PopularClass/PopularClass"
import SectionTitle from "./Components/SectionTitle"

const Home = () => {
  return (
    <div>
      <div className="h-[600px]">
        <BannerSlider></BannerSlider>
      </div>
      <SectionTitle
        heading={"Popular class"}
        sub_heading={"this is sub heading ,added letter"}
      ></SectionTitle>
      <div>
        <PopularClass></PopularClass>
      </div>
    </div>
  )
}

export default Home
