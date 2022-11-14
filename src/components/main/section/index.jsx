import { useMemo } from 'react'
import Me from './me'
import Skills from './skills'
import Experience from './experience'

import { SectionWrapper } from './styled'

const factory = id => {
  switch (id) {
  case Me.ID:
    return Me

  case Skills.ID:
    return Skills

  case Experience.ID:
    return Experience

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

export default Section
