import React from "react";

export const Users = ({ refetch }) => {
  const [users, setUsers] = React.useState([]);
  const [sort, setSort] = React.useState(false);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then(({ data }) => setUsers(data))
      .catch((error) => console.log(error));
  }, [refetch]);

  const Sort = (e) => {
    e?.preventDefault();
    setUsers(
      [...users]?.sort(function (a, b) {
        return sort ? a?.id - b?.id : b?.id - a?.id;
      })
    );

    setSort(!sort);
  };

  return (
    <>
      <button onClick={Sort}>{`Sort ${sort ? "Inc" : "Des"}`}</button>

      <table
        style={{ border: "1px solid #dddddd", padding: " 8px", width: "70%" }}
      >
        <tr style={{ border: "1px solid #dddddd", padding: " 8px" }}>
          {["", "Id", "Name", "Email"]?.map((e, i) => {
            return (
              <th style={{ textAlign: "center", border: "1px solid #dddddd" }}>
                {e}
              </th>
            );
          })}
        </tr>

        {users?.map((e, i) => {
          return (
            <tr
              key={i}
              style={{ border: "1px solid #dddddd", padding: " 8px" }}
            >
              <td style={{ textAlign: "center", border: "1px solid #dddddd" }}>
                <img src={e?.avatar} alt="Italian Trulli" />
              </td>
              <td style={{ textAlign: "center", border: "1px solid #dddddd" }}>
                {e?.id}
              </td>
              <td
                style={{ textAlign: "center", border: "1px solid #dddddd" }}
              >{`${e?.first_name} ${e?.last_name}`}</td>
              <td style={{ textAlign: "center", border: "1px solid #dddddd" }}>
                {e?.email}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
