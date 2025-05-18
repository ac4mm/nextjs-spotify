'use client';

import {
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  ArrowsRightLeftIcon,
  BackwardIcon,
  ChatBubbleLeftEllipsisIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/solid"
import { useRef, useState } from "react"

export default function PlayerBar() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 1;
            setProgress((current / duration) * 100);
        }
    };
    
    return (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white px-4 py-2 flex items-center justify-between z-50">
            {/* Left: Song Info */}
            <div className="flex items-center gap-3 w-[250px]">
                {/*<Image src="/cover.jpg" alt="cover" width={48} height={48} className="rounded" />*/}
                <div>
                    <p className="text-sm font-semibold">Nothing&apos;s Gonna Hurt You Baby</p>
                    <p className="text-xs text-gray-400">Cigarettes After Sex</p>
                </div>
            </div>

            {/* Center: Player Controls */}
            <div className="flex flex-col items-center w-full max-w-xl">
                <div className="flex items-center gap-4">
                    <ArrowsRightLeftIcon className="w-5 h-5 cursor-pointer" />
                    <BackwardIcon className="w-5 h-5 cursor-pointer" />
                    <button onClick={togglePlay} className="w-8 h-8">
                        {isPlaying ? <PauseIcon className="w-full h-full" /> : <PlayIcon className="w-full h-full" />}
                    </button>
                    <ForwardIcon className="w-5 h-5 cursor-pointer" />
                    <ChatBubbleLeftEllipsisIcon className="w-5 h-5 cursor-pointer" />
                </div>
                <div className="flex items-center gap-2 w-full mt-2">
                    <span className="text-xs">0:01</span>
                    <input
                        type="range"
                        value={progress}
                        onChange={() => {}}
                        className="w-full h-1 accent-white"
                    />
                    <span className="text-xs">4:46</span>
                </div>
            </div>

            {/* Right: Volume & Options */}
            <div className="flex items-center gap-3 w-[250px] justify-end">
                <ArrowPathIcon className="w-5 h-5 cursor-pointer" />
                <SpeakerWaveIcon className="w-5 h-5" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 accent-white"
                />
                <ArrowsPointingOutIcon className="w-5 h-5 cursor-pointer" />
            </div>

            <audio
                ref={audioRef}
                src="/music.mp3"
                onTimeUpdate={handleTimeUpdate}
                preload="metadata"
            />
        </div>
    )
}
