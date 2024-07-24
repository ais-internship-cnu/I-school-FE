import { Grid } from "@mui/material"
import 'styles/common.css'
import PropTypes from 'prop-types'
import react from 'react'
import 'styles/course-search-style.css'

interface CourseProps{
  courseName: string,
  professor: string,
  rating: number
}

const Courses: React.FC<CourseProps> = ({ courseName, professor, rating }) => (
  <div className="course-block">
    <div>
     <h3>{courseName}</h3>
     <p>Professor: {professor}</p>
     <p>Rating: {rating} / 5</p>
    </div>
  </div>
);

Courses.propTypes = {
  courseName: PropTypes.string.isRequired,
  professor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Courses