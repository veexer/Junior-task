import React, { Component } from 'react'
import Slide from './Slide.js';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_slide: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.handle_next();
        }, 1000);
    }

    handle_next = () => {
        let switchCheck = this.slider_container;
        if (typeof (switchCheck) != 'undefined' && switchCheck != null) {
            let appendID = this.state.current_slide;
            let appendNext = this.slider_container.children[appendID].cloneNode(true);
            this.slider_container.append(appendNext, this.slider_container.children[0]);
            this.slider_container.removeChild(appendNext, this.slider_container.children[0]);
        } else { return }

    }

    render() {
        return (
            <div style={{ maxWidth: '1400px', margin: 'auto' }}>
                <div ref={ref_id => this.slider_container = ref_id} className='slider-container' style={styles.slide_container}>
                    <Slide slide_id='1' />
                    <Slide slide_id='2' />
                    <Slide slide_id='3' />
                    <Slide slide_id='4' />
                    <Slide slide_id='5' />

                </div>
            </div>
        )
    }
}
const styles = {
    slide_container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1600px',
        overflowX: "hidden",
        flex: '0 0 auto',
    },
}

export default Carousel;