import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: 20 }}>
      <RoundedRectangle />
      <RoundedRectangle />
      <RoundedRectangle />
    </div>
  );
}

const RoundedRectangle = () => {
  const containerStyle = {
    width: '150px', // Adjust as per your requirement
    height: '80px', // Adjust as per your requirement
    backgroundColor: '#ffffff',
    borderRadius: '20px', // Adjust to change the roundness
    border: '2px solid rgba(0, 0, 0, 0.15)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px', // Adjust to center vertically
    marginLeft: '20px', // Adjust spacing between rectangles
    marginRight: '20px' // Adjust spacing between rectangles
  };

  return (
    <div style={containerStyle}>
      {/* <h1 style={h1Style}>Hello world</h1> */}
    </div>
  );
}

export default App;
