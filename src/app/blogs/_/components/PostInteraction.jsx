import ButtonIcon from '@/ui/ButtonIcon'
import { toPersianDigits } from '@/utils/toPersianDigits'
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PostInteraction = ({post}) => {
  return (
    <div className='flex items-center justify-end gap-x-2'>
        <ButtonIcon variant="secondary">
            <ChatBubbleOvalLeftEllipsisIcon />
            <span>{toPersianDigits(post.commentsCount)}</span>
        </ButtonIcon>
        <ButtonIcon variant="red">
            <HeartIcon />
        </ButtonIcon>
        <ButtonIcon variant="primary">
            <BookmarkIcon />
        </ButtonIcon>
    </div>
  )
}

export default PostInteraction