import React from 'react';

const MyBuyers = () => {
    return (
      <div className="m-12 h-[70vh]">
        <div className="flex justify-between text-xl font-bold ">
          <h3>My Buyer</h3>
        </div>
        <div className="mt-3">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="bg-primary"></th>
                  <th className="bg-primary">Product Name</th>
                  <th className="bg-primary">Resale Price</th>
                  <th className="bg-primary">Date</th>
                  <th className="bg-primary">Action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyBuyers;