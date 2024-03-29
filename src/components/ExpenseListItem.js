import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h4>{description}</h4>
      </Link>
      <p>
        {numeral(amount / 100).format('$0,0.00')}-
        {moment(createdAt).format('LL')}
      </p>
    </div>
  )
}
export default ExpenseListItem
