import React from 'react';
import { Chat } from '../types';
import { ChevronLeft, Edit, Camera, Search } from 'lucide-react';

interface MessagesListProps {
    chats: Chat[];
    onChatSelect: (chat: Chat) => void;
    onBack: () => void;
    username: string;
    userAvatar: string;
}

const MessagesList: React.FC<MessagesListProps> = ({ chats, onChatSelect, onBack, username, userAvatar }) => {
    return (
        <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
                    <ChevronLeft className="w-7 h-7 text-gray-900" />
                    <h1 className="font-bold text-xl text-gray-900 flex items-center gap-1">
                        {username} <span className="text-xs align-top text-red-500">●</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <Camera className="w-6 h-6 text-gray-900" />
                    <Edit className="w-6 h-6 text-gray-900" />
                </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-3">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full bg-gray-100 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
                    />
                </div>
            </div>

            {/* Stories / Notes Row */}
            <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
                <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center relative">
                        <img src={userAvatar} alt="Me" className="w-full h-full rounded-full object-cover opacity-60" />
                        <div className="absolute top-0 right-0 bg-gray-200 rounded-full p-1 text-[10px] font-bold">+</div>
                        <div className="absolute -bottom-2 bg-white px-2 py-0.5 rounded-xl shadow-sm border border-gray-100 text-xs truncate max-w-[60px]">Note...</div>
                    </div>
                    <span className="text-xs text-gray-400 mt-3">Your Note</span>
                </div>
                {chats.filter(c => c.isOnline).map(chat => (
                     <div key={chat.id} className="flex flex-col items-center flex-shrink-0 cursor-pointer">
                        <div className="w-16 h-16 rounded-full p-[2px] bg-green-500 relative">
                            <img src={chat.avatarUrl} alt={chat.username} className="w-full h-full rounded-full object-cover border-2 border-white" />
                        </div>
                        <span className="text-xs text-gray-900 mt-1">{chat.name?.split(' ')[0]}</span>
                    </div>
                ))}
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="font-bold text-base">Messages</span>
                    <span className="text-blue-500 text-sm font-semibold">Requests</span>
                </div>
                
                {chats.map(chat => (
                    <div 
                        key={chat.id} 
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer active:bg-gray-100 transition-colors"
                        onClick={() => onChatSelect(chat)}
                    >
                        <div className="relative">
                            <img src={chat.avatarUrl} alt={chat.username} className="w-14 h-14 rounded-full object-cover" />
                            {chat.isOnline && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className={`truncate text-sm ${chat.isUnread ? 'font-bold text-gray-900' : 'font-medium text-gray-900'}`}>
                                    {chat.name || chat.username}
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className={`truncate text-sm ${chat.isUnread ? 'font-bold text-gray-900' : 'text-gray-500'}`}>
                                    {chat.lastMessage}
                                </span>
                                <span className="text-gray-400 text-xs shrink-0">· {chat.lastMessageTime}</span>
                            </div>
                        </div>
                        {chat.isUnread && (
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0"></div>
                        )}
                        <Camera className="w-6 h-6 text-gray-400 shrink-0 ml-2" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessagesList;