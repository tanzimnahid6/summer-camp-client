
const SectionTitle = ({heading,sub_heading}) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-4xl uppercase text-center mb-2 font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
       {heading}
      </h1>
      <p>- - - - - - - - - - - - - - - - - - - - - - - - </p>
      <p>
      {sub_heading}
      </p>
    </div>
  )
}

export default SectionTitle
