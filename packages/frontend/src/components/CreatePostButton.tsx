import React from 'react';
import { Plus } from 'lucide-react';

interface CreatePostButtonProps {
  onClick: () => void;
}

export const CreatePostButton = ({ onClick }: CreatePostButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 p-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
};