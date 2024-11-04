import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Clock, Film, Image, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

interface CreatePostProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePost = ({ isOpen, onClose }: CreatePostProps) => {
  const [postType, setPostType] = useState<'video' | 'image' | 'text'>('video');
  const [caption, setCaption] = useState('');
  const [unlockDate, setUnlockDate] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation logic here
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed inset-0 flex items-center justify-center p-4"
        >
          <div className="bg-dark-800 rounded-2xl w-full max-w-lg shadow-xl border border-dark-700">
            <div className="flex justify-between items-center p-4 border-b border-dark-700">
              <h2 className="text-xl font-semibold text-gray-100">Create Time Capsule</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-dark-700 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setPostType('video')}
                  className={`flex-1 p-3 rounded-lg flex items-center justify-center space-x-2 ${
                    postType === 'video'
                      ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50'
                      : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                  }`}
                >
                  <Film className="h-5 w-5" />
                  <span>Video</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('image')}
                  className={`flex-1 p-3 rounded-lg flex items-center justify-center space-x-2 ${
                    postType === 'image'
                      ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50'
                      : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                  }`}
                >
                  <Image className="h-5 w-5" />
                  <span>Image</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPostType('text')}
                  className={`flex-1 p-3 rounded-lg flex items-center justify-center space-x-2 ${
                    postType === 'text'
                      ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-500/50'
                      : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
                  }`}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Text</span>
                </button>
              </div>

              {(postType === 'video' || postType === 'image') && (
                <div className="relative">
                  <input
                    type="file"
                    accept={postType === 'video' ? 'video/*' : 'image/*'}
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-dark-600 rounded-lg cursor-pointer hover:border-purple-500/50 transition-colors ${
                      preview ? 'border-none' : ''
                    }`}
                  >
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <Upload className="h-10 w-10 mb-2" />
                        <p className="text-sm">Click to upload {postType}</p>
                      </div>
                    )}
                  </label>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Caption
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 placeholder-gray-500"
                  placeholder="Write a caption for your time capsule..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Unlock Date
                </label>
                <div className="relative">
                  <input
                    type="datetime-local"
                    value={unlockDate}
                    onChange={(e) => setUnlockDate(e.target.value)}
                    min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                    className="w-full px-3 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 pr-10"
                  />
                  <Clock className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
                >
                  Create Time Capsule
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};