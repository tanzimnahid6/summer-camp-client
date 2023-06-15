import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Discount = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
  return (
    <div data-aos="fade-up">
    
      <div className="grid md:grid-cols-3 bg-[#a7d5ef] gap-8 my-8 p-8 ">
        <div className=" w-full p-8 h-64  ">
          <h1 className="text-3xl font-bold">Best Selling Course </h1>
          <h1 className="text-6xl font-extrabold mx-2">
            <span className="text-purple-600">33%</span> OFF
          </h1>
          <h1 className="text-xl font-bold">Most Popular instructor take this class</h1>
          <p className="">Do not Miss Out! Save 33 % on this Course</p>
          <Link to='alltoy'><div className="btn btn-sm btn-error mt-2">Select</div></Link>
        </div>
        <div className="md:col-span-2 ">
          <div className="w-full h-64">
            <img
              className="w-full rounded-md object-scale-down h-64"
              src="https://i.ibb.co/CJsrk89/pexels-valeria-boltneva-7474271.jpg"
              alt="Class
               image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount