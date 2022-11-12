import PropTypes from 'prop-types'
import { useMemo } from 'react'
import Me from './me'
import Skills from './skills'
import { SectionWrapper } from './styled'

const factory = id => {
  switch (id) {
  case Me.ID:
    return Me

  case Skills.ID:
    return Skills

  default:
    return null
  }

}

const Section = ({ id, data }) => {
  const SectionComponent = useMemo(() => factory(id), [id])

  if (!SectionComponent) return <></>

  return (
    <SectionWrapper>
      <SectionComponent data={data} />
    </SectionWrapper>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
}

export default Section
