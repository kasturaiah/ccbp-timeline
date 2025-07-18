import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, imageUrl} = projectDetails
  const {duration, projectUrl} = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt='project' className="img" />
      <div className="heading-container">
        <h1 className="heading">{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar color="#171f46" />
          <p className="duration-para">{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
