import bg2 from "./img/bg2.png";
import boat from "./roam/boat.jpeg"
import Buttonx from "./Buttonx";
import Floating from "./Floating";
import Slide from "./Slide";



const Roam=()=>{
return(
<>
<section style={{

        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0)), url(${boat})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        minHeight:'140vh',
        display:'flex',
       
        }} >
        <div style={{ 
          maxWidth: '550px', 
          maxHeight: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          textAlign: 'left',
          marginLeft: '40px',
          marginTop:'50vh',
          
         
        }}>
          <h1 style={{ margin: '0 0 10px 0', lineHeight: '1.2' }}>
           Roam with Starlink
          </h1>
          <h3 style={{ marginBottom: '10px', fontWeight: 'normal' }}>
            starting at
          </h3>
          <h1 style={{ margin: '0' }}>
            $55
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', marginTop: "50px", color: 'black' }}>
            <Buttonx style={{ color: 'black' }}>Get started</Buttonx>
           
          </div>
          </div>

</section>
<section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.51), rgb(0, 0, 0)),url(${bg2})`, 
        backgroundAttachment: 'fixed', 
         backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        minHeight: '300vh',
        backgroundColor:'#070709', 
        overflow:'hidden'
        }}
    >
      <Floating/>
    <div style={{
       width: '100%',
        minHeight: '80vh',
        margin: 0,
        padding: 0,
        justifyContent: 'center',    
        alignItems: 'flex-start',    
        boxSizing: 'border-box',
    }}>
 <div style={{ paddingTop: '15vh', width: '100%' }}>
          <h2 style={{
            fontSize: '46px',          
            fontWeight: 'bold',        
            textAlign: 'center',       
            color: 'white'
          }}>
           High-speed internet on the go
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', color: '#121212', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          {/* Card 1 */}
          <div style={{
            width: '350px', height: '250px', backgroundColor: '#121111', 
            display: 'flex', flexDirection: 'column', color: '#fafafa',
            textAlign: 'left', fontFamily: 'sans-serif', paddingLeft: '30px', borderRadius: '8px', fontSize:'12px'
          }}>
            <div style={{ paddingTop: '10px' }}>
              <h2>Roam - 100GB</h2>
              <p>Up to 300+ Mbps for approximately 1 week of typical use. Reliable connectivity for occasional trips, camping,
                 and getaways. Get unlimited low-speed data after using your Roam data.</p>
            </div> 
            <div style={{ paddingTop: '15px' }}>
              <h3 style={{ marginBottom: '5px' }}>Starting at</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>$55</p>
            </div>
          </div>
           {/* Card 2 */}
          <div style={{
            width: '350px', height: '250px', backgroundColor: '#121111', 
            display: 'flex', flexDirection: 'column', color: '#fafafa',
            textAlign: 'left', fontFamily: 'sans-serif', paddingLeft: '30px', borderRadius: '8px', fontSize:'12px'
          }}>
            <div style={{ paddingTop: '10px' }}>
              <h2>Roam - 300GB</h2>
              <p>Up to 300+ Mbps. Reliable connectivity for regular travelers with multiple trips a month. Get unlimited 
                low-speed data after using your Roam data.</p>
            </div> 
            <div style={{ paddingTop: '35px' }}>
              <h3 style={{ marginBottom: '5px' }}>Starting at</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>$80</p>
            </div>
          </div>
           {/* Card 3 */}
          <div style={{
            width: '350px', height: '250px', backgroundColor: '#121111', 
            display: 'flex', flexDirection: 'column', color: '#fafafa',
            textAlign: 'left', fontFamily: 'sans-serif', paddingLeft: '30px', borderRadius: '8px', fontSize:'12px'
          }}>
            <div style={{ paddingTop: '10px' }}>
              <h2>Roam - Unlimited</h2>
              <p>Up to 300+ Mbps. Our best performing internet on the go with unlimited high-speed data.</p>
            </div> 
            <div style={{ paddingTop: '35px' }}>
              <h3 style={{ marginBottom: '5px' }}>Starting at</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: 0 }}>GHS 500</p>
            </div>
          </div>
         

          
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', color: 'white', marginTop: '30px', marginBottom: '50px' }}>
          <p style={{ fontSize: '12px', fontWeight: 'bold', textAlign: 'center', padding: '0 20px' }}>
            Speeds referenced are maximum available speeds, are not guaranteed, and will be slower during times of congestion.


          </p>
        </div> 
    </div>
      
    <div style={{
       width: '100%',
        minHeight: '80vh',
        margin: 0,
        padding: 0,
        justifyContent: 'center',    
        alignItems: 'flex-start',    
        boxSizing: 'border-box',
    }}>
 <div style={{ paddingTop: '15vh', width: '100%' }}>
          <h2 style={{
            fontSize: '60px',          
            fontWeight: 'bold',        
            textAlign: 'center',       
            color: 'white'
          }}>
          Internet for travel, road trips, and <br/> commutes
          </h2>
        </div>
          <Slide/>
    </div>
     

    </section>

</>
)
}; export default Roam