import React, { memo, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchSearchData } from "../api";
import Layout from "../components/Layout";
import { Store } from "../store";
import { VideoGrid } from "../components/VideoGrid/VideoGrid"
import {VideoGridItem} from "../components/VideoGridItem/VideoGridItem"

export const Search = memo(() => {
  const location = useLocation()
  const {globalState , setGlobalState} = useContext(Store)

  const setSearchResult = async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query')
    // console.log(query)
    if (query) {
      await fetchSearchData(query).then((res) => {
        setGlobalState({type: 'SET_SEARCHED', payload: {searched: res.data.items}})
        // console.log("globalState", globalState)
      })
    }
  }

  useEffect(()=>{
    setSearchResult()
  },[location.search])

  return (
    <Layout>
      <VideoGrid>
      {
          globalState.searched ? globalState.searched.map((search) => {
            return (
              <VideoGridItem 
                id={search.id.videoId}
                key={search.id.videoId}
                src={search.snippet.thumbnails.high.url}
                title={search.snippet.title}
              />
            )
          }) : <span>NO DATA</span>
        }
      </VideoGrid>
    </Layout>
  );
});