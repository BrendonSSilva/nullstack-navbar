import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} was made with Nullstack`
  }

  renderContent() {
    return (
      <>
        <section>
          <div>
            <h2>Portfolio</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
          <img src="/nulla-chan.webp" />
        </section>
        <section class="shaded">
          <img src="/nulla-chan.webp" />
          <div>
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
          <img src="/nulla-chan.webp" />
        </section>
        <section class="shaded">
          <img src="/nulla-chan.webp" />
          <div>
            <h2>Contact</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
          <img src="/nulla-chan.webp" />
        </section>
        <section class="shaded">
          <img src="/nulla-chan.webp" />
          <div>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
        </section>
        <section>
          <div>
            <h2>My Skills</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              itaque corporis optio unde quia, modi pariatur ea magni dolorum?
            </p>
          </div>
          <img src="/nulla-chan.webp" /></section>
      </>)
  }

  render() {
    return (
      <>
        
        <Content />
      </>
    )
  }
}


export default Home
