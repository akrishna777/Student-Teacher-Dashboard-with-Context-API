import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from './app-contexts'

const AppState = (props) => {
  const [inactive, setInactive] = useState(false)
  const [toggleoff, setToggleoff] = useState(false)

  const onCollapse = (inactive) => {
    setInactive(inactive)
  }

  const onToggleOff = (toggleoff) => {
    setToggleoff(toggleoff)
  }

  const [stuData, setStuData] = useState([])
  const [teacherData, setTeacherData] = useState([])

  const studentInitialValues = {
    FirstName: '',
    LastName: '',
    Course: '',
    Batch: '',
    PhoneNumber: '',
  }

  const teacherInitialValues = {
    FirstName: '',
    LastName: '',
    JoiningDate: '',
    PhoneNumber: '',
    BatchAssigned: '',
  }

  const [studentFormData, setStudentFormData] = useState(studentInitialValues)
  const [teacherFormData, setTeacherFormData] = useState(teacherInitialValues)

  const handleSelected = (id) => {
    const selectedData = stuData.filter((row) => row.id === id)[0]

    setStudentFormData(selectedData)
    navigate('/students/ManageStudents')
  }

  const teacherHandleSelected = (id) => {
    const selectedData = teacherData.filter((row) => row.id === id)[0]

    setTeacherFormData(selectedData)
    navigate('/teachers/ManageTeachers')
  }

  const navigate = useNavigate()

  return (
    <AppContext.Provider
      value={{
        inactive,
        setInactive,
        toggleoff,
        setToggleoff,
        onCollapse,
        onToggleOff,
        stuData,
        setStuData,
        teacherData,
        setTeacherData,
        studentFormData,
        setStudentFormData,
        studentInitialValues,
        teacherFormData,
        setTeacherFormData,
        teacherInitialValues,
        handleSelected,
        teacherHandleSelected,
        navigate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
