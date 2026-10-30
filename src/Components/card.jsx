import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
            <div className='overflow-hidden h-80 w-80 rounded-xl'>
                <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
            </div>
        </a>
    </div>
  )
}

export default Card