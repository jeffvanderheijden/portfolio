import * as React from 'react'
import Spline from '@splinetool/react-spline'
import './../styles/reset.scss'
import './../styles/pages/index/preloader.scss'

const IndexPage = () => {
  return (
    <main>
      <div className="splash">
        <div className="splash_logo">
          <h1>JEFF</h1>
        </div>
        <div className="splash_svg">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="splash_minimize">
          <svg width="100%" height="100%">
            <rect width="100%" height="100%" />
          </svg>
        </div>
        <div className="element3d">
          <Spline scene="https://prod.spline.design/wPoczcAy8SFB2b8c/scene.splinecode" />
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jeff van der Heijden</title>
