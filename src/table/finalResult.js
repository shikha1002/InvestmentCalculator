import classes from './finalResult.module.css'

const FinalResultList = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const table = (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          props.finalResult.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>{formatter.format(data.savingsEndOfYear - props.initialContribution - data.yearlyContribution * data.year)}</td>
              <td>{formatter.format(props.initialContribution + data.yearlyContribution * data.year)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  )
  return (
    <div>
      {props.finalResult.length > 0 ? table : (<p style={{ textAlign: 'center' }}>No Data Available</p>)
      }
    </div>

  )
}

export default FinalResultList;