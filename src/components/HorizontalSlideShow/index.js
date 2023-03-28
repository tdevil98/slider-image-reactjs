import React, {useState} from "react";
import ImageInfo from '../ImageInfo';
import './slider.scss';

function HorizontalSlideShow() {

    const images = [
        {
            src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            description: "Information 1"
        },
        {
            src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            description: "Information 2"
        },
        {
            src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            description: "Information 3"
        },
        {
            src: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            description: "Information 4"
        }
    ];

    const [active, setActive] = useState(0);



    return (
        <ul className="slider-carousel">
            { images.map((image, i) => (
                <li onClick={() => setActive(i)} key={i} className={active === i ? 'active images' : 'images'}>
                    <ImageInfo
                        src={image.src}
                        description={image.description}
                        active={ active === i ? 'active': ''}
                    />
                </li>
            )) }
        </ul>
    );
}

export default HorizontalSlideShow;