import React, { useEffect, useState } from "react";
import FancyBorder from "./FancyBorder";
import SubmitShift from "./SubmitShift";
import SubTitle from "./SubTitle";
import Search from "./Search";
import User from "./User";
import Total from "./Total";
const UserList = ({ fetchUrl }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  getResult()
  }, []);
  const getResult = async () => {
    setLoading(true);
    try {
      const response = await fetch(fetchUrl);
      const result = await response.json();
      setUsers(result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const addEmployee = (user) => {
    setUsers((prevValue) => {
      return [...prevValue, user];
    });
  };

  const handleFilter = (search) => {
   const users= await getResult();
    setUsers((prevalues) =>
      prevalues.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const totalMs = users.reduce(
    (acc, user) => acc + (Date.parse(user.end) - Date.parse(user.start)),
    0
  );
  const listOfEmployees = users.map((user, index) => (
    <FancyBorder>
      <User
        key={user.id}
        name={user.name}
        startDate={user.start}
        endDate={user.end}
      />
    </FancyBorder>
  ));

  return (
    <div className="lists">
      <div></div>
      <div className="form-to-submit">
        <FancyBorder>
          <SubmitShift addEmployee={addEmployee} />
        </FancyBorder>
      </div>
      <div></div>
      <div className="search-name">
        <FancyBorder>
          <Search handleFilter={handleFilter} />
        </FancyBorder>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="list-overviews">
            <ul>
              <FancyBorder>
                <SubTitle />
              </FancyBorder>
              {listOfEmployees}
            </ul>

            <FancyBorder>
              <Total totalMs={totalMs} />
            </FancyBorder>
          </div>
        )}
        {error && <div>{error.message}</div>}
      </div>
    </div>
  );
};

export default UserList;
