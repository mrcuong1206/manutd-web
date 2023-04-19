import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="py-32 flex justify-center items-center">
      {loading && <ClipLoader color={"red"} loading={loading} size={100} />}
    </div>
  );
}

export default Loading;
