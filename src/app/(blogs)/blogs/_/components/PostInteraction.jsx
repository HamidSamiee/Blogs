"use client"

import { bookmarkPostApi, likePostApi } from '@/services/postServices'
import ButtonIcon from '@/ui/ButtonIcon'
import { toPersianDigits } from '@/utils/toPersianDigits'
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon as SolidBookmarkIcon, HeartIcon as SolidHeartIcon} from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const PostInteraction = ({post}) => {

  const router = useRouter();

  const heartHandler = async (postId)=>{
    try {
      const {message} = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  const bookmarkHandler = async (postId)=>{
    try {
      const {message} = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className='flex items-center justify-end gap-x-2'>
        <ButtonIcon variant="secondary">
            <ChatBubbleOvalLeftEllipsisIcon />
            <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
        <ButtonIcon variant="red" onClick={()=>heartHandler(post._id)}>
            { post.isLiked ? <SolidHeartIcon /> : <HeartIcon /> }
        </ButtonIcon>
        <ButtonIcon variant="primary" onClick={()=>bookmarkHandler(post._id)}>
            {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
        </ButtonIcon>
    </div>
  )
}

export default PostInteraction