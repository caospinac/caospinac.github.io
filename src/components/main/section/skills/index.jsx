import PropTypes from 'prop-types'
import { Caption, CloudWrapper, SkillsSection } from './styled'
import ReactWordcloud from 'react-wordcloud'
import { useMemo } from 'react'

const Skills = ({ data }) => {

  const words = useMemo(() => {
    return data && data.items.map(item => ({
      text: item.name,
      value: item.weight,
    }))
  }, [data])

  return (
    <SkillsSection>
      <Caption>{data.caption}</Caption>
      <CloudWrapper>
        <ReactWordcloud words={words} options={{
          enableTooltip: false,
          fontFamily: 'Montserrat',
          fontSizes: [15, 90],
          fontStyle: 'normal',
          fontWeight: 'normal',
          padding: 8,
          rotations: 0,
          rotationAngles: [0, 90],
          scale: 'linear',
          spiral: 'archimedean',
          transitionDuration: 1000,
        }} />
      </CloudWrapper>
    </SkillsSection>
  )
}

Skills.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
}


Skills.ID = 'skills'

export default Skills
