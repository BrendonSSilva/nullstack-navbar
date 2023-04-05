import Nullstack from 'nullstack'

import './Application.scss'
import Home from './Home'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US'
    this.visible = true
    window.addEventListener("scroll", () => { window.scrollY > 0 ? this.visible = false : this.visible = true })
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
        <Home route="/" greeting="Welcome to Nullstack!" />
      </body>
    )
  }

}

export default Application
