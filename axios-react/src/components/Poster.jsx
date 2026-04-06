function Poster() {
    return (
      <div style={{
        margin: "20px auto",
        width: "90%",
        height: "300px",
        borderRadius: "20px",
        background: "linear-gradient(to right, pink, purple)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        color: "white"
      }}>
        <div>
          <h1>✨ Glow Beauty Sale</h1>
          <p>Up to 50% OFF</p>
        </div>
  
        <img 
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
          alt=""
          style={{ height: "250px" }}
        />
      </div>
    );
  }
  
  export default Poster;