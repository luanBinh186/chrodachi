import './Progress.css'

function Progress(props: any) {
    return (
        <div className="header">
            <div className="evolution-outer-container">
                <div className="title">{props?.monster?.name || 'Evolution'}</div>
                <div className="hp-inner-container">
                    <div className="hp-indicator"></div>
                </div>
            </div>
        </div>
    );
}

export default Progress