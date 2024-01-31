import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Schedule from '../pages/schedule/Schedule'
import ScheduleEdit from '../pages/schedule/ScheduleEdit'
import ScheduleTable from '../pages/schedule/ScheduleTable'
import InstructorConfirmOM from '../pages/schedule/InstructorConfirmOM'

import Employee from '../pages/employeeMgt/Employee'
import TblEmpSummary from '../pages/employeeMgt/TblEmpSummary'
import EmpRegistration from '../pages/employeeMgt/EmpRegistration'
import EmpUpdate from '../pages/employeeMgt/EmpUpdate'
import EmpLeave from '../pages/employeeMgt/EmpLeave'
import EmpSalary from '../pages/employeeMgt/EmpSalary'
import EmpSalaryEdit from '../pages/employeeMgt/EmpSalaryEdit'


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/index' />} />

            {/* Schedule pages routing */}
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/changerequest" element={<ScheduleEdit />} />
            <Route path="/trainings" element={<ScheduleTable />} />
            <Route path="/confirmation" element={<InstructorConfirmOM />} />

            {/* Employee management pages routing */}
            {/* <Route path="/employee" element={<Employee />} /> */}
            <Route path="/employee-summary" element={<TblEmpSummary />} />
            {/* <Route path="/employee-registration" element={<EmpRegistration />} />
            <Route path="/employee-update" element={<EmpUpdate />} /> */}
            <Route path="/employee-leave" element={<EmpLeave />} />
            {/* <Route path="/employee-salary" element={<EmpSalary />} />
            <Route path="/employee-salary-edit" element={<EmpSalaryEdit />} /> */}

            {/* Package */}




        </Routes>
    )
}

export default Router;