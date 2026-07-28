
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Logout from "../pages/Logout";
import SignUp from "../pages/SignUp";

import AdminDashboard from "../pages/AdminDashboard";
import CustomerDashboard from "../pages/CustomerDashboard";
import HotelOwnerDashboard from "../pages/HotelOwnerDashboard";
import StaffDashboard from "../pages/StaffDashboard";

import StaffProfile from "../pages/StaffProfile";
import StaffAssignedTasks from "../pages/StaffAssignedTasks";
import StaffUpdateRoomStatus from "../pages/StaffUpdateRoomStatus";
import StaffChangePassword from "../pages/StaffChangePassword";

import AdminProfile from "../pages/AdminProfile";
import AdminChangePassword from "../pages/StaffAssignedTasks copy";
import ApproveHotelOwners from "../pages/ApproveHotelOwners";
import AdminHotelOwner from "../pages/AdminHotelOwner";
import AdminPayments from "../pages/AdminPayments";
import AdminReports from "../pages/AdminReports";
import AdminUsers from "../pages/AdminUsers";

import HAddHotel from "../pages/HAddHotels";
import HAddStaff from "../pages/HAddStaff";
import HManageRoom from "../pages/HManageRooms";
import HUpdateRoom from "../pages/HUpdateRoom";
import HRoomPrice from "../pages/HRoomPrice";
import HBookingReport from "../pages/HBookingReport";
import HPayments from "../pages/HPayments";
import HViweCustomer from "../pages/HViewCustomer";
import HProfile from "../pages/HProfile";
import HChangePassword from "../pages/HChangePassword";
import CSearchHotel from "../pages/CSearchHotel";
import CHotelDetail from "../pages/CHotelDetail";
import CRoomAvailable from "../pages/CRoomAvailable";
import CBookRoom from "../pages/CBookRoom";
import CCancelBook from "../pages/CCancelBook";
import CMakePayment from "../pages/CMakePayment";
import CBookingHistory from "../pages/CBookingHistory";
import CDownloadInvoice from "../pages/CDownloadInvoice";
import CReview from "../pages/CReview";
import CProfile from "../pages/CProfile";
import CChangePassword from "../pages/CChangePassword";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />

        {/* Role Based Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/hotelowner" element={<HotelOwnerDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />

        {/* Staff section routes*/}
        <Route path="/staff/profile" element={<StaffProfile />}/>
        <Route path="/staff/tasks" element={<StaffAssignedTasks />}/>
        <Route path="/staff/rooms" element={<StaffUpdateRoomStatus />}/>
        <Route path="/staff/password" element={<StaffChangePassword />}/> 

        {/*Admin section routes */}
        <Route path="/admin/profile" element={<AdminProfile />}/>
        <Route path="/admin/users" element={<AdminUsers />}/>
        <Route path="/admin/reports" element={<AdminReports />}/>
        <Route
        path="/admin/hotelowner"
        element={<ApproveHotelOwners />}
    />
        <Route path="/admin/hotelowner" element={<AdminHotelOwner />}/>
        <Route path="/admin/payments" element={<AdminPayments />}/>
        <Route path="/admin/password" element={<AdminChangePassword />}/> 

        {/*HotelOwner section routes*/}
        <Route path="/hotelowner/add-hotel" element={<HAddHotel />} />
        <Route path="/hotelowner/add-staff" element={<HAddStaff/>} />
        <Route path="/hotelowner/manage-rooms" element={<HManageRoom />} />
        <Route path="/hotelowner/availability" element={<HUpdateRoom />} />
        <Route path="/hotelowner/pricing" element={<HRoomPrice />} />
        <Route path="/hotelowner/bookings" element={<HViweCustomer/>} />
        <Route path="/hotelowner/payments" element={<HPayments />} />
        <Route path="/hotelowner/reports" element={<HBookingReport />} />
        <Route path="/hotelowner/profile" element={<HProfile />} />
        <Route path="/hotelowner/password" element={<HChangePassword/>} />

        {/*Customer section routes*/}
        <Route path="/customer/search-hotels" element={<CSearchHotel />} />
        <Route path="/customer/hotel-details" element={<CHotelDetail />} />
        <Route path="/customer/availability" element={<CRoomAvailable />} />
        <Route path="/customer/book-room" element={<CBookRoom />} />
        <Route path="/customer/cancel-booking" element={<CCancelBook />} />
        <Route path="/customer/payment" element={<CMakePayment />} />
        <Route path="/customer/history" element={<CBookingHistory />} />
        <Route path="/customer/invoice" element={<CDownloadInvoice />} />
        <Route path="/customer/review" element={<CReview />} />
        <Route path="/customer/profile" element={<CProfile />} />
        <Route path="/customer/password" element={<CChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;