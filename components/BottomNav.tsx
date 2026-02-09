import React from 'react';
import { Home, Search, PlusSquare, Clapperboard, UserCircle } from 'lucide-react';
import { UserProfile } from '../types';

interface BottomNavProps {
    user: UserProfile;
}

const BottomNav: React.FC<BottomNavProps> = ({ user }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center z-40 md:hidden">
            <Home className="w-6 h-6 text-gray-900" />
            <Search className="w-6 h-6 text-gray-400" />
            <PlusSquare className="w-6 h-6 text-gray-900" />
            <Clapperboard className="w-6 h-6 text-gray-400" />
            <div className="w-6 h-6 rounded-full overflow-hidden border border-black">
                <img src={user.avatarUrl} alt="profile" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default BottomNav;
