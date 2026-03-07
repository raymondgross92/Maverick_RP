import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // TODO: Ersetze dies mit eurer ECHTEN Server-IP und Port (z.B. '185.23.45.67:30120')
        const serverIp = '127.0.0.1:30120';

        // Timeout AbortController damit sich die Seite nicht aufhängt wenn der Server offline ist
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        // Aktive Spieler von FiveM abrufen
        const playersResponse = await fetch(`http://${serverIp}/players.json`, {
            cache: 'no-store',
            signal: controller.signal
        });
        const playersData = await playersResponse.json();

        // Server Info (maxPlayers) von FiveM abrufen
        const infoResponse = await fetch(`http://${serverIp}/info.json`, {
            cache: 'no-store',
            signal: controller.signal
        });
        const infoData = await infoResponse.json();

        clearTimeout(timeoutId);

        return NextResponse.json({
            status: 'online',
            playersCount: playersData.length,
            maxPlayers: infoData.vars.sv_maxClients || 1024,
            queue: 0,
            uptime: 'Online'
        });
    } catch (error) {
        // Fallback: Wenn der Server offline ist oder nicht erreichbar
        return NextResponse.json({
            status: 'offline',
            playersCount: 0,
            maxPlayers: 1024,
            queue: 0,
            uptime: 'Offline'
        });
    }
}
