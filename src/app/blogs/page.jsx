import PostList from "@/app/blogs/_/components/PostList"
import Spinner from "@/ui/Spinner"
import { Suspense } from "react"


const BlogsPage = () => {
  return (
    <div className="">
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
        
    </div>
  )
}

export default BlogsPage