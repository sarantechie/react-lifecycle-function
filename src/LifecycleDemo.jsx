import React, { useState, useEffect, useRef } from 'react';

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  // ComponentDidMount: Executes once on component mount
  useEffect(() => {
    console.log('Component mounted!');

    return () => {
      // ComponentWillUnmount: Executes on component unmount
      console.log('Component unmounted!');
    };
  }, []);

  // ComponentDidUpdate: Executes whenever `count` changes
  useEffect(() => {
    console.log('Count updated:', count);
    prevCount.current = count; // Mimic getSnapshotBeforeUpdate
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Lifecycle with Hooks</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount.current || 'None'}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default LifecycleDemo;
