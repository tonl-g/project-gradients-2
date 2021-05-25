/* // src/components/GradientsSelect.js
import { useContext } from "react"
import { uniqueTags as tags } from "../gradients"
// import { FilterContext } from "../context/FilterContext"

const GradientsSelect = () => {
  const { filter, setFilter } = useContext(FilterContext)
  // comme avant
}

export default GradientsSelect */

import { uniqueTags as tags } from '../gradients'

const GradientsSelect = (props) => {
  const { filter, setFilter } = props
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {tags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
