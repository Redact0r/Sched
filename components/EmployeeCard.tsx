const EmployeeCard = ({ key, name, wageHourly, wageDaily, positions }) => {
  return (
    <div key={key}>
      <h2>{name}</h2>
      <div>
        {positions.map((position: any) => (
          <label id={position}>
            <input type="checkbox" value={position} name={position} />
            {position}
          </label>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
