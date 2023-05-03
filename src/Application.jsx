import Nullstack from 'nullstack'

import './Application.scss'
import Home from './Home'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US'
  }
  
  async initiate() {
    this.visible = true
  }
  async hydrate() {
    window.addEventListener("scroll", () => { this.visible = (window.scrollY === 0) });
  }

  renderNavbar() {
    return (
      <nav class={this.visible ? "visible" : ""}>
        <h1><a href='https://nullstack.app/pt-br' target='_blank'>Nullstack</a></h1>
        <div class="nav-items">
          <a href="#">Portfolio</a>
          <a href="#">Skills</a>
          <a href="#">About</a>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <body>
        <Navbar />
        <Home route="/" />
      </body>
    )
  }

}

export default Application
