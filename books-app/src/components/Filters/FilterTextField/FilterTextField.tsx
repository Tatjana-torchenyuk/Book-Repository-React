import {  useState } from "react";
import styles from "./FilterTextField.module.css";

interface FilterTextFieldProps {
  filterCriteria: string;
  filterValue: string; 
  setFilterValue: (filterValue:string) => void
  setFilterChoice: (filterCriteria: string) => void
}
const FilterTextField = ({ filterCriteria, filterValue, setFilterValue, setFilterChoice }: FilterTextFieldProps) => {
  const [show, setShow] = useState<boolean>(false);

  // toggle visibility of the input field and set the filter choice when button is clicked
  const handleClick = () => {
    setShow(!show);
    setFilterChoice(filterCriteria);
  }

  // handle changes in the search input value and update the filter value accordingly
  const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>
        {filterCriteria}
      </button>
      <input 
        className={show ? styles.searchFieldVisible :  styles.searchFieldHidden}
        type="text" 
        value={filterValue} 
        onChange={handleOnChange} 
      />
    </div>
    
  )
}

export default FilterTextField;