import Image from "next/image"
import Link from "next/link"


const CoverImage = ({ coverImageUrl, title, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image
          src={coverImageUrl}
          alt={title}
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default CoverImage