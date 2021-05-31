// src/components/GradientsSelect.js
import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
import {GradientsContext} from "../context/GradientsContext"

const GradientsSelect = () => {
  const { filter, setFilter } = useContext(FilterContext)
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }  
  const { state } = useContext(GradientsContext)
  // comme avant
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
        {state.uniqueTags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
