import { useEffect, useState } from 'react';
import './Progress.css'

function Progress(props: any) {
    const [name, setName] = useState('')
    const [expBar, setExpBar] = useState(0)
    useEffect(() => {
        setName(props?.monster?.Name)
    }, [props, props?.monster])

    return (
        <div className="header">
            <div className="evolution-outer-container">
                <div className="title">{name || 'Evolution'}</div>
                <div className="hp-inner-container">
                    <div className="hp-indicator"></div>
                </div>
            </div>
        </div>
    );
}

export default Progress