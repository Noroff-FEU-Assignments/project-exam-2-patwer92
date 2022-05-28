import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Loading from "../common/Loading";
import AdminContactItem from "./AdminContactItem";

export default function AdminContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(BASE_URL + "contacts/");

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setContacts(json);
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
    return <Loading />;
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
      {contacts.map(function (contact) {
        const { id, firstName, lastName, email, message } = contact;

        return (
          <AdminContactItem
            id={id}
            key={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            message={message}
          />
        );
      })}
    </>
  );
}
