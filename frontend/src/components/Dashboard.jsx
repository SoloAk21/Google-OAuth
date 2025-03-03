import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token); // Decode the JWT token
      setUser(decoded);
      console.log("User decoded:", decoded);
    } catch (error) {
      console.error("Invalid token", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Your Dashboard
        </h2>

        {user ? (
          <div>
            {/* Display User Avatar */}
            {user.picture && (
              <img
                src={user.picture}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-200"
              />
            )}

            {/* Display User Email */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Email: {user.email}
            </h3>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-gray-600">Loading user info...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
