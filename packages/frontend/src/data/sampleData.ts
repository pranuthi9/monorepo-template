import { Post, User } from '../types';

export const sampleUser: User = {
  id: '1',
  username: 'timekeeper',
  name: 'Alex Thompson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  bio: 'Creating memories for the future, one moment at a time ✨',
};

export const samplePosts: Post[] = [
  {
    id: '1',
    userId: '1',
    type: 'image',
    content: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'A message to my future self on graduation day 🎓',
    unlockDate: new Date('2025-06-15'),
    createdAt: new Date('2024-03-15'),
    likes: 124,
    comments: 18,
    views: 1205,
    isLocked: true,
  },
  {
    id: '2',
    userId: '1',
    type: 'video',
    content: 'https://example.com/video2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'First day at my dream job - watch this in 5 years! 💼',
    unlockDate: new Date('2024-12-31'),
    createdAt: new Date('2024-02-28'),
    likes: 89,
    comments: 12,
    views: 3420,
    isLocked: true,
  },
  {
    id: '3',
    userId: '1',
    type: 'video',
    content: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'Wedding day memories to revisit on our 5th anniversary ❤️',
    unlockDate: new Date('2026-08-20'),
    createdAt: new Date('2024-01-15'),
    likes: 256,
    comments: 42,
    views: 5890,
    isLocked: true,
  },
];