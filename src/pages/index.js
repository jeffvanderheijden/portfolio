import * as React from 'react'
import './../styles/reset.scss'
import'./../styles/pages/index/preloader.scss'

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
        <div className="soon">
          <h2>Coming soon.</h2>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Jeff van der Heijden</title>
