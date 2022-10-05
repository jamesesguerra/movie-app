import { Link } from "react-router-dom"

const CarouselTitle = ({ title }) => {
  return (
    <h2 className='text-2xl py-4'>{ title } <Link><span className="link link-hover link-primary text-base pl-2">View All</span></Link></h2>
  )
}

export default CarouselTitle