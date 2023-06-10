import useClass from "../../Hooks/useClasses";
import useUsers from "../../Hooks/useUsers";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [classes] = useClass()
    const [users] = useUsers()
    console.log(users);

    return (
        <div className="pt-36 mx-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {
                  classes.map(item=><ClassCard item={item} key={item._id}></ClassCard>)  
                }
            </div>
        </div>
    );
};

export default Classes;