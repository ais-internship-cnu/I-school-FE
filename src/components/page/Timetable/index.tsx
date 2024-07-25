import { Grid, Typography } from "@mui/material"
import useTimetable from "hooks/useTimetable"
import { useEffect } from "react"
import 'styles/common.css'
import { Timetable } from "types/timetable"
import TimetableCard from "./TimetableCard"

const Example = () => {
  const { onCreateTimetableList, timetableList } = useTimetable()

  useEffect(() => {
    onCreateTimetableList()
  }, [])

  return (
    <Grid>
      <Typography variant="h6">
      </Typography>
      {timetableList.map((item) => (
        <TimetableCard key={item.courseId} course={item}></TimetableCard>
      ))}
    </Grid>
  )
}

export default Example
