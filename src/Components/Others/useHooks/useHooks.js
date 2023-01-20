import { useEffect } from "react";
import { useState } from "react";

const useUserRole = (email) => {
  const [userRole, setuserRole] = useState();
  const [userRoleloading, setUserRoleloading] = useState(true);
  useEffect(() => {
    fetch(`https://freezer-server.vercel.app/loaddbuser?email=${email}`, {})
      .then((res) => res.json())
      .then((data) => {
        setuserRole(data);
        setUserRoleloading(false);
      })
      .catch((err) => {});
  }, [email]);

  return [userRole, userRoleloading];
};

export default useUserRole;
