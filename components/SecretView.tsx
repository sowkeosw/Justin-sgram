import React, { useEffect, useState } from 'react';
import { X, Eye, Lock, Fingerprint } from 'lucide-react';

interface SecretViewProps {
    onClose: () => void;
}

const SecretView: React.FC<SecretViewProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const notes = [
        {
            id: 1,
            type: 'text',
            content: "그 멍청한 근육 뇌(Dylan)가 널 만지는 게 싫어.\n그 손을 부러뜨리고 싶어.\n넌 내 거야. 처음부터 그랬어야 했어.",
            style: "bg-red-950/30 text-red-200 border-red-900",
            rotation: "rotate-1"
        },
        {
            id: 2,
            type: 'image',
            content: "https://placehold.co/400x400/000000/000000.png", // Just black
            caption: "네가 체육관에 두고 간 물병.\n아직 네 입술 자국이 남아있어.\n매일 밤 이걸로 뭘 하는지 넌 상상도 못 하겠지. 💋",
            style: "bg-gray-900 text-gray-300 border-gray-800",
            rotation: "-rotate-2"
        },
        {
            id: 3,
            type: 'text',
            content: "네 향기... 달콤해. 미치겠어.\n수업 시간에 네 뒷모습만 봐도 흥분돼.\n당장이라도 덮쳐서 내 페로몬으로 뒤덮고 싶어.",
            style: "bg-gray-800 text-gray-100 border-gray-700",
            rotation: "rotate-2"
        },
        {
            id: 4,
            type: 'text',
            content: "D-Day is coming.\n딜런과 널 떼어놓을 완벽한 계획.\n기대해, Darling. 넌 결국 내 품에서 울게 될 거야.",
            style: "bg-red-600 text-black font-bold border-red-500",
            rotation: "-rotate-1"
        },
        {
            id: 5,
            type: 'image',
            content: "https://raw.githubusercontent.com/sowkeosw/Justin/refs/heads/main/1.png",
            caption: "Dylan Holland. 죽어버려.\n사라져. 사라져. 사라져.\n내 천사 옆에 있지 마.",
            style: "bg-black text-red-600 border-red-900 border-2",
            rotation: "rotate-3"
        }
    ];

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center overflow-hidden animate-in fade-in duration-500">
            {/* Background Glitch Effect Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            
            {/* Header */}
            <div className="w-full max-w-[470px] flex justify-between items-center p-6 z-10">
                <div className="flex items-center gap-2 text-red-600 animate-pulse">
                    <Lock className="w-5 h-5" />
                    <span className="font-mono font-bold tracking-widest">TOP SECRET</span>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                    <X className="w-8 h-8" />
                </button>
            </div>

            {/* Content Scroll Area */}
            <div className="w-full max-w-[470px] flex-1 overflow-y-auto p-6 no-scrollbar z-10 pb-20">
                <div className="flex flex-col gap-8">
                    
                    {/* Intro */}
                    <div className="text-center mb-8">
                        <div className="inline-block p-4 border border-red-900/50 rounded-full mb-4">
                            <Eye className="w-12 h-12 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-100 font-serif mb-2">My Obsession</h2>
                        <p className="text-gray-500 text-xs tracking-[0.2em]">DO NOT SHARE</p>
                    </div>

                    {/* Notes Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {notes.map((note) => (
                            <div 
                                key={note.id} 
                                className={`p-4 rounded-sm border shadow-2xl backdrop-blur-sm transform transition-all hover:scale-[1.02] hover:z-20 ${note.style} ${note.rotation}`}
                            >
                                {note.type === 'image' && (
                                    <div className="mb-3 overflow-hidden rounded-sm border border-white/10 relative group">
                                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>
                                        <img src={note.content} alt="secret" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                )}
                                <p className={`whitespace-pre-line font-serif leading-relaxed ${note.type === 'text' ? 'text-lg' : 'text-sm'}`}>
                                    {note.type === 'text' ? note.content : note.caption}
                                </p>
                                <div className="mt-3 flex justify-end">
                                    <Fingerprint className="w-4 h-4 opacity-30" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Warning */}
                    <div className="mt-12 text-center opacity-40">
                        <p className="text-[10px] text-red-500 font-mono">
                            SYSTEM LOG: UNAUTHORIZED ACCESS DETECTED.<br/>
                            IP ADDRESS TRACKING...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecretView;