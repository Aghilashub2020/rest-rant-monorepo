function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div style={{ textAlign: "center" }}>
        <img
          height="300"
          width="500"
          src="http://localhost:5000/images/chia-fruit-drink.jpg"
          alt="Chia Fruit Shake"
        />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
          <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </div>
    </main>
  );
}

export default Home;
