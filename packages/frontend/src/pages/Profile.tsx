import React from 'react';
import { PostGrid } from '../components/PostGrid';
import { samplePosts } from '../data/sampleData';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Latest Memories</h1>
      <PostGrid posts={samplePosts} />
    </div>
  );
};