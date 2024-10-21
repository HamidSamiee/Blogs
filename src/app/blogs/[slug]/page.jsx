
// import http from '@/services/httpServices';
import { getPostBySlug } from '@/services/postServices';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({params}){
const post = await getPostBySlug(params.slug);
return{
  title:`پست ${post.title}`
}
}

const SingleBlog = async ({params}) => {

  const post = await getPostBySlug(params.slug)
//  const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.slug}` );
//     const { data:{post} } = await res.json();
// console.log(post);

  if(!post) return notFound()

  return (
    < div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8 text-justify leading-7">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt=''
        />
      </div>
      
    </div>
  )
}

export default SingleBlog 

// {post.related.length > 0 && <RelatedPost posts={post.related} />}
       //  <PostComment post={post} />