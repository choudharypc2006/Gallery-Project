import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank' rel='noopener noreferrer'>
            <div className='overflow-hidden h-80 w-80 rounded-xl relative group shadow-lg'>
                <img className='h-full w-full object-cover group-hover:scale-105 transition-transform duration-300' src={props.elem.download_url} alt={props.elem.author} />
            <div className='absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent p-3 text-sm font-medium'>{props.elem.author}</div>
            </div>
        </a>
    </div>
  )
}

export default Card