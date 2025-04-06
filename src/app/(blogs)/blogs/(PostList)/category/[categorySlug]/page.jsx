import { getAllPostsApi } from '@/services/postServices';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';
import React from 'react'
import PostList from '../../../_/components/PostList';

const Category = async ({params , searchParams}) => {

   const {categorySlug }= params;
   const queries = queryString.stringify(searchParams) + `&categorySlug=${categorySlug}`;

   // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}&categorySlug=${categorySlug}`);
   // const {data} = await res.json();  
   // const {posts} = data || {};

    const cookieStore = cookies();
    const options = await setCookieOnReq(cookieStore);
    const {posts} = await getAllPostsApi(queries , options);

  return (
    <div>
       {
        posts?.length == 0 ? 
            <p className='text-lg text-secondary-600'>پستی در این دسته بندی پیدا نشد</p>
        :
            <div>
                <PostList posts={posts} />
            </div>
       } 
    </div>  
  )
}

export default Category