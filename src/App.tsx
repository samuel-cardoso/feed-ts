import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

function App() {

  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/samuel-cardoso.png",
        name: "Samuel Cardoso da Silva",
        role: "Programador"
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋"
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
        },
      ],
      publishedAt: new Date("2024-12-11 07:43:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO Rocketseat"
      },
      content: [
        {
          type: "paragraph",
          content: "Fala galeraa 👋"
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
        },
      ],
      publishedAt: new Date("2024-12-10 07:43:00"),
    },
  ]


  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post key={post.id} post={post} />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}

export default App
