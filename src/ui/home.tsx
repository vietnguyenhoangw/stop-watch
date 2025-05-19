import {useStopwatch} from "./hook/useStopwatch";

export default function Home() {
    const {
        time,
        running,
        timers,
        formatTime,
        startWatch,
        stopwatch,
        resetWatch,
    } = useStopwatch();

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-10">
            <div className="text-5xl font-mono mb-8">{formatTime(time)}</div>
            <div className="flex gap-4 mb-10">
                <button
                    onClick={startWatch}
                    disabled={running}
                    className="px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 disabled:opacity-50 transition">
                    Start
                </button>
                <button
                    onClick={running ? stopwatch : resetWatch}
                    className="px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
                    {running ? "Stop" : "Reset"}
                </button>
            </div>

            <div className="w-full max-w-md">
                <h3 className="text-lg font-semibold mb-2">Previous Timers</h3>
                <ul className="divide-y divide-gray-200 border rounded-lg overflow-hidden">
                    {timers.length === 0 && (
                        <li className="text-center text-gray-400 py-4">
                            No timers yet
                        </li>
                    )}
                    {timers.map((t, i) => (
                        <li key={i} className="py-3 px-4 bg-gray-50">
                            {formatTime(t)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
