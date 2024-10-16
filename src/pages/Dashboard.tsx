import pieChartImage from '../images/pie.png';
import NextCollections from './NextCollections';
import SpecialCollectionHistory from './SpecialCollectionHistory';
const Dashboard = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between  p-6 bg-gray-50">
        {/* Left Section - Waste Info and Chart */}
        <div className="flex flex-col w-full md:w-2/3">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg flex-1 mx-2">
              <span className="text-teal-600">Current Waste Level</span>
              <div className="text-2xl font-bold text-teal-600">50%</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg flex-1 mx-2">
              <span className="text-teal-600">Total Waste Produced</span>
              <div className="text-2xl font-bold text-teal-600">200Kg</div>
            </div>
          </div>
  
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-center items-center">
            <img src={pieChartImage} alt="Waste Distribution Chart" className="w-full md:w-2/3" />
          </div>
        </div>
  
        {/* Right Section - Next Collections and Special Collection History */}
        <div className="flex flex-col w-full md:w-1/3 space-y-6 mt-6 md:mt-0">
          <div className="ml-12"> {/* Add margin to the right */}
            <NextCollections />
          </div>
          <div className="ml-12"> {/* Add margin to the right */}
            <SpecialCollectionHistory />
          </div>
        </div>
      </div>
    );
  };
  
  

export default Dashboard;
