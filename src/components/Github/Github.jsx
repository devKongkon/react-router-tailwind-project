// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  /*  
  const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch(`https://api.github.com/users/devKongkon`)
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
    }, [])
   */

  return (
    <>
      <h1></h1>
      <img src={data.avatar_url} alt="" width={250} />
    </>
  );
}

export default Github;
//You should write this function another file. That was the optimized way to fetch api.
// eslint-disable-next-line react-refresh/only-export-components
export const githubData = async () => {
  const res = await fetch("https://api.github.com/users/devKongkon")
  return res.json()
}
