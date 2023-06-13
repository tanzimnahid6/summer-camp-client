import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ClassCard = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="fade-up" className="card w-96 h-[500px] bg-base-100 shadow-2xl">
        <figure>
          <img
            className="h-80 w-72 rounded-lg object-cover"
            src={item.picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary w-1/2">Best Seller</div>
          </h2>
          <p>Instructor : {item.instructor_name}</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">
              {item.enrolled_classes} Enrolled
            </div>
            <div className="badge badge-outline">{item.available_seats} Seat Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
