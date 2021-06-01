 // src/components/Gradient/GradientTagButton.js
import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"


const GradientTagButton = ({ tag }) => {
  const { filter, setFilter } = useContext(FilterContext)

  // comme avant
  const className = filter === tag ? "bg-light" : "bg-dark text-white"
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 mb-2 ${className}`}
      disabled={filter === tag}
      onClick={() => setFilter(tag)}
    >
      {tag}
    </button>
 )
}
export default GradientTagButton 

