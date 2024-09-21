import React, { useState } from 'react'
import Title from '../components/Title'
import { AiFillSmile, AiFillHeart, AiOutlineHeart, AiOutlineComment } from 'react-icons/ai'
import img from './image/scooby.jpeg'

export default function LikePhoto() {
    const [like, setLike] = useState(false);
    const handleClick = () => {
        if (!like) {
            setLike(true); 
            setCount(count + 1)
        } else {
            setLike(false);
        }
    }

    const [count, setCount] = useState(0);
  return (
    <div className='container text-center'>
      <Title text='Like Photo App' />
      <Title classes='subsitite' text={`Likes: ${count}`}/>
      <div 
      className='card card-dark m-auto'
      style={{width: 300, cursor: 'pointer'}}
      >
        <div className="card-header fs-xl">
        <AiFillSmile className='mr-2' />
            <small>Dog</small>
        </div>
            <img
            src={img}
            alt='img'
            style={{ height: "fit-content" }}>
            </img>
            <div className="card-footer fs-xl d-flex"
            style={{
                justifyContent: 'space-between'
            }}>
                <AiOutlineComment/>
                {like ? <AiFillHeart onClick={handleClick} className='text-danger'/> : <AiOutlineHeart onClick={handleClick}/>}
            </div>
        </div>
    </div>
  )
}
