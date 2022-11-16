import { FaIcon, SVG } from '../../../common'
import { CompaniesGrid, CompanyBox, ExperienceSection } from './styled'

const Company = ({ name, website, present }) => {

  const iconURL = `/assets/${name.toLowerCase()}.svg`

  return (
    <CompanyBox className={present ? 'active' : undefined}>
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
          <Company key={i} {...company} />
        ))}
      </CompaniesGrid>
      {data.details && (
        <a href={data.details.url} className='link' target="_blank" rel="noopener noreferrer">
          <span>{data.details.text}</span>
        </a>
      )}
    </ExperienceSection>
  )
}

Experience.ID = 'experience'

export default Experience
