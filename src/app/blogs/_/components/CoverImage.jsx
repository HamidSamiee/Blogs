import Image from "next/image"
import Link from "next/link"


const CoverImage = ({coverImageUrl,title,slug}) => {
  return (
    <Link href={`/blogs/${slug}`}>
        <Image 
                src={coverImageUrl} 
                alt={title} 
                className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out" 
                fill 
                sizes='100vw'
        />
    </Link>
  )
}

export default CoverImage