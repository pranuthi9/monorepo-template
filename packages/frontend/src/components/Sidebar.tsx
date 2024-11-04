import React from 'react';
import { motion } from 'framer-motion';
import { Post } from '../types';
import { PostCard } from './PostCard';

interface PostGridProps {
  posts: Post[];
  layout?: 'grid' | 'list';
}

export const PostGrid = ({ posts, layout = 'grid' }: PostGridProps) => {
  return (
    <div
      className={`${
        layout === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-6'
      }`}
    >
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PostCard post={post} layout={layout} />
        </motion.div>
      ))}
    </div>
  );
};