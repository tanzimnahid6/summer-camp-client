
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

const PopularInstructor = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const res = await fetch('https://summer-camp-server-eight-kappa.vercel.app/popularInstructors');
      return res.json();
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
      {instructors.map((item) => (
        <motion.div
          className="card w-96 h-96 object-cover bg-base-100 shadow-xl m-4"
          key={item._id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.8 }}
        >
          <figure>
            <img src={item.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.email}</p>
            <div className="card-actions">
              <div className="badge">Total Enroll: {item.total_enroll}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PopularInstructor;
