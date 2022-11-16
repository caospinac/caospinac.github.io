import { StaticImage } from 'gatsby-plugin-image'

import { Avatar, Media, MeSection } from './styled'

const Me = ({ data }) => {

  console.log(__dirname)

  return (
    <MeSection>
      <h2>{data.name}</h2>
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
      <span>{data.about}</span>
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
