import React from 'react';
import { UserProfile } from '../types';
import { BadgeCheck } from 'lucide-react';

interface ProfileHeaderProps {
    user: UserProfile;
    onMessageClick: () => void;
    onFollowingClick: () => void;
    onFollowersClick: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onMessageClick, onFollowingClick, onFollowersClick }) => {
    // Determine badge style based on rank
    const rank = user.rank || "Alpha";
    const badgeStyle = rank === "Omega" 
        ? "text-pink-600 bg-pink-100 border border-pink-200" 
        : "text-indigo-500 bg-indigo-50 border border-indigo-100";

    return (
        <div className="px-4 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
                {/* Avatar */}
                <div className="relative">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                        <img 
                            src={user.avatarUrl} 
                            alt={user.name} 
                            className="w-full h-full rounded-full object-cover border-2 border-white"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="flex-1 flex justify-around ml-4 text-center">
                    <div className="flex flex-col cursor-pointer hover:opacity-70 transition-opacity">
                        <span className="font-bold text-lg text-gray-900">{user.postsCount}</span>
                        <span className="text-sm text-gray-500">Posts</span>
                    </div>
                    <div 
                        className="flex flex-col cursor-pointer hover:opacity-70 transition-opacity"
                        onClick={onFollowersClick}
                    >
                        <span className="font-bold text-lg text-gray-900">{user.followers}</span>
                        <span className="text-sm text-gray-500">Followers</span>
                    </div>
                    <div 
                        className="flex flex-col cursor-pointer hover:opacity-70 transition-opacity"
                        onClick={onFollowingClick}
                    >
                        <span className="font-bold text-lg text-gray-900">{user.following}</span>
                        <span className="text-sm text-gray-500">Following</span>
                    </div>
                </div>
            </div>

            {/* Bio Info */}
            <div className="space-y-1">
                <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-900">{user.name}</span>
                    {user.isVerified && <BadgeCheck className="w-4 h-4 text-blue-500" fill="currentColor" />}
                    <span className="text-xs text-gray-400 px-2 py-0.5 bg-gray-100 rounded-full">He/Him</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeStyle}`}>
                        {rank}
                    </span>
                </div>
                <div className="text-sm text-gray-800 whitespace-pre-line">
                    {user.bio.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                {user.link && (
                    <a href={user.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-900 hover:underline block mt-1 truncate">
                        🔗 {user.linkText || user.link}
                    </a>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
                <button 
                    onClick={onFollowingClick}
                    className="flex-1 bg-gray-100 text-gray-900 text-sm font-semibold py-1.5 rounded-lg hover:bg-gray-200 transition"
                >
                    Following
                </button>
                <button 
                    onClick={onMessageClick}
                    className="flex-1 bg-gray-100 text-gray-900 text-sm font-semibold py-1.5 rounded-lg hover:bg-gray-200 transition"
                >
                    Message
                </button>
                <button className="bg-gray-100 px-2 rounded-lg hover:bg-gray-200">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProfileHeader;