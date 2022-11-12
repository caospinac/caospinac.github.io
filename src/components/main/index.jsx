import { useContext } from 'react'
import { ContentContext } from '../../context/content'
import { Container } from '../common/styled'
import Section from './section'

const Main = () => {
  const { sections } = useContext(ContentContext)

  return (
    <Container>
      {sections.map(section => {
        const [[id, data]] = Object.entries(section)

        return <Section key={id} id={id} data={data} />
      })}
    </Container>
  )
}

export default Main
