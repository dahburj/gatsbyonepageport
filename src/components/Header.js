import PropTypes from 'prop-types'
import React from 'react'
import "../assets/scss/index-new.scss"


const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-hand-peace-o"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>
        <a
                href="https://github.com/dahburj"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
        </h1>
      </div>
    </div>
    <nav>
      <ul>
      {/*
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('main')
            }}
          >
            main
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        */}
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('playground')
            }}
          >
            Playground
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
