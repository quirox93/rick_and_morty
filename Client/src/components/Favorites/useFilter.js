import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { useEffect, useState } from "react";
import { removeFav } from "../../redux/actions";
const useFilter = (access) => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const valDef = { orderCards: "", filterCards: "" };
  const [values, setvalues] = useState(valDef);

  const handler = (e) => {
    const type = e.target.name;
    setvalues({ ...valDef, [type]: e.target.value });
    dispatch(actions[type](e.target.value));
  };

  useEffect(() => {
    dispatch(removeFav(access, 0));
  }, []);
  return { myFavorites, values, handler };
};

export default useFilter;
