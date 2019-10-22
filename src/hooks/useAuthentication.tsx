import { useEffect, useState } from "react";

const useAuthentication = (): [boolean] => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    setAuthenticated(true);
  }, [setAuthenticated]);

  return [authenticated];
};

export default useAuthentication;
