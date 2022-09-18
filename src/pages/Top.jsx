import React, { memo, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { fetchPopularData } from '../api/index'
import { Store } from '../store/index'
import { VideoGrid } from "../components/VideoGrid/VideoGrid";
import { VideoGridItem } from "../components/VideoGridItem/VideoGridItem";

export const Top = memo(() => {
  const {globalState, setGlobalState} = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })

  }, [])
  return (

    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem 
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.high.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  );
});