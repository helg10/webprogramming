import React, { useState, useEffect } from "react";

export default function Footer(){
    const [systemInfo, setSystemInfo] = useState({
        platform: '',
        userAgent: ''
    })

    useEffect(() => {
        const currentPlatform = navigator.platform || 'Невідомо';
        const currentUserAgent = navigator.userAgent || 'Невідомо';

        localStorage.setItem('userPlatform', currentPlatform);
        localStorage.setItem('userBrowser', currentUserAgent)

        setSystemInfo({
            platform: localStorage.getItem('userPlatform'),
            userAgent: localStorage.getItem('userBrowser')

        });
    }, []);

    return (
        <footer className="text-center text-sm text-stone-600 dark:text-gray-400 border-t border-[#f0e6dc] dark:border-gray-800 pt-4 mt-4 transition-colors duration-300">
            <p>Платформа: <span className="font-medium">{systemInfo.platform}</span></p>
            <p className="mt-1 truncate max-w-xl mx-auto px-4">Браузер: <span className="font-medium">{systemInfo.userAgent}</span></p>
        </footer>
    );
}