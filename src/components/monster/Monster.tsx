import { useEffect, useState } from 'react'
import './Monster.css'
import { Constants } from '../../utils/Constants'

function Monster(props: any) {
    const [sourceImg, setSourceImg] = useState('')
    useEffect(() => {
        let type = Number.parseInt(props?.monster?.Type)
        let name = props?.monster?.Name
        setSourceImg(`/assets/monsters/${Constants.TypeMonster[type]}/${name}.gif`)
    }, [props, props?.monster])

    return (
        <div className="animation-container">
            <img src={sourceImg} alt="monster" className="animated-gif" />
        </div>
    )
}

export default Monster