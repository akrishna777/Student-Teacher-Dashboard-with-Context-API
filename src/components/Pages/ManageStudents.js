import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Contexts/app-contexts'
import Footer from '../Footer'

const ManageStudents = () => {
  const {
    inactive,
    toggleoff,
    studentFormData,
    setStudentFormData,
    studentInitialValues,
  } = useContext(AppContext)
  const handleChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (studentFormData.id) {
      updateStudent()
      setStudentFormData(studentInitialValues)
    } else {
      addStudent()
      setStudentFormData(studentInitialValues)
    }
  }

  const addStudent = async () => {
    try {
      const resp = await axios.post(
        'https://6276914abc9e46be1a1801f3.mockapi.io/students',
        studentFormData,
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const updateStudent = async () => {
    try {
      const resp = await axios.put(
        `https://6276914abc9e46be1a1801f3.mockapi.io/students/${studentFormData.id}`,
        studentFormData,
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  let navigate = useNavigate()
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container">
          <h1>Student Management</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vitae molestias at dicta laudantium dolorem voluptates vero
            consequuntur facere quae deleniti, ex illum voluptas qui placeat,
            iste et quam non.
          </p>

          <form>
            <div className="form-row d-flex">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputFirstName">First Name</label>
                <input
                  name="FirstName"
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={studentFormData.FirstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputLastName">Last Name</label>
                <input
                  name="LastName"
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={studentFormData.LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row d-flex my-2">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputCourse">Course</label>
                <input
                  name="Course"
                  type="text"
                  className="form-control"
                  id="course"
                  value={studentFormData.Course}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputBatch">Batch</label>
                <input
                  name="Batch"
                  type="text"
                  className="form-control"
                  id="batch"
                  value={studentFormData.Batch}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row my-2">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputPhoneNo">Phone No.</label>
                <input
                  name="PhoneNumber"
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  value={studentFormData.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary my-4 mx-2"
              onClick={handleSubmit}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Student
            </button>
          </form>
          <Footer />
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Added Successfully</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Student has been added.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  navigate(`/students`)
                }}
              >
                Go to Students Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStudents
