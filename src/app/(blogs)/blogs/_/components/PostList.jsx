// import http from '@/services/httpServices';
import React from 'react'
import CoverImage from './CoverImage';
import Link from 'next/link';
import { ClockIcon } from '@heroicons/react/24/outline';
import Author from './Author';
import PostInteraction from './PostInteraction';

const PostList = async ({posts}) => {
 
  return (
    <div className='grid grid-cols-12 gap-8'>
        {
          posts.map((post)=><div className='col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-300 p-2 rounded-lg' key={post._id}> 
            {/* post  image  */}
              <CoverImage {...post} />
              <div className="h-[120px] flex flex-col justify-between ">
            {/*  post  title  */}
                  <div className="">
                    <Link href={`/blogs/${post.slug}`}>
                      <h2 className='font-bold my-4 text-secondary-700 line-clamp-1'>
                          {
                            post.title
                          }
                      </h2>
                    </Link>
                  </div>
            {/*   post Auther  -   readingTime  */}
                  < div className=" flex items-center justify-between">
                      <Author {...post.author} />
                      <div className="flex items-center gap-1 text-[10px]">
                          <ClockIcon className='w-4 h-4 stroke-secondary-500' />
                          <span className="ml-1">خواندن : </span>
                          <span className="ml-1 leading-3">{post.readingTime}</span>
                          <span className="ml-1">دقیقه</span>
                      </div>
                  </div>
              </div>
              <PostInteraction post={post} />
            {/* {console.log(post.isLiked)} */}
           </div>)
        }
    </div>
  )
}

export default PostList