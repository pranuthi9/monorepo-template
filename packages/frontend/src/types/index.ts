export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  userId: string;
  type: 'image' | 'video' | 'text';
  content: string;
  thumbnail?: string;
  caption: string;
  unlockDate: Date;
  createdAt: Date;
  likes: number;
  comments: number;
  views?: number;
  isLocked: boolean;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: Date;
}