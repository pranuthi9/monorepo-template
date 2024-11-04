import React from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { Heart, MessageCircle, Share2, Lock, Timer, Eye, Calendar } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  layout?: 'grid' | 'list';
}

export const PostCard = ({ post, layout = 'grid' }: PostCardProps) => {
  const timeUntilUnlock = formatDistanceToNow(new Date(post.unlockDate), {
    addSuffix: true,
  });

  return (
    <div
      className={`bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-dark-700 ${
        layout === 'list' ? 'flex gap-4' : ''
      }`}
    >
      <div
        className={`relative ${
          layout === 'list' ? 'w-48 h-48' : 'aspect-square'
        }`}
      >
        <img
          src={post.thumbnail || post.content}
          alt={post.caption}
          className="w-full h-full object-cover"
        />
        {post.isLocked && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white">
            <Lock className="h-8 w-8 mb-2 text-purple-400" />
            <p className="text-sm font-medium">Unlocks {timeUntilUnlock}</p>
          </div>
        )}
        {post.type === 'video' && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{post.views?.toLocaleString() || 0} views</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-purple-400 flex items-center">
            <Timer className="inline-block h-4 w-4 mr-1" />
            {timeUntilUnlock}
          </p>
          {post.type === 'video' && (
            <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full">
              Video
            </span>
          )}
        </div>
        
        <p className="text-gray-100 font-medium line-clamp-2 mb-3">{post.caption}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-dark-400 hover:text-red-400 transition-colors">
              <Heart className="h-5 w-5 mr-1" />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center text-dark-400 hover:text-blue-400 transition-colors">
              <MessageCircle className="h-5 w-5 mr-1" />
              <span className="text-sm">{post.comments}</span>
            </button>
            <button className="flex items-center text-dark-400 hover:text-green-400 transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};