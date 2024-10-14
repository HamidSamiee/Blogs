import PostList from "@/app/blogs/_/components/PostList"
import { Suspense } from "react"
import Loading from "../Loading"


const BlogsPage = () => {
  return (
    <div className="">
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
        
    </div>
  )
}

export default BlogsPage