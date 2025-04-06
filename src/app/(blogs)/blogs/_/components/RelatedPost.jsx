import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPost({ posts }) {

  // console.log(posts)
  return (
    <div className=" mb-10">
      <p className="text-xl mb-4">پست های مرتبط</p>
      {/* <div className="grid gap-4 grid-cols-12">
        {posts.map((post) => {
          return (
            <div
              key={post._id}
              className="relative h-[300px]  col-span-12 md:col-span-6 lg:col-span-4"
            >
              <CoverImage {...post} />
              <div className="  flex items-center justify-between">
                <Author {...post.author} />
                <p>{post.title}</p>
              </div>
            </div>
          );
        })}
      </div> */}
           <div className='grid grid-cols-12 gap-8'>
            {
              posts.map((post)=><div className='col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-300 p-2 rounded-lg' key={post._id}> 
                {/* post  image  */}
                  <div className="relative aspect-video rounded-md overflow-hidden">
                    <CoverImage {...post} />
                  </div>
                  <div className="h-[80px] flex flex-col justify-between ">
                {/*  post  title  */}
                      <div className="">
                        <Link href={`/blogs/${post.slug}`}>
                          <h2 className='font-bold my-4 text-secondary-700'>
                              {
                                post.title
                              }
                          </h2>
                        </Link>
                      </div>
                {/*   post Auther  */}
                      < div className=" flex items-center justify-between">
                          <Author {...post.author} />
                      </div>
                  </div>
              </div>)
            }
      </div>
    </div>
  );
}
export default RelatedPost;
