import { CircleChevronDownIcon } from "lucide-react"

import "./SearchBarPartner.css"

function SearchBarPartner() {
  return(
    <div className="containerSearchBar">
    <div className="searchBar">
      <input type="text" placeholder="Rechercher"/>
      <CircleChevronDownIcon className="chevronDown"/>
    </div>
    </div>
  )
}

export default SearchBarPartner
