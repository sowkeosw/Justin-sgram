import React from 'react';
import { Story } from '../types';

interface StoriesProps {
    stories: Story[];
    onStoryClick: (id: string) => void;
}

const Stories: React.FC<StoriesProps> = ({ stories, onStoryClick }) => {
    return (
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar border-b border-gray-100">
            {stories.map((story) => (
                <div 
                    key={story.id} 
                    className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
                    onClick={() => onStoryClick(story.id)}
                >
                    <div className={`w-16 h-16 rounded-full p-[1px] ${story.id === '4' ? 'bg-gradient-to-tr from-gray-900 to-red-600' : 'bg-gray-200 group-hover:bg-gray-300'}`}>
                        <div className="w-full h-full rounded-full p-[2px] bg-white">
                            <img 
                                src={story.imageUrl} 
                                alt={story.title} 
                                className={`w-full h-full rounded-full object-cover ${story.id === '4' ? 'grayscale contrast-125' : ''}`}
                            />
                        </div>
                    </div>
                    <span className={`text-xs mt-1 ${story.id === '4' ? 'font-bold text-red-900' : 'text-gray-700'}`}>{story.title}</span>
                </div>
            ))}
            {/* Add placeholder story for consistency */}
             <div className="flex flex-col items-center flex-shrink-0 cursor-pointer opacity-50">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                        <span className="text-xl text-gray-400">+</span>
                    </div>
                    <span className="text-xs text-gray-700 mt-1">New</span>
            </div>
        </div>
    );
};

export default Stories;