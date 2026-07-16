import home from "./res/home.jpeg";
import bg2 from "./img/bg2.png";
import Floating from "./Floating";
import Buttonx from "./Buttonx";
import light from "./res/ligh.jpeg";
import rain from "./res/lighting.jpeg";
import shed from "./res/shed.jpeg";
import out from "./res/out1.jpeg";
const Residential = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "140vh",
        }}
      >
        <div
          style={{
            width: "550px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "left",
            paddingTop: "30vh",
            marginLeft: "3vw",
            paddingBottom: "40px",
          }}
        >
          <h1
            style={{
              lineHeight: "1.2",
              fontSize: "66px",
              fontWeight: "medium",
              textAlign: "left",
              margin: "0 0 10px 0",
            }}
          >
            Fast, reliable home internet
          </h1>
          <p>starting at</p>
          <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>$39.99/mo</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            maxWidth: "500px",
            marginLeft: "3vw",
          }}
        >
          {/* The Input Field */}
          <input
            type="text"
            placeholder="Address"
            style={{
              padding: "18px 20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid #ffffff",
              borderRadius: "6px",
              color: "white",
              fontSize: "16px",
              outline: "none",
              fontFamily: "sans-serif",
              fontWeight: "bolder",
            }}
          />

          {/* The Get Started Button */}
          <button
            style={{
              padding: "18px 20px",
              backgroundColor: "#ffffff",
              color: "#111111",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              fontFamily: "sans-serif",
            }}
          >
            Get Started
          </button>
        </div>
      </section>
      <Floating />
      <section
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.9)0%, rgba(0, 0, 0, 0.89)70%), url(${bg2})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "120vh",
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
            Stream, work from home, game & more
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
              height: "320px",
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
              <h2>Residential - 100 Mbps</h2>
              <p>
                Reliable, affordable home internet service for seamless
                connectivity.
              </p>
              <div>
                <ul>
                  <li>Unlimited data</li>
                  <li>Good wifi</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "5px", paddingTop: "25px" }}>
                Starting at
              </h3>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: 0,
                  paddingTop: "5px",
                }}
              >
                $55
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              width: "350px",
              height: "320px",
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
              <h2>Residential - 200 Mbps</h2>
              <p>Fast, reliable internet service for everyday home use. </p>
              <div>
                <ul>
                  <li>Unlimited data</li>
                  <li>Great wifi</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "5px", paddingTop: "45px" }}>
                Starting at
              </h3>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: 0,
                  paddingTop: "15px",
                }}
              >
                $85
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              width: "350px",
              height: "320px",
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
              <h2>Residential - Max</h2>
              <p>
                Our best performing home internet service with maximum speeds
                available.
              </p>
              <div>
                <ul>
                  <li>Up to 400+ Mbps</li>
                  <li>Unlimited data</li>
                  <li>Best wifi</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: "5px" }}>Starting at</h3>
              <p
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: 0,
                  paddingTop: "15px",
                }}
              >
                $130
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
            marginTop: "10px",
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

      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.36)), url(${light})`,
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
            marginRight: "5%",
            marginTop: "150px",
          }}
        >
          <h1 style={{ lineHeight: "1.2", color: "white", fontWeight: "bold" }}>
            High-speed internet, <br /> no matter how remote
          </h1>
          <p
            style={{
              marginBottom: "20px",
              fontWeight: "normal",
              color: "#e4e4e4",
            }}
          >
            Through the world's most advanced satellite constellation, Starlink
            delivers reliable broadband connectivity across 160+ countries,
            territories, and other markets around the world, including to
            locations where high-speed internet has traditionally been too
            expensive, unreliable, or entirely unavailable.{" "}
          </p>
          <div style={{ display: "flex", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              Check availability
            </Buttonx>
          </div>
        </div>
      </section>
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
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5)0%, rgba(0, 0, 0, 0.2)70%), url(${shed})`,
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
            color: "white",
          }}
        >
          <h1 style={{ margin: "0 0 10px 0", lineHeight: "1.2" }}>
            High-speed performance without compromise
          </h1>
          <h3
            style={{
              marginBottom: "10px",
              fontWeight: "normal",
              lineHeight: "1.5",
            }}
          >
            Starlink delivers speeds up to 400+ Mbps in most places globally.
            Enjoy seamless 4K streaming on multiple devices at once, working
            from home, online gaming, social media browsing, and more.
          </h3>
          <div style={{ display: "flex", marginTop: "50px", color: "black" }}>
            <Buttonx style={{ color: "black", width: "200px" }}>
              view speeds
            </Buttonx>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.9)0%, rgba(0, 0, 0, 0.89)70%), url(${bg2})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "120vh",
          backgroundAttachment: "fixed",
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
            What our customers say{" "}
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
              height: "320px",

              display: "flex",
              flexDirection: "column",
              color: "#fafafa",

              fontFamily: "sans-serif",
              paddingLeft: "30px",
              borderRadius: "8px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ paddingTop: "10px" }}>
              <h2>Connected during storms</h2>
              <p style={{ fontStyle: "italic", paddingTop: "5px" }}>
                Where we live in Porto Alegre, storms often overload mobile
                networks. During the last one, nobody could connect. With
                Starlink, we still had internet and could follow updates and
                talk to family."
              </p>
              <p style={{ paddingTop: "5px" }}>
                — Lucas R., Rio Grande do Sul, Brazil
              </p>
            </div>
          </div>
          <div
            style={{
              width: "350px",
              height: "320px",

              display: "flex",
              flexDirection: "column",
              color: "#fafafa",

              fontFamily: "sans-serif",
              paddingLeft: "30px",
              borderRadius: "8px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ paddingTop: "10px" }}>
              <h2>Connected during storms</h2>
              <p style={{ fontStyle: "italic", paddingTop: "5px" }}>
                "Where we live in Porto Alegre, storms often overload mobile
                networks. During the last one, nobody could connect. With
                Starlink, we still had internet and could follow updates and
                talk to family."
              </p>
              <p style={{ paddingTop: "5px" }}>
                — Lucas R., Rio Grande do Sul, Brazil
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              width: "350px",
              height: "320px",

              display: "flex",
              flexDirection: "column",
              color: "#fafafa",

              fontFamily: "sans-serif",
              paddingLeft: "30px",
              borderRadius: "8px",
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ paddingTop: "10px" }}>
              <h2>Independence from local providers</h2>
              <p style={{ fontStyle: "italic", paddingTop: "5px" }}>
                "After a rather long and frightening typhoon, we lost internet
                with our last internet provider. Their customer service was very
                bureaucratic and resulted in nothing. We had no connectivity for
                a month. Then my friend told me about Starlink, so I ordered it
                for my home. I love the independence from local providers and
                the ease of Starlink!"
              </p>
              <p style={{ paddingTop: "5px" }}>— Robert R., Okinawa, Japan</p>
            </div>
          </div>
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
          <div
            style={{
              width: "550px",

              color: "white",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${out})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "500px",
                height: "250px",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "500px",

              color: "white",

              alignItems: "flex-start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1>30-day trial</h1>
            <p>
              Try Starlink for 30 days and if not satisfied, get a full refund
            </p>
            <Buttonx
              style={{ color: "black", paddingTop: "10px", marginTop: "20px" }}
            >
              Get started
            </Buttonx>
          </div>
          <div>
            <div style={{ paddingTop: "15vh", width: "100%" }}>
              <h2
                style={{
                  fontSize: "46px",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Receive Starlink email updates
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                width: "100%",
                maxWidth: "700px",
                marginLeft: "3vw",
              }}
            >
              {/* The Input Field */}
              <input
                type="text"
                placeholder="E-mail"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid #ffffff",
                  borderRadius: "6px",
                  color: "white",
                  fontSize: "16px",
                  outline: "none",
                  fontFamily: "sans-serif",
                  width: "600px",
                }}
              />

              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ffffff",
                  color: "#111111",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  width: "150px",
                }}
              >
                Sign up
              </button>
            </div>
            <p style={{ color: "white" }}>
              By clicking Sign Up, you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Residential;
