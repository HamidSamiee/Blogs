import React from 'react'
import { Card } from './_components/Cards';
import { fetchCardData } from '@/lib/data';

const  Profile = async() => {
const { numberOfComments, numberOfPosts, numberOfUsers } = await fetchCardData();

  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card title="کاربران" value={numberOfUsers} type="users" />
      <Card title="پست ها" value={numberOfPosts} type="posts" />
      <Card title="نظرات" value={numberOfComments} type="comments" />
    </div>
  );
}

export default Profile