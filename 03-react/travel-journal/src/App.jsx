import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from '../data.js'

export default function App() {
    
  const entryElements = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    )
  })
  
  return (
    <>
      <Header />
      <main className="container">
      {entryElements}
      </main>
    </>
  )
}