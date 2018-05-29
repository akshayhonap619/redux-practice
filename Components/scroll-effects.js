import React from 'react'
import ReactDOM from 'react-dom'
import {Parallax, Background} from 'react-parallax'






const MyComponent = (props) => (
    <div>
        <Parallax
            blur={10}
            bgImage={"https://picsum.photos/802"}
            bgImageAlt="the cat"
            strength={300}
        >
            Put some text content here
            or even an empty div with fixed dimensions
            to have a height for the parallax.
            <div style={{ height: '800px' }} />
        </Parallax>
        <Parallax
            bgImage={"https://picsum.photos/809"}
            bgImageAlt="the dog"
            strength={300}
        >
            Blur transition from min to maxx
            <div style={{ height: '800px' }} />
        </Parallax>
        <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
            <div style={{ height: '800px' }} />
        </Parallax>
    </div>
)


ReactDOM.render(
    <div> Hello World
        <MyComponent/>
    </div>,
    document.getElementById('parallax')
)