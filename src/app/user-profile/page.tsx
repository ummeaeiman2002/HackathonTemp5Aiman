"use client";

import UserProfile from "../components/UserCompoent/ProfileCompoent";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <UserProfile
  
        name="Aiman"
        username="aiman002"
        email="aiman123@gmail.com"
        location="New York, USA"
        bio="student"
        followers={320}
        following={180}
        orderHistory={[
          {
            orderId: "ORD10001",
            date: "2025-01-05",
            total: 120.49,
            status: "Delivered",
          },
          {
            orderId: "ORD10002",
            date: "2025-02-01",
            total: 79.99,
            status: "Processing",
          },
          {
            orderId: "ORD10003",
            date: "2025-02-07",
            total: 55.00,
            status: "Shipped",
          },
        ]}
      />
    </div>
  );
};

export default HomePage;
