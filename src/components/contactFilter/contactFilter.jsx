import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';

export function ContactFilter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <>
      <div>
        <p>Search contact by name</p>
        <input type="text" name="filter" onChange={handleFilterChange} />
      </div>
    </>
  );
}
