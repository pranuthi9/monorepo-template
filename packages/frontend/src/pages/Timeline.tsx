import React from 'react';
import { samplePosts } from '../data/sampleData';
import { PostGrid } from '../components/PostGrid';

export const Timeline = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-100 mb-6">Memory Timeline</h1>
      <PostGrid posts={samplePosts} layout="list" />
    </div>
  );
};