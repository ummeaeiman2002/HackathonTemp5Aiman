"use client";

import React, { useState } from "react";

interface UserProfileProps {
  name: string;
  username: string;
  email: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  orderHistory: { orderId: string; date: string; total: number; status: string }[];
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  username,
  email,
  bio,
  location,
  followers,
  following,
  orderHistory,
}) => {
  const [view, setView] = useState<"profile" | "history">("profile");

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6">
      {/* Toggle Buttons */}
      <div>
        <h1 className="my-5 text-3xl text-center font-semibold text-gray-800">User Profile</h1>
      </div>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setView("profile")}
          className={`px-4 py-2 rounded-md ${
            view === "profile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-300`}
        >
          Profile Details
        </button>
        <button
          onClick={() => setView("history")}
          className={`px-4 py-2 rounded-md ${
            view === "history"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-300`}
        >
          Order History
        </button>
      </div>

      {/* Profile View */}
      {view === "profile" && (
        <div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
            <p className="text-gray-600">@{username}</p>
          </div>

          {/* Bio */}
          <div className="mt-4">
            <p className="text-gray-700">{bio}</p>
          </div>

          {/* Contact Information */}
          <div className="mt-6">
            <p className="text-sm text-gray-600">Email: {email}</p>
            <p className="text-sm text-gray-600">Location: {location}</p>
          </div>

          {/* Social Info */}
          <div className="mt-6 flex space-x-6">
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-800">Followers:</span>
              <span className="text-gray-600">{followers}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-gray-800">Following:</span>
              <span className="text-gray-600">{following}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Follow
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition duration-300">
              Message
            </button>
          </div>
        </div>
      )}

      {/* Order History View */}
      {view === "history" && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
          {orderHistory.length > 0 ? (
            <ul className="space-y-4">
              {orderHistory.map((order) => (
                <li
                  key={order.orderId}
                  className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-800 font-semibold">
                      Order ID: {order.orderId}
                    </p>
                    <p className="text-sm text-gray-600">Date: {order.date}</p>
                    <p className="text-sm text-gray-600">Status: {order.status}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-blue-500">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No orders found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
