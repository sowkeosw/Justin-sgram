import React, { useEffect, useRef } from 'react';
import { Chat } from '../types';
import { ChevronLeft, Phone, Video, Info, Image, Heart, Mic, Send, Camera } from 'lucide-react';

interface ChatDetailProps {
    chat: Chat;
    onBack: () => void;
}

const ChatDetail: React.FC<ChatDetailProps> = ({ chat, onBack }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    return (
        <div className="flex flex-col h-screen bg-white animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0 bg-white z-10">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="text-gray-900">
                        <ChevronLeft className="w-7 h-7" />
                    </button>
                    <div className="flex items-center gap-2">
                        <img src={chat.avatarUrl} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                        <div className="flex flex-col">
                            <span className="font-bold text-sm text-gray-900 leading-tight">{chat.name || chat.username}</span>
                            <span className="text-xs text-gray-500 leading-tight">{chat.username}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-900">
                    <Phone className="w-6 h-6" />
                    <Video className="w-7 h-7" />
                    <Info className="w-6 h-6" />
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white no-scrollbar">
                {/* Timestamp Helper */}
                <div className="text-center text-xs text-gray-400 my-4">Today</div>

                {/* Profile Placeholder in Chat */}
                <div className="flex flex-col items-center justify-center my-8 gap-2">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img src={chat.avatarUrl} alt="profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-lg">{chat.name}</h2>
                        <p className="text-sm text-gray-500">{chat.username} · Silverwood University</p>
                        <button className="mt-3 bg-gray-100 text-sm font-semibold px-4 py-1.5 rounded-lg">View Profile</button>
                    </div>
                </div>

                {chat.messages.map((msg) => {
                    const isMe = msg.senderId === 'me';
                    return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1`}>
                            {!isMe && (
                                <img src={chat.avatarUrl} alt="sender" className="w-7 h-7 rounded-full object-cover mr-2 self-end mb-1" />
                            )}
                            <div 
                                className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-[15px] leading-snug break-words ${
                                    isMe 
                                    ? 'bg-blue-500 text-white rounded-br-sm' 
                                    : 'bg-gray-100 text-gray-900 rounded-bl-sm'
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white shrink-0 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer shrink-0">
                    <Camera className="w-4 h-4" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
                    <input 
                        type="text" 
                        placeholder="Message..." 
                        className="flex-1 bg-transparent text-sm focus:outline-none placeholder-gray-500"
                    />
                    <button className="text-gray-900 font-semibold text-sm hover:text-blue-500">
                        <span className="sr-only">Send</span>
                         <div className="text-blue-500 font-semibold text-sm">Send</div>
                    </button>
                </div>
                <Mic className="w-6 h-6 text-gray-900 shrink-0" />
                <Image className="w-6 h-6 text-gray-900 shrink-0" />
                <Heart className="w-6 h-6 text-gray-900 shrink-0" />
            </div>
        </div>
    );
};

export default ChatDetail;