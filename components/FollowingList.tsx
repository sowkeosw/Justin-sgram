import React, { useState } from 'react';
import { FollowUser } from '../types';
import { ChevronLeft, Search } from 'lucide-react';

interface FollowingListProps {
    users: FollowUser[];
    onBack: () => void;
    username: string;
    initialTab: 'followers' | 'following';
    followersCount: string;
    followingCount: number;
}

const FollowingList: React.FC<FollowingListProps> = ({ users, onBack, username, initialTab, followersCount, followingCount }) => {
    const [activeTab, setActiveTab] = useState<'followers' | 'following'>(initialTab);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter(user => 
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center px-4 py-3 border-b border-gray-100 relative">
                <button onClick={onBack} className="absolute left-4 z-10">
                    <ChevronLeft className="w-7 h-7 text-gray-900" />
                </button>
                <div className="flex-1 text-center">
                    <h1 className="font-bold text-base text-gray-900">{username}</h1>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
                <div 
                    className={`flex-1 text-center py-3 font-semibold cursor-pointer ${activeTab === 'followers' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('followers')}
                >
                    {followersCount} Followers
                </div>
                <div 
                    className={`flex-1 text-center py-3 font-semibold cursor-pointer ${activeTab === 'following' ? 'border-b-2 border-black text-black' : 'text-gray-400'}`}
                    onClick={() => setActiveTab('following')}
                >
                    {followingCount} Following
                </div>
            </div>

            {/* Search */}
            <div className="px-4 py-3">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-4 pb-4">
                <div className="py-2 text-sm font-bold text-gray-900">Sorted by Default</div>
                
                {filteredUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                                <img src={user.avatarUrl} alt={user.username} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm text-gray-900">{user.username}</span>
                                <span className="text-sm text-gray-500">{user.name}</span>
                            </div>
                        </div>
                        <button className="bg-gray-100 text-gray-900 font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-gray-200 transition">
                            {activeTab === 'following' ? 'Following' : 'Remove'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FollowingList;