"use server"

import { getAllUsersApi } from "@/services/authServices";
import { getAllCommentsApi } from "@/services/commentsServices";
import { getAllPostsApi } from "@/services/postServices";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = await setCookiesOnReq(cookieStore);
  // console.log(options)
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllPostsApi(),
      getAllCommentsApi(options),
    ]);

    // console.log(data[0],data[1],data[2])
    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    console.error("خطا", error?.response?.data?.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}

export async function fetchLatestPosts() {
  // Artificially delay a response for demo purposes.
  // Don't do this in production :)

  // console.log('Fetching revenue data...');
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // You can probably combine these into a single SQL query
  // However, we are intentionally splitting them to demonstrate
  // how to initialize multiple queries in parallel with JS.
  try {
    const { posts } = await getAllPostsApi("sort=latest&limit=5");
    return posts;
  } catch (error) {
    console.error("خطا", error);
    throw new Error(error?.resonse?.data?.message);
  }
}
