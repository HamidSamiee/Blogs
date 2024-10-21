import http from "./httpServices";

export async function getPostBySlug(slug){

    const res = await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}` );
    const {data:{data}}=res;
    const {post}=data || {};
    return post
}