import {  useState } from "react";
import styles from "./FilterSlider.module.css";

interface FilterSliderProps {
  filterCriteria: string;
  filterValue: number; 
  setFilterValue: (filterValue:number) => void
  setFilterChoice: (filterCriteria: string) => void
}
const FilterSlider = ({ filterCriteria, filterValue, setFilterValue, setFilterChoice }: FilterSliderProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
    setFilterChoice(filterCriteria);
  }
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(parseInt(e.target.value));
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        {filterCriteria}
      </button>
      <input 
        className={show ? styles.sliderVisible :  styles.sliderHidden}
        type="range"
        min="0"
        max="10"
        value={filterValue} 
        onChange={handleOnChange}
      />
    </div>
    

  )
}

export default FilterSlider;