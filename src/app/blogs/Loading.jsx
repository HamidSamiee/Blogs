import Spinner from '@/ui/Spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <h2 className="text-2xl font-bold mb-5">در حال بار گذاری اطلاعات</h2> 
      <Spinner /> 
    </div>
  )
}

export default Loading