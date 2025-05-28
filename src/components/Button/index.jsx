import { useState } from 'react';

const Button = ({ text, classStyle }) => {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(!showForm);

  }

  return (
    <>
      <button className={classStyle} onClick={handleClick}>
        {text}
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button onClick={handleClick} className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500">×</button>
            <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <div className="flex gap-2">
                <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <input type="text" placeholder="Expiry Date (MM/YY)" className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <input type="number" placeholder="Amount" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">Pay Now</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
