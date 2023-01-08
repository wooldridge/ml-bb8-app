import Alert from '../Alert/Alert';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import CriticalParts from '../CriticalParts/CriticalParts';
import FuelUsage from '../FuelUsage/FuelUsage';
import Infrastructure from '../Infrastructure/Infrastructure';
import RegionMap from '../RegionMap/RegionMap';
import CargoOperations from '../CargoOperations/CargoOperations';
import CurrentTime from '../CurrentTime/CurrentTime';

function Dashboard() {
  return (
    <div>
      <Alert />
      <Navbar />
      <Sidebar />
      <div className='row g-0'>
        <CriticalParts />
        <FuelUsage />
      </div>
      <div className='row g-0'>
        <Infrastructure />
        <RegionMap />
      </div>
      <CargoOperations />
      <CurrentTime />
      <Alert />
    </div>
  );
}

export default Dashboard;
