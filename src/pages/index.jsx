import { Banner } from '../components/common'
import Main from '../components/main'
import { ContentProvider } from '../context/content'

const IndexPage = () => {

  return (
    <main>
      <Banner>
        This website is being developed
      </Banner>
      <ContentProvider>
        <Main />
      </ContentProvider>
    </main>
  )
}

export default IndexPage
