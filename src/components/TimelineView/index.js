import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineList = eachItem => {
    if (eachItem.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
  }

  return (
    <div className="app-container">
      <h1 className="heading">
        MY JOURNEY OF <span className="para">CCBP 4.0</span>
      </h1>

      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimelineList(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
