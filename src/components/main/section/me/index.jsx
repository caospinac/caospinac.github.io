import { StaticImage } from 'gatsby-plugin-image'

import { About, Avatar, Media, MeSection, Name, PresentationWrapper } from './styled'

const Me = ({ data }) => {

  console.log(__dirname)

  return (
    <MeSection>
      <Name>{data.name}</Name>
      <PresentationWrapper>
        <About>
          <h3>{data.about.title}</h3>
          {data.about.body.map((paragraph, i)=> <p key={i}>{paragraph}</p>)}
        </About>
        <Avatar>
          <StaticImage
            src='./assets/photo.webp'
            alt={data.name}
            placeholder='blurred'
            layout='fixed'
            width={200}
            height={200}
          />
        </Avatar>
      </PresentationWrapper>
      <h2>
        <Media>
          {data.media.map((site, i) => (
            <a key={i} href={site.href} target='_blank' rel='noreferrer'>
              <i className={`fa fa-${site.icon}`}></i>
            </a>
          ))}
        </Media>
      </h2>
    </MeSection>
  )
}

Me.ID = 'me'

export default Me
