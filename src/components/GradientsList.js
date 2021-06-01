// src/components/GradientsList.js
import {useContext} from "react"
// import { gradients } from "./../gradients"
import Gradient from "./Gradient"
import {FilterContext} from "./../context/FilterContext"
import {GradientsContext} from "../context/GradientsContext"

const GradientsList = props => {
    const {filter} = useContext(FilterContext)
    const {state} = useContext(GradientsContext)
    const list = state.gradientsList.filter(el => {
      if (filter === "all") {
        return true
      }
      return el.tags.includes(filter)
    })
    return ( 
    <ul className = "row list-unstyled" > {
        list.map(el => {
          const {name, start, end,tags = [], id} = el
          return (<Gradient key = {name}
            colorStart = {start}
            colorEnd = {end}
            name = {name}
            tags = {tags}
            id = {id}
            />)
        })} 
      </ul>)
    }

    export default GradientsList