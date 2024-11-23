import About from "./components/about";
import Experience from "./components/experience";
import Hero from "./components/hero";
import Projects from "./components/projects";




export default function Home() {

  return(
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
    </main>
    
  )
}