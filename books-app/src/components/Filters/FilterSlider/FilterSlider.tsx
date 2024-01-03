import {  useState } from "react";
import styles from "./FilterSlider.module.css";

interface FilterSliderProps {
  filterCriteria: string;
  filterValue: number; 
  setFilterValue: (filterValue: number) => void
  setFilterChoice: (filterCriteria: string) => void
}
const FilterSlider = ({ filterCriteria, filterValue, setFilterValue, setFilterChoice }: FilterSliderProps) => {
  const [show, setShow] = useState<boolean>(false);

  // toggle visibility of the slider and set the filter choice when button is clicked
  const handleClick = () => {
    setShow(!show);
    setFilterChoice(filterCriteria);
  }

  // handle changes in the slider value and updates the filter value accordingly
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(parseInt(e.target.value));
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        {filterCriteria} {">="} {filterValue}
      </button>
      <input 
        className={show ? styles.sliderVisible :  styles.sliderHidden}
        type="range"
        min="0"
        max="5"
        value={filterValue} 
        
        onChange={handleOnChange}
      />
    </div>
    

  )
}

export default FilterSlider;