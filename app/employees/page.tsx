import React from "react";
import { employeeList } from "@/data";
import EmployeeCard from "@/components/EmployeeCard";

const employees = () => {
  return (
    <div>
      <h1>Employees</h1>
      {employeeList.map((employee: any) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          positions={employee.positions}
        />
      ))}
    </div>
  );
};

export default employees;
