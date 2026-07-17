import Buttonx from "./Buttonx";
import Floating from "./Floating";

// Image Imports moved to this file
import home from "./img/home.jpeg";
import bg1 from "./img/bg1.png";
import rain from "./img/rain.jpeg";
import car from "./img/car.jpeg";
import green from "./img/green.jpeg";
import yard from "./img/yard.jpeg";
import star from "./img/star.jpeg";

const Home = () => {
  return (
    <>
      {/* Section 1: Hero Landing */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `url(${star})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "140vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: "550px",
            maxHeight: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "250px",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Fast, affordable <br /> internet
          </h1>
          <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
            starting at
          </h3>
          <h1 style={{ margin: "0" }}>GHS 500</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginTop: "50px",
              color: "black",
            }}
          >
            <Buttonx style={{ color: "black" }}>Get started</Buttonx>
            <Buttonx style={{ color: "white", backgroundColor: "#020000b3" }}>
              View pricing
            </Buttonx>
          </div>
        </div>
      </section>

      {/* Section 2: Features / Pricing Cards */}
      <section
        id="hero"
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "black",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.69)), url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "80vh",
          margin: 0,
          padding: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}
      >
        <Floating />

        <div style={{ paddingTop: "10vh", width: "100%" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            Stream, work from home, game & more
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            color: "black",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "#121111",
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "left",
              fontFamily: "sans-serif",
              paddingLeft: "30px",
              borderRadius: "8px",
            }}
          >
            <div style={{ paddingTop: "10px" }}>
              <h2>Residential Lite</h2>
              <p>
                Up to 200 Mbps. Fast, reliable internet for everyday home use.
                Note: 90th percentile download speeds
              </p>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
                GHS 500
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "500px",
              height: "250px",
              backgroundColor: "#121111",
              display: "flex",
              flexDirection: "column",
              color: "white",
              textAlign: "left",
              fontFamily: "sans-serif",
              paddingLeft: "30px",
              borderRadius: "8px",
            }}
          >
            <div style={{ paddingTop: "10px" }}>
              <h2>Residential</h2>
              <p>
                Residential service for residential customers at one location.
              </p>
            </div>
            <div style={{ paddingTop: "30px" }}>
              <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
                GHS 700
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            color: "white",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              textAlign: "center",
              padding: "0 20px",
            }}
          >
            Speeds referenced are maximum available speeds, are not guaranteed,
            and will be slower during times of congestion.
          </p>
        </div>
      </section>

      {/* Section 3: Resilience */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `url(${rain})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "140vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "250px",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Reliable & resilient
          </h1>
          <h3
            style={{
              marginBottom: "10px",
              fontWeight: "normal",
              lineHeight: "1.5",
            }}
          >
            Extreme weather conditions can cause significant disruptions to
            traditional internet networks. It is engineered to withstand heavy
            rain and harsh winds—keeping you connected with reliable, high-speed
            service when you need it most.
          </h3>
          <div style={{ display: "flex", marginTop: "50px", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Learn More
            </Buttonx>
          </div>
        </div>
      </section>

      {/* Section 4: Travel */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `url(${car})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "140vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "250px",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Internet for travel, <br /> road trips, <br />
            and commutes
          </h1>
          <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
            High-speed internet that moves with you, even in dead zones.
            In-motion use available in select areas.
          </h3>
          <div style={{ display: "flex", marginTop: "50px", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Learn More
            </Buttonx>
          </div>
        </div>
      </section>

      {/* Section 5: Global Availability */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `url(${green})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "140vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "10%",
            marginTop: "250px",
          }}
        >
          <h1 style={{ lineHeight: "1.2", color: "white" }}>
            Available globally
          </h1>
          <p
            style={{
              marginBottom: "20px",
              fontWeight: "normal",
              color: "#e4e4e4",
            }}
          >
            Delivering reliable connectivity in 160+ countries, territories, and
            other markets around the world.
          </p>
          <div style={{ display: "flex", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Check availability
            </Buttonx>
          </div>
        </div>
      </section>

      {/* Section 6: Setup */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.08)), url(${yard})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "140vh",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "250px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px 0",
              lineHeight: "1.2",
              color: "#fffefe",
            }}
          >
            Plug it in. Point at sky.
          </h1>
          <h3
            style={{
              marginBottom: "10px",
              fontWeight: "normal",
              color: "#fdf7f7",
            }}
          >
            High-speed internet that moves with you, even in dead zones.
            In-motion use available in select areas.
          </h3>
          <div style={{ display: "flex", marginTop: "50px", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Get The App
            </Buttonx>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
