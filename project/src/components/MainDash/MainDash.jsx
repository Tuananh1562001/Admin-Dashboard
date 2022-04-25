import Cards from '../Cards/Cards'
import BasicTable from '../Table/Table'
import './MainDash.css'
function MainDash() {
  return (
    <div className='MainDash'>
        <h1>DashBoard</h1>
        <Cards />
        <h2>Recent Orders</h2>
        <BasicTable />
    </div>
  )
}

export default MainDash