
// import { Suspense } from "react"
// import Loading from "../Loading"
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/toPersianDigits";
import PostList from "../_/components/PostList";
import { getAllPostsApi } from "@/services/postServices";



const BlogsPage = async ({searchParams}) => {

    const queries = queryString.stringify(searchParams);
    // console.log(searchParams)
    const cookieStore = cookies();
    const options = await setCookieOnReq(cookieStore);
    const {posts} = await getAllPostsApi(queries , options);

    const {search} = searchParams;
  return (
    <>
      {
        search ? <p className="mb-4 text-secondary-700">
          {`نشان دادن  ${toPersianDigits(posts.length)} نتیجه برای ` }
          <span className="font-bold">&quot; {search} &quot;</span>
        </p> 
        : null
      }
      <PostList posts={posts} />
    </>
      
  )
}

export default BlogsPage