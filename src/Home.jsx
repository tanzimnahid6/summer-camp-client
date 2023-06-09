import BannerSlider from "./Components/Banner/BannerSlider";

const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <div className="h-96">
            <BannerSlider></BannerSlider>
            </div>
        </div>
    );
};

export default Home;