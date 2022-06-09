import { IEmployeeModel } from "../Model/EmployeeModel";

interface EmployeeProps {
  data: IEmployeeModel;
}

export const Employee = (props: EmployeeProps) => {
  return (
    <div>
      This is employees details.
      <br />
      Name: {props.data?.empName} <br />
      Email: {props.data?.empEmail}
    </div>
  );
};
