import BannerSlider from "./Components/Banner/BannerSlider"
import PopularClass from "./Components/PopularClass/PopularClass"
import PopularInstructor from "./Components/PopularInstructor/PopularInstractor"
import SectionTitle from "./Components/SectionTitle"
import Discount from "./Pages/ExtraPage/Discount"

const Home = () => {
  return (
    <div>
      <div className="h-[600px]">
        <BannerSlider></BannerSlider>
      </div>
      <SectionTitle
        heading={"Popular class"}
        sub_heading={""}
      ></SectionTitle>
      <div>
        <PopularClass></PopularClass>
      </div>
      <div>
        <SectionTitle
          heading={"Popular Instructors"}
          sub_heading={""}
        ></SectionTitle>
        <PopularInstructor></PopularInstructor>
      </div>
      <div>
        <SectionTitle heading={"Offer"} sub_heading={""}></SectionTitle>
      </div>
      <Discount></Discount>
    </div>
  )
}

export default Home
