import bg2 from "./img/bg2.png";
import bg1 from "./img/bg1.png";
import boat from "./roam/boat.jpeg";
import Buttonx from "./Buttonx";
import Floating from "./Floating";
import Slide from "./Slide";
import mountain from "./roam/mountain.jpeg";
import night from "./roam/night.jpeg";
import car from "./img/car.jpeg";
import water from "./roam/water.jpeg";
import lighting from "./roam/lighting.jpeg";

const Roam = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0)), url(${boat})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "140vh",
          display: "flex",
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
            marginTop: "50vh",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Roam with Starlink
          </h1>
          <h3 style={{ marginBottom: "10px", fontWeight: "normal" }}>
            starting at
          </h3>
          <h1 style={{ margin: "0" }}>$55</h1>
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
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.51), rgb(0, 0, 0)),url(${bg2})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          minHeight: "300vh",
          backgroundColor: "#070709",
          overflow: "hidden",
        }}
      >
        <Floating />
        <div
          style={{
            width: "100%",
            minHeight: "80vh",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <div style={{ paddingTop: "15vh", width: "100%" }}>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              High-speed internet on the go
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              color: "#121212",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                width: "350px",
                height: "250px",
                backgroundColor: "#121111",
                display: "flex",
                flexDirection: "column",
                color: "#fafafa",
                textAlign: "left",
                fontFamily: "sans-serif",
                paddingLeft: "30px",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            >
              <div style={{ paddingTop: "10px" }}>
                <h2>Roam - 100GB</h2>
                <p>
                  Up to 300+ Mbps for approximately 1 week of typical use.
                  Reliable connectivity for occasional trips, camping, and
                  getaways. Get unlimited low-speed data after using your Roam
                  data.
                </p>
              </div>
              <div style={{ paddingTop: "15px" }}>
                <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
                <p
                  style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
                >
                  $55
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div
              style={{
                width: "350px",
                height: "250px",
                backgroundColor: "#121111",
                display: "flex",
                flexDirection: "column",
                color: "#fafafa",
                textAlign: "left",
                fontFamily: "sans-serif",
                paddingLeft: "30px",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            >
              <div style={{ paddingTop: "10px" }}>
                <h2>Roam - 300GB</h2>
                <p>
                  Up to 300+ Mbps. Reliable connectivity for regular travelers
                  with multiple trips a month. Get unlimited low-speed data
                  after using your Roam data.
                </p>
              </div>
              <div style={{ paddingTop: "35px" }}>
                <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
                <p
                  style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
                >
                  $80
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div
              style={{
                width: "350px",
                height: "250px",
                backgroundColor: "#121111",
                display: "flex",
                flexDirection: "column",
                color: "#fafafa",
                textAlign: "left",
                fontFamily: "sans-serif",
                paddingLeft: "30px",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            >
              <div style={{ paddingTop: "10px" }}>
                <h2>Roam - Unlimited</h2>
                <p>
                  Up to 300+ Mbps. Our best performing internet on the go with
                  unlimited high-speed data.
                </p>
              </div>
              <div style={{ paddingTop: "35px" }}>
                <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
                <p
                  style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
                >
                  GHS 500
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
              Speeds referenced are maximum available speeds, are not
              guaranteed, and will be slower during times of congestion.
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            minHeight: "80vh",
            margin: 0,
            padding: 0,
            justifyContent: "center",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <div style={{ paddingTop: "15vh", width: "100%" }}>
            <h2
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Internet for travel, road trips, and <br /> commutes
            </h2>
          </div>
          <Slide />
        </div>

        <div
          style={{ paddingTop: "25vh", width: "100%", paddingBottom: "25vh" }}
        >
          <h2
            style={{
              fontSize: "66px",
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            Flexible service plans
          </h2>
          <p>
            Pause and un-pause service at any time with Standby Mode, which
            allows emergency messaging <br />
            and easy reactivation in dead zones for a small monthly fee. Billing
            is in one-month increments,
            <br />
            allowing you to customize your service to your individual travel
            needs.
          </p>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%), url(${mountain})`,
            backgroundPosition: "center",
            backgroundSize: "135%",
            minHeight: "140vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: "550px",
              maxHeight: "580px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              marginLeft: "40px",
              paddingTop: "50vh",
            }}
          >
            <h1
              style={{
                margin: "0 0 10px 0",
                lineHeight: "1.2",
                fontSize: "66px",
              }}
            >
              Starlink Mini for <br />
              internet on the go
            </h1>
            <p>
              Starlink Mini is a compact, portable Kit with a built-in router
              that can easily fit in a backpack, designed to provide fast,
              reliable internet on the go.
            </p>
          </div>
        </div>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "flex-start",
            minHeight: "80vh",
            backgroundColor: "black",
            alignItems: "center",
            marginLeft: "40px",
          }}
        >
          <div style={{ width: "50%", textAlign: "left" }}>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "bolder",
              }}
            >
              Work and play at remote destinations
            </h2>
            <p>
              Starlink connects within minutes and packs up quickly when it's
              time to move to your next destination.
            </p>
          </div>
          <div
            style={{
              width: "45%",
              border: "2px solid black",
              backgroundImage: `url(${night})`,
              backgroundSize: "cover",
              height: "360px",
              borderRadius: "20px",
            }}
          ></div>
        </section>
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.69)0%, rgba(0,0,0,0.69)70%) ,url(${car})`,
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
            marginTop: "55vh",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            Use Starlink in motion
          </h1>
          <p>
            In-motion use is supported with Roam service plans in select areas.
          </p>
          <div style={{ display: "flex", marginTop: "50px", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Learn More
            </Buttonx>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%), url(${bg1})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          minHeight: "120vh",
          backgroundColor: "#070709",
          overflow: "hidden",
          display: "flex",
          flexDirection:'row'
        }}
      >
       <section style={{ width: "100%", display: "flex", justifyContent: "center" }}>
  {/* PARENT WRAPPER: Handles the side-by-side layout */}
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center", // Vertically centers the text next to the image
      width: "100%",
      maxWidth: "1200px",
      gap: "60px", // Creates clean spacing between image and text
      padding: "60px 40px",
    }}
  >
    {/* LEFT COLUMN: The Water Image */}
    <div
      style={{
        flex: 1, // Takes up 50% width
        backgroundImage: `url(${water})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px", // Gives the image container a solid height
        borderRadius: "20px",
      }}
    ></div>

    {/* RIGHT COLUMN: The Text Section */}
    <div
      style={{
        flex: 1, // Takes up the other 50% width
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2", fontSize: "48px" }}>
        Starlink on the water
      </h1>
      <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
        Stay connected with high-speed internet on your boat using any
        Starlink Roam plan in coastal and inland waters.
      </p>
      <p style={{ paddingTop: "20px", fontSize: "18px", lineHeight: "1.5" }}>
        For frequent or extended ocean travel, explore Starlink Maritime.
      </p>

      <div style={{ display: "flex", marginTop: "40px", color: "black" }}>
        <Buttonx style={{ color: "black", width: "200px" }}>
          Learn More
        </Buttonx>
      </div>
    </div>
  </div>
</section>
        
      </section>
      <section>
  <div
    style={{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0)), url(${lighting})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "120vh",
      display: "flex",
      flexDirection: "column", 
      
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
        marginTop: "30vh", // Reduced slightly from 50vh so the bottom text fits nicely on screen
      }}
    >
      <h1
        style={{
          margin: "0 0 10px 0",
          lineHeight: "1.2",
          fontSize: "66px", // Fixed capital S
          fontWeight: "bold", // Fixed missing 't'
        }}
      >
        Reliable & resilient
      </h1>
      <p style={{ marginBottom: "10px", fontWeight: "normal" }}>
        Extreme weather conditions can cause significant disruptions to
        traditional internet networks. Starlink is engineered to melt snow and
        withstand sleet, heavy rain, and harsh winds—keeping you connected
        with reliable, high-speed service when you need it most.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginTop: "30px",
          color: "black",
        }}
      >
        <Buttonx style={{ color: "black" }}>Get started</Buttonx>
      </div>
    </div>

    <div style={{ width: "100%", marginTop: "150px", paddingLeft: "40px" }}>
      <h1 style={{ fontSize: "66px", fontWeight: "bold", margin: 0 }}>
        What our customers say
      </h1>
    </div>
  </div>
</section>
    </>
  );
};
export default Roam;
  