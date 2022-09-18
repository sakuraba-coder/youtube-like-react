import React, { useContext, useEffect } from 'react'
import { Store } from '../../store/index'
import { fetchRelatedData} from '../../api/index'
import { SideListItem } from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

export const SideList = () => {
  // const { globalState, setGlobalState} = useContext(Store)
  const { globalState} = useContext(Store)
  
  // const setRelatedVideo = async (id) => {
  //   await fetchRelatedData(id).then((res) => {
  //     const dataArray = res.data.items;
  //     for (var i = 0; i < dataArray.length; i++) {
  //       if (!dataArray[i].hasOwnProperty('snippet')) {//　 ←もしsnippetがなかったら
  //         dataArray.splice(i, 1)//　　　　　　　　　　　　　　←その要素を配列から排除
  //       }
  //     }
  //     setGlobalState({ type: "SET_RELATED", payload: { related: dataArray } })
  //   });
  // }
  // useEffect(() => {
  //   setRelatedVideo(globalState.selected.id)
  //   //eslint-disable-next-line
  // }, [globalState.selected])

  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((video) => {
          return (
            <SideListItem 
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
            />
          )
        }):<span>NO DATA</span>
      }
    </div>
  )
}
