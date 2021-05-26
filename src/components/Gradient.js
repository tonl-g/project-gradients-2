import GradientTitle from './GradientTitle' /*  Need Router pour ID */
import GradientPill from './GradientPill'
import GradientCode from './GradientCode'
import GradientTags from './GradientTags'
import GradientFullscreenButton from './GradientFullscreenButton'

const Gradient = ({ colorStart, colorEnd, name, tags }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} />
        <GradientFullscreenButton  /*  Need Router pour ID */ />
      </div>
    </li>
  )
}

export default Gradient

/* import GradientTitle from './GradientTitle'
import GradientPill from './GradientPill'
import GradientCode from './GradientCode'
import GradientTags from './GradientTags'
import GradientFullscreenButton from './GradientFullscreenButton'

const Gradient = ({ colorStart, colorEnd, name, tags, filter, setFilter }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} filter={filter} setFilter={setFilter} />
        <GradientFullscreenButton  />
      </div>
    </li>
  )
}

export default Gradient */
