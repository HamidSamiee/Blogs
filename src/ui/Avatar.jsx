import Image from 'next/image'
import React from 'react'

const Avatar = ({width=24,height=24,src}) => {
  return (
    <div className='rounded-full overflow-hidden border border-secondary-300'>
        <Image
            src={src}
            alt={src}
            width={width}
            height={height}
            className=''
        />
    </div>
  )
}

export default Avatar