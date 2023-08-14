import React, { useEffect, useState } from "react";

const Thankyou = () => {
  const [name, setName] = useState("")
  useEffect(() => {
    const searchParams = new URLSearchParams(document.location.search)
    setName(searchParams.get("name"))
  }, [])
  return <div>{name}</div>;
};

export default Thankyou;
