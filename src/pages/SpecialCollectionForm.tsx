import React, { useState } from 'react';

const SpecialCollectionForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        wasteType: '',
        pickupDate: '',
        notes: '',
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
                <h2 className="text-3xl font-semibold mb-8 text-teal-600 text-center">Request Special Collection</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Type of Waste</label>
                        <input
                            type="text"
                            name="wasteType"
                            value={formData.wasteType}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Preferred Pickup Dates</label>
                        <input
                            type="text"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Additional Notes</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            rows={4}
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="py-3 px-6 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                            Submit Request
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpecialCollectionForm;
