import { useEffect, useState } from "react";

const MyTimer = () => {
    const [currentTime, setCurrentTime] = useState("00:00:00");
    const now = () => {
        const date = new Date();
        const h = String(date.getHours()).padStart(2, "0");
        const m = String(date.getMinutes()).padStart(2, "0");
        const s = String(date.getSeconds()).padStart(2, "0");

        setCurrentTime(`${h}:${m}:${s}`);
        console.log("타이머실행");
    };

    useEffect(() => {
        console.log("최초 rendering + currentTime 변경할 때마다 수행");
        const timer = setTimeout(now, 1000);
        
        return () => {
            clearTimeout(timer);
            console.log("useEffect() 뒷정리(cleanup 메소드 return)");
        };
    }, [currentTime]);

    return (
        <div>
            <p>{currentTime}</p>
        </div>
    );
};

export default MyTimer;