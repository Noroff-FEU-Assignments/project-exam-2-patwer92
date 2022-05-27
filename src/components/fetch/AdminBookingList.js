import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { format, utcToZonedTime } from "date-fns-tz";
import { BASE_URL } from "../../constants/api";
import AdminBookingItem from "./AdminBookingItem";

export default function AdminBookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "bookings/");

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setBookings(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="api__loading">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="api__error">
        <div>ERROR: An error occured</div>;
      </div>
    );
  }

  return (
    <>
      {bookings.map(function (booking) {
        const { id, title, fullName, email, address, zip, place, message, date } = booking;
        const timeZone = "Europe/Oslo";
        const zonedTime = utcToZonedTime(date, timeZone);
        const formattedDate = format(zonedTime, "dd/MM/yyyy HH:mm");
        return (
          <AdminBookingItem
            id={id}
            key={id}
            title={title}
            fullName={fullName}
            email={email}
            address={address}
            zip={zip}
            location={place}
            message={message}
            date={formattedDate}
          />
        );
      })}
    </>
  );
}
