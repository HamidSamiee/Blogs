import http from "@/services/httpServices";
import Link from "next/link";

async function CategoryList() {

    // const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_URL}/category/list` );
    // const { data : {categories}  } = await res.json();
    // console.log(categories)
    const res=await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list` );
    const {data:{data}}=res;
    const {categories}=data;
    

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  )
}

export default CategoryList