import React, { useState } from 'react';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    amount: '',
    billingAddress: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div
        className="w-full max-w-4xl p-10 shadow-lg rounded-lg"
        style={{ backgroundColor: 'rgba(0, 140, 114, 0.4)' }} // Custom background color with opacity
      >
        {/* First section for the heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-teal-600">Order Summary</h2>
        </div>

        {/* Second section for the form fields */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Order Number</label>
            <input
              type="text"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Amount</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex justify-end">
  <button
    type="submit"
    className="py-3 px-6 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 flex items-center"
  >
    Continue to Payment
    <svg
      className="ml-2 w-4 h-4" // Add margin to the left of the icon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6l6 6-6 6"
      />
    </svg>
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
