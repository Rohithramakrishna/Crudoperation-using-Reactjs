import React ,{useContext} from 'react'
import { EmployeeContextApi } from '../../ContexrApi/EmployeeContext'
import { Link } from 'react-router-dom';
import axiosInstance from './../../services/Axiosinstance';
import { toast } from 'react-toastify';

const AllEmployeess = () => {
  let {employees,loading} = useContext(EmployeeContextApi);
  let removeEmp = async (id)=>{
    try {
      await axiosInstance.delete(`/employees/${id}`);
      toast.success("employee deleted");
      window.location.assign("/")
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <section id='empTableBlock'>
    <article>
      <h1>List of Employees </h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>gender</th>
            <th>details</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            loading === true ? "loading" : employees?.map(emp =>{
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.emp_name} </td>
                  <td>
                  <span> &#x20b9;</span>{emp.emp_salary} </td>
                  <td>
                 
                    {emp.emp_designation} </td>
                  <td>{emp.gender} </td>
                  <td className='view_more'>
                    <Link to={`/view-emp/${emp.id}` }>View More</Link>
                  </td>
                  <td className='edit_block'>
                    <Link to={`/edit-emp/${emp.id}` }> Edit</Link>
                  </td>
                  <td className='delete_block'>
                    <button  onClick={()=> removeEmp(emp.id)}> Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </article>
    </section>
  )
}

export default AllEmployeess
