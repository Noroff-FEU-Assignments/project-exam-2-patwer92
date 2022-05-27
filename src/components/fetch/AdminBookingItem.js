import { PropTypes } from "prop-types";

function AdminBookingItem({ id, title, fullName, email, address, zip, location, message, date }) {
  return (
    <>
      <div className="admin__bookings" id={id}>
        <div className="admin__grid bookings--title">
          <h3 className="admin__grid-heading">Booking</h3>
          <p className="admin__grid-text">{title}</p>
        </div>

        <div className="admin__grid bookings--name">
          <h3 className="admin__grid-heading">Navn</h3>
          <p className="admin__grid-text">{fullName}</p>
        </div>

        <div className="admin__grid bookings--email">
          <h3 className="admin__grid-heading">E-post</h3>
          <p className="admin__grid-text">{email}</p>
        </div>

        <div className="admin__grid bookings--address">
          <h3 className="admin__grid-heading">Adresse</h3>
          <p className="admin__grid-text">{address}</p>
          <div className="admin__grid-location">
            <p className="admin__grid-text">
              {zip}
              <span>,</span>
            </p>
            <p className="admin__grid-text">{location}</p>
          </div>
        </div>
        <div className="admin__grid bookings--date">
          <h3 className="admin__grid-heading">Tid</h3>
          <p className="admin__grid-text">{date}</p>
        </div>
        <div className="admin__grid bookings--message">
          <h3 className="admin__grid-heading">Melding</h3>
          <p className="admin__grid-text">{message}</p>
        </div>
      </div>
    </>
  );
}

AdminBookingItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  message: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default AdminBookingItem;
