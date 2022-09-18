import React, { memo, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { VideoDetail } from "../components/VideoDetail/VideoDetail";
import { SideList } from "../components/SideList/SideList" 
import { Store } from "../store";
import { fetchRelatedData, fetchSelectedData } from "../api";
import { useLocation } from "react-router-dom";


export const Watch = memo(() => {
  const {globalState, setGlobalState} = useContext(Store)
  const location = useLocation()
  const setVideos = async() => {
    const searchParams = new URLSearchParams(location.search)
    console.log('searchParams',searchParams.get('v'));
    const id = searchParams.get('v')

    if (id) {
      const [selected, related] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
      console.log("selected",selected);
      setGlobalState({type: 'SET_SELECTED', payload: {selected: selected.data.items.shift()}})
      // setGlobalState({type: 'SET_RELATED', payload: {related: selected.data.items}})
      const dataArray = related.data.items;
      for (var i = 0; i < dataArray.length; i++) {
        if (!dataArray[i].hasOwnProperty('snippet')) {//　 ←もしsnippetがなかったら
          dataArray.splice(i, 1)//　　　　　　　　　　　　　　←その要素を配列から排除
        }
      }
      setGlobalState({ type: "SET_RELATED", payload: { related: dataArray } })

    }
  }

  useEffect(() => {
    setVideos();
  },[location.search])

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
});

