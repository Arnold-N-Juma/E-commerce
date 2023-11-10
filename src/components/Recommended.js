
import Buttons from './Buttons'

export default function Recommended({handleSort}) {
  const handleSortBy = (criteria) => {
    handleSort(criteria);
  };
  return (
    <div>
      <h2 className="recommended-title" > Recommended</h2>
      <div className="recommended-flex">
     
      <Buttons onClick={() => handleSortBy("")} value="" title="All"/>
      <Buttons onClick={() => handleSortBy("Nike")} value="Nike" title="Nike"/>
      <Buttons onClick={() => handleSortBy("Adidas")}value="Adidas" title="Adidas"/>
      <Buttons onClick={() => handleSortBy("Puma")} value="Puma" title="Puma"/>
      <Buttons onClick={() => handleSortBy("Vans")} value="Vans" title="Vans"/>

      </div>
    </div>
  )
}
