import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header"
import { Lesson } from "./components/Lesson"
import { Sidebar } from "./components/Sidebar"
import { Video } from "./components/Video"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"

// const GET_LESSONS_QUERY = gql`
//   query{
//     lessons{
//       id
//       title
//       teacher{
//         name
//       }
//     }
//   }
// `

// interface Lesson{
//   id: string,
//   title: string,
// }

function App() { 
  return(
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>  
      </ApolloProvider>
    </div>
  )
}

export default App
