import http from '@/services/httpServices';
import React from 'react'
import CoverImage from './CoverImage';
import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';
import Author from './Author';

const PostList =async () => {

    const res = await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list` );
    const {data:{data}}=res;
    const {posts}=data;
    console.log(posts)
  return (
    <div className='grid grid-cols-12 gap-8'>
        {
          posts.map((post)=><div className='col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-300 p-2 rounded-lg' key={post._id}> 
            <div className="relative aspect-video rounded-md overflow-hidden">
              <CoverImage {...post} />
            </div>
            <div className="h-[120px] flex flex-col justify-between ">
                <div className="">
                  <Link href={`blogs/${post.slug}`}>
                    <h2 className='font-bold my-4 text-secondary-700 line-clamp-2 '>
                        {
                          post.title
                        }
                    </h2>
                  </Link>
                </div>
                <div className=" flex items-center justify-between">
                    <Author {...post.author} />
                    <div className="flex items-center gap-1 text-[10px]">
                        <ClockIcon className='w-4 h-4 stroke-secondary-500' />
                        <span className="ml-1">خواندن : </span>
                        <span className="ml-1 leading-3">{post.readingTime}</span>
                        <span className="ml-1">دقیقه</span>
                    </div>
                </div>
            </div>
            
           </div>)
        }
    </div>
  )
}

export default PostList