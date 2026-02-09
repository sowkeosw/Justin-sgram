export interface Comment {
    id: string;
    username: string;
    text: string;
    isLiked: boolean;
}

export interface Post {
    id: string;
    imageUrl: string;
    likes: number;
    caption: string;
    comments: Comment[];
    location?: string;
    timestamp: string;
    isLiked: boolean;
}

export interface Story {
    id: string;
    title: string;
    imageUrl: string;
}

export interface UserProfile {
    username: string;
    name: string;
    avatarUrl: string;
    postsCount: number;
    followers: string;
    following: number;
    bio: string[];
    link?: string;
    linkText?: string;
    rank?: string; // 'Alpha', 'Omega', or 'Beta'
    isVerified: boolean;
}

export interface Message {
    id: string;
    senderId: string; // 'me' (Dylan) or 'other'
    text: string;
    timestamp: string;
    isLiked?: boolean;
}

export interface Chat {
    id: string;
    username: string;
    name?: string;
    avatarUrl: string;
    lastMessage: string;
    lastMessageTime: string;
    isUnread: boolean;
    isOnline?: boolean;
    messages: Message[];
}

export interface FollowUser {
    id: string;
    username: string;
    name: string;
    avatarUrl: string;
    isFollowing: boolean;
}