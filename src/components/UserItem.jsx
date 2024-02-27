import { useParams, useNavigate } from "react-router-dom";
import { UsersContext } from "../context/UserContext";
import { useContext, useState, useEffect } from "react";

const UserItem = () => {
  // kada koristite useParams, mozete pristupiti parametrima koji su deo trenutne putanje
  // u ovom slucaju userId ce sadrzati vrednost parametra userId iz trenutne putanje
  const { userId } = useParams();
  const { users } = useContext(UsersContext);
  const [user, setUser] = useState(undefined);

  // za navigaciju u React router-u
  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/");
  };

  const handleBackButton = () => {
    navigate(-1);
  };
  const handleAboutButton = () => {
    navigate("/about");
  };

  useEffect(() => {
    const user = users.find((user) => user.id === parseInt(userId));

    setUser(user);
  }, []);

  return (
    <>
      <h1>User item: {userId}</h1>
      <button onClick={handleHomeButton}>Home</button>
      <button onClick={handleBackButton}>Back</button>
      <button onClick={handleAboutButton}>About</button>
      {user ? (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>website: {user.website}</p>
        </div>
      ) : (
        <div>we can't find user</div>
      )}
    </>
  );
};

export default UserItem;
