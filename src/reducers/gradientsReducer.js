export const gradientsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_SUCCESS':
      // fonction unique tags
      function allTags(list) {
        let listTotal = []
        for (let element of list) {
          if ('tags' in element) {
            listTotal = listTotal.concat(element.tags)
          }
        }
        const listTagsUnique = []
        listTotal.forEach((el) => {
          if (!listTagsUnique.includes(el)) {
            //listTagsUnique = listTagsUnique.concat([el])
            listTagsUnique.push(el)
          }
        })
        return listTagsUnique
      }
      return {
        ...state,
        loading: false,
        gradientsList: action.payload,
        uniqueTags: allTags(action.payload),
        loaded: true,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loaded: false,
        error: action.payload,
      }

    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    default:
      throw new Error(`Wrong input in fetchreducer: ${action.type}`)
  }
}


/* import { allTags } from "../gradients"

export const gradientsReducer = (state, action) => {
  // FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE, FILTER
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        gradients: action.payload,
        uniqueTag: allTags(action.payload),
        filteredGradient: action.payload,
        loading: false,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
      case "FILTER":
      return {
        ...state,
        filter: action.payload,
        filteredGradient: state.gradient.filter(el => {
          if (action.payload === "all") {
            return true
          }
          return el.tags.includes(action.payload)
        }),
        loading: false,
      }

    default:
      throw new Error(
        `Unsupported action type ${action.type} in gradientsReducer`,
      )
  }
} */
