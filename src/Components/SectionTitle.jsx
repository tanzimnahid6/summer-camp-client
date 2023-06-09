
const SectionTitle = ({heading,sub_heading}) => {
  return (
    <div className="text-center my-8">
      <h1 className="text-3xl">{heading}</h1>
      <p>
      {sub_heading}
      </p>
    </div>
  )
}

export default SectionTitle
