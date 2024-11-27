import React, { useMemo, useCallback } from "react";

// Define the processData function
const processData = (data: any) => {
  // Your data processing logic here
  return data; // Modify this to return the processed data
};

interface MyComponentProps {
  data: any; // Replace 'any' with the specific type of your data if possible
}

const MyComponent: React.FC<MyComponentProps> = ({ data }) => {
  const processedData = useMemo(() => processData(data), [data]);
  const handleClick = useCallback(() => {
    // handle click
  }, []);

  return <div onClick={handleClick}>{processedData}</div>;
};

export default React.memo(MyComponent);
