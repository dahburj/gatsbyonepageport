import React from 'react'
import { Link } from 'gatsby'

import Layout from 'components/layout'

const SecondPage = () => (
  <Layout>

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

    <Link style={{left:"47.5%", top:"7.5rem", position:"relative"}} to="/">Home</Link>
  </Layout>
)

export default SecondPage
