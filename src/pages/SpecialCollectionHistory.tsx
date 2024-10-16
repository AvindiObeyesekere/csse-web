const SpecialCollectionHistory = () => {
    return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">Special Collection History</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Bulky Items</span>
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          </li>
          <li className="flex justify-between items-center">
            <span>Electronics</span>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </li>
          <li className="flex justify-between items-center">
            <span>Furniture</span>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default SpecialCollectionHistory;
  