import '../styling/SingleImage.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Header from './Header'

function SingleImage(props)
{
    const [image, setImage] = useState(null)
    const { id } = useParams()

    const getImage = async () => {
        const URL = `${ process.env.REACT_APP_BACKEND_URL }/${ id }`

        const res  = await fetch(URL)
        const data = await res.json()

        setImage(data)
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <div className='single-image-page'>
            <Header />
            <div className='single-image-page-content'>
                <img className='image-show' src={ image && image.img_src } alt='mars'/>
                <div className='description'>
                    <p>Date Taken - { props.earthDate && props.earthDate.toDateString() }</p>
                    <p>Camera - { image && image.camera.full_name }</p>
                </div>
            </div>
            <Link className='show-back' to={ `/mars-images/?craft=${ props.craftName }` }>Back</Link>
        </div>
    )
}

export default SingleImage
