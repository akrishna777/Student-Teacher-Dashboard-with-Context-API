import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import AppContext from '../../Contexts/app-contexts'

const Students = () => {
  const {
    inactive,
    toggleoff,
    handleSelected,
    stuData,
    setStuData,
  } = useContext(AppContext)

  const studentData = async () => {
    try {
      const resp = await axios.get(
        'https://6276914abc9e46be1a1801f3.mockapi.io/students',
      )

      setStuData(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `https://6276914abc9e46be1a1801f3.mockapi.io/students/${id}`,
      )

      setStuData(stuData.filter((row) => row.id !== id))
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  useEffect(() => {
    studentData()
  }, [])

  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container col-xs-12">
          <h1>List of Students</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
            non officia illo aliquid pariatur deserunt fugit obcaecati. Ipsam
            nihil delectus, enim quaerat molestias eaque necessitatibus optio.
            Velit repudiandae, et rerum labore modi esse alias earum quae
            voluptas numquam neque laboriosam exercitationem voluptatem
            voluptatibus fuga, quaerat excepturi fugiat officia qui laudantium?
          </p>

          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Course</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {stuData.map((row) => (
                  <tr key={row.id}>
                    <th>{row.id}</th>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.Batch}</td>
                    <td>{row.Course}</td>
                    <td>{row.PhoneNumber}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={(e) => handleSelected(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Students
