import React, { useState, useEffect } from 'react';
import { Post } from '../types';
import { Heart, MessageCircle, Send, Bookmark, X, MoreHorizontal } from 'lucide-react';

interface PostModalProps {
    post: Post;
    onClose: () => void;
    userAvatar: string;
    username: string;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose, userAvatar, username }) => {
    const [liked, setLiked] = useState(post.isLiked);
    const [likesCount, setLikesCount] = useState(post.likes);

    const handleLike = () => {
        if (liked) {
            setLikesCount(prev => prev - 1);
        } else {
            setLikesCount(prev => prev + 1);
        }
        setLiked(!liked);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
            {/* Close Button Mobile */}
            <button className="absolute top-4 right-4 text-white md:hidden" onClick={onClose}>
                <X className="w-8 h-8" />
            </button>

            <div 
                className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-fade-in" 
                onClick={e => e.stopPropagation()}
            >
                {/* Image Section */}
                <div className="w-full md:w-[60%] bg-black flex items-center justify-center bg-gray-100">
                    <img 
                        src={post.imageUrl} 
                        alt="Post detail" 
                        className="max-h-[50vh] md:max-h-[90vh] w-full object-contain"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-[40%] flex flex-col h-[50vh] md:h-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100 shrink-0">
                        <div className="flex items-center gap-3">
                            <img src={userAvatar} alt="user" className="w-8 h-8 rounded-full object-cover" />
                            <div>
                                <span className="text-sm font-bold text-gray-900 block hover:underline cursor-pointer">{username}</span>
                                {post.location && <span className="text-xs text-gray-500 block">{post.location}</span>}
                            </div>
                        </div>
                        <MoreHorizontal className="w-5 h-5 text-gray-900 cursor-pointer" />
                    </div>

                    {/* Comments Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                        {/* Caption */}
                        <div className="flex gap-3">
                            <img src={userAvatar} alt="user" className="w-8 h-8 rounded-full object-cover shrink-0" />
                            <div className="text-sm">
                                <span className="font-bold mr-2">{username}</span>
                                <span className="text-gray-800 whitespace-pre-wrap">{post.caption}</span>
                                <div className="mt-1 text-xs text-gray-400">{post.timestamp}</div>
                            </div>
                        </div>

                        {/* Comments List */}
                        {post.comments.map(comment => (
                            <div key={comment.id} className="flex gap-3">
                                {/* Default avatar for comments */}
                                <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt={comment.username} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 text-sm">
                                    <span className="font-bold mr-2">{comment.username}</span>
                                    <span className="text-gray-800">{comment.text}</span>
                                    <div className="flex gap-3 mt-1 text-xs text-gray-400 font-medium">
                                        <button className="hover:text-gray-600">Reply</button>
                                    </div>
                                </div>
                                <button className="self-start mt-1">
                                    <Heart className={`w-3 h-3 ${comment.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Actions Footer */}
                    <div className="border-t border-gray-100 p-4 shrink-0 bg-white">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex gap-4">
                                <button onClick={handleLike} className="transition-transform active:scale-90">
                                    <Heart className={`w-7 h-7 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-900 hover:text-gray-600'}`} />
                                </button>
                                <button className="transition-transform active:scale-90">
                                    <MessageCircle className="w-7 h-7 text-gray-900 hover:text-gray-600" />
                                </button>
                                <button className="transition-transform active:scale-90">
                                    <Send className="w-7 h-7 text-gray-900 hover:text-gray-600" />
                                </button>
                            </div>
                            <button>
                                <Bookmark className="w-7 h-7 text-gray-900 hover:text-gray-600" />
                            </button>
                        </div>
                        <div className="font-bold text-sm mb-1">{likesCount.toLocaleString()} likes</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-3">{post.timestamp}</div>
                        
                        {/* Comment Input */}
                        <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
                            <div className="w-6 h-6 rounded-full bg-gray-200 text-[10px] flex items-center justify-center text-gray-500">
                                You
                            </div>
                            <input 
                                type="text" 
                                placeholder="Add a comment..." 
                                className="flex-1 text-sm outline-none placeholder-gray-400"
                            />
                            <button className="text-blue-500 font-semibold text-sm opacity-50 hover:opacity-100">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;