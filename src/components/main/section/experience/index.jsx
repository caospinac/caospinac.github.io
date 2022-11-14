import { useCallback } from 'react'
import { FaIcon, SVG } from '../../../common'
import { CompaniesGrid, CompanyBox, ExperienceSection } from './styled'

const Company = ({ name, website }) => {

  const iconURL = `/images/${name.toLowerCase()}.svg`

  const handleClick = useCallback(() => {
    window.open(website, '_blank')
  }, [website])

  return (
    <CompanyBox onClick={handleClick}>
      <SVG data={iconURL} />
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          Visit website <FaIcon name='external-link' />
        </a>
      )}
    </CompanyBox>
  )
}

const Experience = ({ data }) => {

  return (
    <ExperienceSection>
      <h4>{data.caption}</h4>
      <CompaniesGrid>
        {data.companies.map((company, i) => (
          <Company key={i} name={company.name} website={company.website} />
        ))}
      </CompaniesGrid>
    </ExperienceSection>
  )
}

Experience.ID = 'experience'

export default Experience
