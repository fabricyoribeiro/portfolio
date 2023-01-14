import Navigation from '../components/Navigation/Navigation'
import Project from '../components/Project/Project'

export default function Projects() {
  return (
    <div className="bg-[#201e2e]">
      <Navigation />
      <div className="max-w-[80%] h-[91vh] m-auto flex  items-center justify-around flex-row flex-wrap font-archivo">
        <Project title='DevLinks' href='https://github.com/fabricyoribeiro/devlinks' content='voluptates nisi commodi volupt atem similique hic nesciunt facilis fugiat maiores, ducimus optio '  />
        <Project title='NB Imports' href='https://github.com/fabricyoribeiro/devlinks' content='voluptates nisi commodi volupt atem similique hic nesciunt facilis fugiat maiores, ducimus optio '  />
        <Project title='DevLinks' href='https://github.com/fabricyoribeiro/devlinks' content='voluptates nisi commodi volupt atem similique hic nesciunt facilis fugiat maiores, ducimus optio '  />
      </div>
    </div>
  )
}
