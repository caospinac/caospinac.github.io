import Main from '../components/main'
import { ContentProvider } from '../context/content'

const IndexPage = () => {

  return (
    <main>
      <ContentProvider>
        <Main />
      </ContentProvider>
    </main>
  )
}

export default IndexPage
