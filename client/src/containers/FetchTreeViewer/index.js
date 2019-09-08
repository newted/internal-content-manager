import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import JSONTree from "react-json-tree";
import theme from "./flatTheme";

const FetchTreeViewer = ({ model, dataFetchUrl, actionType }) => {
  const source = useSelector(state => state.source);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (dataFetchUrl) {
        const res = await axios.get(dataFetchUrl);
        dispatch({ type: actionType, payload: res.data });
      }
    };
    fetchData();
  }, [dispatch, dataFetchUrl, actionType]);

  return <JSONTree data={source} theme={theme} invertTheme={true} />;
};

export default FetchTreeViewer;
