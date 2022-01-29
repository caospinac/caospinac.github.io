import PropTypes from 'prop-types'
import { useMemo } from 'react'
import Me from './me'
import { SectionWrapper } from './styled'

const factory = id => {
  switch (id) {
  case Me.ID:
    return Me

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
