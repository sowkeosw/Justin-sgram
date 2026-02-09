import React from 'react';
import { Post } from '../types';
import { Heart, MessageCircle } from 'lucide-react';

interface PostGridProps {
    posts: Post[];
    onPostClick: (post: Post) => void;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, onPostClick }) => {
    return (
        <div className="grid grid-cols-3 gap-0.5 md:gap-4 pb-16">
            {posts.map((post) => (
                <div 
                    key={post.id} 
                    className="relative aspect-square cursor-pointer group overflow-hidden bg-gray-100"
                    onClick={() => onPostClick(post)}
                >
                    <img 
                        src={post.imageUrl} 
                        alt="Post" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold hidden md:flex">
                        <div className="flex items-center gap-2">
                            <Heart className="w-6 h-6" fill="white" />
                            <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-6 h-6" fill="white" />
                            <span>{post.comments.length}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostGrid;