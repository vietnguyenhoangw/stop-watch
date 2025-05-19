import {useRef, useState} from "react";

export const useStopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const [timers, setTimers] = useState([]);
    const intervalRef = useRef(null);

    const formatTime = (ms: number): string => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const centiseconds = Math.floor((ms % 1000) / 10);

        const pad = (n: number) => String(n).padStart(2, "0");

        return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
    };

    const startWatch = () => {
        if (running) return;
        setRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);
    };

    const stopwatch = () => {
        if (running) clearInterval(intervalRef?.current);
        setTimers((prev) => [time, ...prev]);
        setRunning(false);
    };

    const resetWatch = () => {
        setTimers([]);
        setTime(0);
    }

    return {time, running, timers, formatTime, startWatch, stopwatch, resetWatch, setTime};
};
