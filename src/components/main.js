import PropTypes from 'prop-types'
import React from 'react'
import "assets/scss/index-new.scss"

import Grid from '@material-ui/core/Grid';

import pic01 from 'images/pic01.jpg'
import pic02 from 'images/pic02.jpg'
import pic03 from 'images/pic03.jpg'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


const ButtonGrid = () => {

  return(
    <div className="sectionOne">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                    <Grid item xs className="boxgrid__item">
                      <a onClick={() => openInNewTab('https://fce-mesh.jdahbur.com')} className="box box--facemesh">
                        <div /><div /><div />
                      </a>
                      <br />
                      <p className="box__title">Face Mesh</p>
                    </Grid>
                    <Grid item xs className="boxgrid__item">
                      <a onClick={() => openInNewTab('https://face-rec.jdahbur.com')} className="box box--facemark">
                        <div /><div /><div />
                      </a>
                      <br />
                      <p className="box__title">Face Rec.</p>
                    </Grid>
                    <Grid item xs className="boxgrid__item">
                        <a onClick={() => openInNewTab('https://3dpose.jdahbur.com')} className="box box--posenet">
                          <img src="https://img.icons8.com/ios/96/000000/yoga.png" style={{maxHeight: '75px', maxWidth:'75px', bottom: 0, position: "inherit"}} />
                        </a>
                        <br />
                      <p className="box__title">3D Pose</p>
                      </Grid>
                      <Grid item xs className="boxgrid__item">
                      <a onClick={() => openInNewTab('https://virtual-event-demo.jdahbur.com')} className="box box--virtualevent">
                        <div /><div /><div />
                      </a>
                      <br />
                      <p className="box__title">Virtual Event</p>
                    </Grid>
                    <Grid item xs className="boxgrid__item">
                      <a onClick={() => openInNewTab('https://video-conf-demo.jdahbur.com')} className="box box--videoconf">
                        <div /><div /><div />
                      </a>
                      <br />
                      <p className="box__title">Video Conf. Demo</p>
                    </Grid>
                      <Grid item xs className="boxgrid__item">
                      <a onClick={() => openInNewTab('https://nextjs-ecommerce.jdahbur.com/')} className="box box--eCommerce">
                        <div /><div /><div />
                      </a>
                      <br />
                      <p className="box__title">E-Commerce</p>
                    </Grid>
                  {/*
https://portfolio-videos-2019.s3.us-west-2.amazonaws.com/Low-Poly-Female-Head-Wireframe.svg
                  <Link to="/PosePage">
                    <Grid item xs className="boxgrid__item">
                        <div className="box box--posenet">
                          <img src="https://img.icons8.com/ios/96/000000/yoga.png" style={{maxHeight: '75px', maxWidth:'75px', bottom: 0, position: "inherit"}} />
                        </div>
                      </Grid>
                  </Link>
                  */}
              </Grid>
          </div>
  )
}

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="playground"
          className={`${this.props.article === 'playground' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Playground</h2>
            <div>
              <div>
                <ButtonGrid />
              </div>
            </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
           <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
   <input type="hidden" name="bot-field" />
   <input type="hidden" name="form-name" value="contact" />
   <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
          <li>
              <a
                href="https://github.com/dahburj"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/j-dahbur-0000" target="_blank" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dahburj/" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>

          </ul>
          {close}
        </article>
        {/*
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>
        
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>
        */}
     
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
