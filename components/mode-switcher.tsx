import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";


const Switcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => setMounted(true), [])

    if (!mounted) return null;

    return (
        <div>
            <label>{resolvedTheme}</label>
            <input
                type="checkbox"
                checked={resolvedTheme === 'dark'}
                onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="switch"
            />
        </div>
    )
}

export default Switcher