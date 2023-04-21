import s from  './SearchBar.module.css';
//<button onClick={props.onSearch}>Agregar</button> 
export default function SearchBar(props) {
   return (
      <div className={s.searchBox}>

            <input className={s.searchInput} type="text" name="" placeholder="Search"></input>
            <button className={s.searchButton} href="#">
            <i className={s.materialIcons}>
                search
                </i>
            </button>
        </div>
   );
}
