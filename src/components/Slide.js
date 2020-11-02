import React from 'react'

function Slide(props) {
    let url = props.slide_id;
    return (
        <div style={styles.slide}>
            <img src={require(`./assets/photos/slide-${url}.jpg`)} alt='a pupper' style={styles.slide}>
            </img>
        </div>
    )
}

const styles = {
    slide: {
        width: '250px',
        height: '250px',
        marginLeft: 'auto',
        borderRadius: '10px'
    },
    image: {
        width: '100%',
        height: '100%',
    }
}

export default Slide;