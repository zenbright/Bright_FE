import React, {useState} from 'react';
import {Tldraw} from 'tldraw';
import 'tldraw/tldraw.css';


const TlDrawComponent = () => {
  const [PersistenceKey] = useState('Bright_FE');
  const [snapshotData, setSnapshotData] = useState(null);

  const handleSnapshot = () => {
    const currentData = tldraw.store.getSnapshot(); // Get snapshot
    setSnapshotData(currentData); // Update snapshot state
  };

  return (
    <div style={{position: 'fixed', inset: 0, marginTop: '48px'}}>
      <Tldraw persistenceKey={PersistenceKey}>
      </Tldraw>
      <button onClick={handleSnapshot}>Take Snapshot</button>
      {snapshotData && (
        <div>
          <h2>Snapshot Data</h2>
          {/* Display or use the snapshot data here (e.g., JSON.stringify) */}
        </div>
      )}
    </div>
  );
};

export default TlDrawComponent;
