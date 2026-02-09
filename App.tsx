import React, { useState } from 'react';
import { currentUser, posts, highlights, chats, followingList } from './data';
import { Post, Chat } from './types';
import ProfileHeader from './components/ProfileHeader';
import Stories from './components/Stories';
import PostGrid from './components/PostGrid';
import PostModal from './components/PostModal';
import BottomNav from './components/BottomNav';
import MessagesList from './components/MessagesList';
import ChatDetail from './components/ChatDetail';
import FollowingList from './components/FollowingList';
import SecretView from './components/SecretView';
import { Grid, Lock, ChevronDown, Bell, Menu, UserPlus } from 'lucide-react';

const App: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [activeTab, setActiveTab] = useState<'posts' | 'tagged'>('posts');
    
    // Navigation State
    const [currentView, setCurrentView] = useState<'profile' | 'inbox' | 'following' | 'followers' | 'secret'>('profile');
    const [activeChat, setActiveChat] = useState<Chat | null>(null);

    const handleMessageClick = () => {
        setCurrentView('inbox');
    };

    const handleFollowingClick = () => {
        setCurrentView('following');
    };

    const handleFollowersClick = () => {
        setCurrentView('followers');
    };

    const handleBackToProfile = () => {
        setCurrentView('profile');
    };

    const handleChatSelect = (chat: Chat) => {
        setActiveChat(chat);
    };

    const handleBackToInbox = () => {
        setActiveChat(null);
    };

    const handleStoryClick = (id: string) => {
        // ID '4' is the Secret highlight
        if (id === '4') {
            setCurrentView('secret');
        } else {
            // For other stories, we could implement a story viewer, but for now just console log
            console.log("View story:", id);
        }
    };

    // If Secret View is active
    if (currentView === 'secret') {
        return <SecretView onClose={handleBackToProfile} />;
    }

    // If a specific chat is active, render that
    if (activeChat) {
        return (
             <div className="min-h-screen bg-white md:bg-gray-50 flex justify-center">
                 <div className="w-full md:max-w-[470px] bg-white min-h-screen relative shadow-sm overflow-hidden">
                    <ChatDetail chat={activeChat} onBack={handleBackToInbox} />
                 </div>
            </div>
        );
    }

    // If in inbox view, render message list
    if (currentView === 'inbox') {
        return (
            <div className="min-h-screen bg-white md:bg-gray-50 flex justify-center">
                <div className="w-full md:max-w-[470px] bg-white min-h-screen relative shadow-sm overflow-hidden">
                    <MessagesList 
                        chats={chats} 
                        onChatSelect={handleChatSelect} 
                        onBack={handleBackToProfile} 
                        username={currentUser.username}
                        userAvatar={currentUser.avatarUrl}
                    />
                    <BottomNav user={currentUser} />
                </div>
            </div>
        );
    }

    // If in following or followers view, render list
    if (currentView === 'following' || currentView === 'followers') {
        return (
            <div className="min-h-screen bg-white md:bg-gray-50 flex justify-center">
                <div className="w-full md:max-w-[470px] bg-white min-h-screen relative shadow-sm overflow-hidden">
                    <FollowingList 
                        users={followingList} 
                        onBack={handleBackToProfile} 
                        username={currentUser.username}
                        initialTab={currentView}
                        followersCount={currentUser.followers}
                        followingCount={currentUser.following}
                    />
                    <BottomNav user={currentUser} />
                </div>
            </div>
        );
    }

    // Default Profile View
    return (
        <div className="min-h-screen bg-white md:bg-gray-50 flex justify-center">
            {/* Mobile View Container */}
            <div className="w-full md:max-w-[470px] bg-white min-h-screen relative shadow-sm">
                
                {/* Header Navbar */}
                <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 h-12 flex items-center justify-between">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <Lock className="w-3 h-3 text-gray-900" />
                        <h1 className="font-bold text-lg">{currentUser.username}</h1>
                        <ChevronDown className="w-4 h-4 text-gray-900" />
                        <div className="w-2 h-2 rounded-full bg-red-500 ml-[-4px] mt-[-8px] border border-white"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="w-6 h-6 text-gray-900" />
                        <Menu className="w-6 h-6 text-gray-900" />
                    </div>
                </div>

                {/* Profile Information */}
                <ProfileHeader 
                    user={currentUser} 
                    onMessageClick={handleMessageClick} 
                    onFollowingClick={handleFollowingClick}
                    onFollowersClick={handleFollowersClick}
                />

                {/* Highlights */}
                <Stories stories={highlights} onStoryClick={handleStoryClick} />

                {/* Tab Navigation */}
                <div className="flex border-b border-gray-200">
                    <button 
                        className={`flex-1 py-3 flex justify-center ${activeTab === 'posts' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('posts')}
                    >
                        <Grid className={`w-6 h-6 ${activeTab === 'posts' ? 'text-black' : 'text-gray-400'}`} />
                    </button>
                    <button 
                        className={`flex-1 py-3 flex justify-center ${activeTab === 'tagged' ? 'border-b-2 border-black' : ''}`}
                        onClick={() => setActiveTab('tagged')}
                    >
                        <UserPlus className={`w-6 h-6 ${activeTab === 'tagged' ? 'text-black' : 'text-gray-400'}`} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[300px]">
                    {activeTab === 'posts' ? (
                        <PostGrid posts={posts} onPostClick={setSelectedPost} />
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center px-8">
                            <div className="w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center mb-4">
                                <UserPlus className="w-8 h-8 text-gray-900" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Photos of {currentUser.name}</h3>
                            <p className="text-sm text-gray-500">When people tag you in photos, they'll appear here.</p>
                        </div>
                    )}
                </div>

                {/* Bottom Navigation */}
                <BottomNav user={currentUser} />

                {/* Post Modal */}
                {selectedPost && (
                    <PostModal 
                        post={selectedPost} 
                        onClose={() => setSelectedPost(null)} 
                        userAvatar={currentUser.avatarUrl}
                        username={currentUser.username}
                    />
                )}
            </div>
        </div>
    );
};

export default App;