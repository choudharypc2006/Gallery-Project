import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "./Components/card"
const App = () => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(1)
  const getPics=async ()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setImages(response.data)
  }

  useEffect(()=>{
    getPics()
  },[index])
  let showImages = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
  if(images.length>0){
    showImages = images.map((elem)=>{
      return <Card key={elem.id} elem={elem}/>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex justify-center h-[82%] flex-wrap gap-4 p-2'>
        {showImages}
      </div>
      <div className='flex justify-center p-6 m-2 gap-4 items-center'>
        <button disabled={index==1} className='disabled:opacity-50 disabled:cursor-not-allowed bg-amber-400 text-lg cursor-pointer active:scale-95 text-black rounded px-3 py-2'
          onClick={()=>{
            if(index!=1){
              setIndex(index-1)
              setImages([])
            }
        }}>Prev</button>
        <h2>Page {index}</h2>
        <button className='bg-amber-400 text-lg cursor-pointer active:scale-95 text-black rounded px-3 py-2'
          onClick={()=>{
            setIndex(index+1)
            setImages([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default App