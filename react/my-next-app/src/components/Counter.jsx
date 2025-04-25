'use client';
 
import { useState, useEffect } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    console.log("Count is:", count);
  }, [count]);
 
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">Count: {count}</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
 