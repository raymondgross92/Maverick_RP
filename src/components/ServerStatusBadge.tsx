'use client';

import React, { useEffect, useState } from 'react';
import { Users, AlertCircle, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ServerStatusData = {
    status: string;
    playersCount: number;
    maxPlayers: number;
    queue: number;
    uptime: string;
};

export function ServerStatusBadge() {
    const [data, setData] = useState<ServerStatusData | null>(null);

    useEffect(() => {
        // Polling simulation
        const fetchStatus = async () => {
            try {
                const res = await fetch('/api/server-status');
                const json = await res.json();
                setData(json);
            } catch (err) {
                console.error('Failed to fetch server status', err);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row gap-6 items-center"
        >
            <div className="flex items-center gap-3">
                <div className="relative flex h-4 w-4">
                    {data.status === 'online' && (
                        <>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-neon-cyan"></span>
                        </>
                    )}
                </div>
                <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Status</p>
                    <p className="font-bold text-lg text-white capitalize">{data.status}</p>
                </div>
            </div>

            <div className="h-10 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-3">
                <div className="bg-maverick-red/20 p-2 rounded-full text-maverick-red">
                    <Users size={20} />
                </div>
                <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Players Online</p>
                    <div className="flex items-baseline gap-1.5">
                        <p className="font-bold text-xl text-white">
                            <LivePlayerCounter count={data.playersCount} />
                        </p>
                        <p className="text-sm text-white/40 font-medium">/ {data.maxPlayers}</p>
                    </div>
                </div>
            </div>

            {data.queue > 0 && (
                <>
                    <div className="h-10 w-px bg-white/10 hidden sm:block" />
                    <div className="flex items-center gap-3">
                        <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-500">
                            <AlertCircle size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Queue</p>
                            <p className="font-bold text-lg text-white">{data.queue}</p>
                        </div>
                    </div>
                </>
            )}

            <div className="h-10 w-px bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-3">
                <div className="bg-white/5 p-2 rounded-full text-white/70">
                    <Clock size={20} />
                </div>
                <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Uptime</p>
                    <p className="font-bold text-sm text-white">{data.uptime}</p>
                </div>
            </div>
        </motion.div>
    );
}

// Subcomponent to animate numbers
function LivePlayerCounter({ count }: { count: number }) {
    return (
        <AnimatePresence mode="popLayout">
            <motion.span
                key={count}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="inline-block"
            >
                {count}
            </motion.span>
        </AnimatePresence>
    );
}
