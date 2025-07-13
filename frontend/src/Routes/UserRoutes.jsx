// src/routes/UserRoutes.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx'; 

import HomePage from '../Pages/User/HomePage.jsx'; 
import EventDetailsPage from '../Pages/User/EventDetailsPage.jsx';
import BookingSuccessPage from '../Pages/User/BookingSuccessPage.jsx'; 
import AllEventsPage from '../Pages/User/AllEventsPage.jsx'; 
import PaymentSuccessPage from '../Pages/User/PaymentSuccessPage.jsx'; 
import PaymentCancelPage from '../Pages/User/PaymentCancelPage.jsx'; 
import TransferTicketModal from '../Pages/User/TransferTicketModal.jsx';
import UserProfilePage from '../Pages/User/UserProfilePage.jsx'; 
import UserTicketsPage from '../Pages/User/UserTicketsPage.jsx'; 
import UserDashboard from '../Pages/User/UserDashboard.jsx'; 
import AdminCreateEventPage from '../Pages/Admin/AdminCreateEventPage.jsx'; 


const UserRoutes = () => {
  return (
    <Routes>

      {/* Default route for /user redirects to dashboard */}
      <Route index element={<Navigate to="dashboard" replace />} />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* Profile */}
      <Route
        path="profile"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <UserProfilePage />
          </ProtectedRoute>
        }
      />

      {/* My Tickets */}
      <Route
        path="my-tickets"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <UserTicketsPage />
          </ProtectedRoute>
        }
      />

      {/* Event Details */}
      <Route
        path="event/:eventId"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <EventDetailsPage />
          </ProtectedRoute>
        }
      />

      {/* Create Event */}
      <Route
        path="create-event"
        element={
          <ProtectedRoute allowedRoles={['organizer', 'admin']}>
            <AdminCreateEventPage />
          </ProtectedRoute>
        }
      />

      {/* Booking Success */}
      <Route
        path="booking-success"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <BookingSuccessPage />
          </ProtectedRoute>
        }
      />

      {/* Payment Success */}
      <Route
        path="payment/success"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <PaymentSuccessPage />
          </ProtectedRoute>
        }
      />

      {/* Payment Cancel */}
      <Route
        path="payment/cancel"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <PaymentCancelPage />
          </ProtectedRoute>
        }
      />

      {/* Transfer Ticket Modal */}
      <Route
        path="transfer-ticket"
        element={
          <ProtectedRoute allowedRoles={['user', 'organizer', 'admin']}>
            <TransferTicketModal
              isOpen={true}
              onClose={() => alert('This is a modal displayed as a page. Close not handled.')}
              refreshTickets={() => console.log('Refreshing tickets from TransferTicketPage')}
              ticketId={''}
            />
          </ProtectedRoute>
        }
      />

      {/* Catch-all 404 */}
      <Route
        path="*"
        element={
          <div className="text-center p-10 text-red-600 text-2xl font-bold">
            404 - User Section Page Not Found
          </div>
        }
      />

    </Routes>
  );
};

export default UserRoutes;
