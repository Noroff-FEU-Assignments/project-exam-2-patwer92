import { PropTypes } from "prop-types";

function AdminContactItem({ id, firstName, lastName, email, message }) {
  return (
    <>
      <div className="admin__contacts" id={id}>
        <div className="admin__grid contacts--first-name">
          <h3 className="admin__grid-heading">Fornavn</h3>
          <p className="admin__grid-text">{firstName}</p>
        </div>

        <div className="admin__grid contacts--last-name">
          <h3 className="admin__grid-heading">Etternavn</h3>
          <p className="admin__grid-text">{lastName}</p>
        </div>

        <div className="admin__grid contacts--email">
          <h3 className="admin__grid-heading">E-post</h3>
          <p className="admin__grid-text">{email}</p>
        </div>

        <div className="admin__grid contacts--message">
          <h3 className="admin__grid-heading">Melding</h3>
          <p className="admin__grid-text">{message}</p>
        </div>
      </div>
    </>
  );
}

AdminContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default AdminContactItem;
