import { useEffect, useState } from 'react'
import './Monster.css'
import { Constants } from '../../utils/Constants'

function Monster(props: any) {
    const [sourceImg, setSourceImg] = useState('')
    useEffect(() => {
        let type = Number.parseInt(props?.monster?.Type)
        let name = props?.monster?.Name
        console.log(name)
        setSourceImg(`/assets/monsters/${Constants.TypeMonster[type]}/${name}.gif`)
    }, [props.monster])

    return (
        <div className="animation-container">
            <img src='/assets/monsters/baby1/Zurumon.gif' alt="Animated GIF" className="animated-gif" />
        </div>
    )
}

export default Monster