import { NextResponse } from 'next/server';

export async function GET() {
    // Simulate fetching data from a game server
    const mockData = {
        status: 'online',
        playersCount: Math.floor(Math.random() * 200) + 800, // Random number between 800 and 1000
        maxPlayers: 1024,
        queue: Math.floor(Math.random() * 50),
        uptime: '14d 6h 21m',
        lastUpdate: new Date().toISOString(),
    };

    return NextResponse.json(mockData);
}
