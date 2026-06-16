import Navbar from "./Navbar"
import home from "./img/home.jpeg"
import Buttonx from "./Buttonx"
import bg1 from "./img/bg1.png"
import Floating from "./Floating"
import rain from "./img/rain.jpeg"
import car from "./img/car.jpeg"
import green from "./img/green.jpeg"
import yard from "./img/yard.jpeg"
import Footer from "./Footer"

function App() {
  return (
    <div style={{}}>
      
       <Navbar />
      <section style= {{display:'flex', flexWrap:'wrap',
                            backgroundImage:`url(${home})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            width:'100%',
                            minHeight:'140vh',
                            margin:0,
                            padding:0}}>
     
       <div style={{ 
          maxWidth: '550px', 
          maxHeight: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          textAlign: 'left',
          marginLeft: '40px',
          marginTop:'250px'// Kept side margin, removed top/bottom 200px
}}>
    <h1 style={{ margin: '0 0 10px 0', lineHeight: '1.2' }}>
        Fast, affordable <br/> internet
    </h1>
    <h3 style={{ marginBottom: '10px ', fontWeight: 'normal' }}>
        starting at
    </h3>
    <h1 style={{ margin: '0' }}>
        GHS 500
    </h1>
    <div style={{display:'flex', flexDirection:'row',gap:'20px',marginTop:"50px",  color:'black'}}>
      <Buttonx style={{ color:'black'}}>Get started</Buttonx>
      <Buttonx style={{ color:'white',backgroundColor:'black'}}>View pricing</Buttonx>
      
      
    </div>
</div>


     </section>
     <section id="hero" style= {{display:'flex', flexWrap:'wrap',
     backgroundColor:'black',
                            backgroundImage:`url(${bg1})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            
                            width:'100%',
                            minHeight:'80vh',
                            margin:0,
                            padding:0,
                            display: 'flex', 
                              justifyContent: 'center',    /* Centers horizontally */
                            alignItems: 'flex-start',    /* Aligns content to the top */
                              boxSizing: 'border-box',
                              }}>
                                <Floating/>
                    
                  <div style={{paddingTop: '10vh',   }}>
                    <h2 style={{fontSize: '32px',          // Makes text larger (use quotes and camelCase)
                                fontWeight: 'bold',        // Optional: weights must be strings like 'bold' or '600'
                                textAlign: 'center',       // Forces multiple lines of text to center perfectly
                                whiteSpace: 'nowrap'}}>
                      Stream, work from home, game & more
                    </h2>
                    </div>
                    <div style={{display:'flex', flexDirection:'row',gap:'20px',
                       color:'black', flexWrap:'flex-start'}}>
                        <div style={{width:'500px',height:'250px',backgroundColor:'#121111', alignItems:'left',
                           justifyContent:'left', display:'flex', flexDirection:'column', color:'white',
                            textAlign:'left', fontFamily:'sans',
                            paddingLeft:'30px'}}>
                             <div style={{paddingTop:'10px',paddingBottom:'0'}}><h2>Residential Lite</h2>
                             <p style={{paddingBottom:'0'}}>Up to 200 Mbps. Fast, 
                                reliable internet for everyday home use. Note: 90th percentile download speeds</p></div> 
                              <div style={{paddingTop:'15px', marginBottom:0}}>
                                < h3 style={{paddingTop:'15px', marginBottom:'10px'}}>Starting at</h3>
                              <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>GHS 500</p>
                              </div>
                              
                        </div>
                        <div style={{width:'500px',height:'250px',backgroundColor:'#121111', alignItems:'left',
                           justifyContent:'left', display:'flex', flexDirection:'column', color:'white',
                            textAlign:'left', fontFamily:'sans',
                            paddingLeft:'30px'}}>
                             <div style={{paddingTop:'10px',paddingBottom:'0'}}><h2>Residential</h2>
                             <p style={{paddingBottom:'0'}}>Residential service for residential customers at one location.</p></div> 
                              <div style={{paddingTop:'30px', marginBottom:0}}>
                                < h3 style={{paddingTop:'15px', marginBottom:'10px'}}>Starting at</h3>
                              <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>GHS 700</p>
                              </div>
                              
                        </div>
                        
                       
                    </div>
                   <div style={{ display: 'flex', 
                              justifyContent: 'center',    /* Centers horizontally */
                            alignItems: 'flex-start',
                         flexDirection:'column', color:'white',
                            textAlign:'left', fontFamily:'sans',
                            marginBottom:'50px'}}>
                    <p style={{fontSize: '12px',          // Makes text larger (use quotes and camelCase)
                                fontWeight: 'bold',        // Optional: weights must be strings like 'bold' or '600'
                                textAlign: 'center',       // Forces multiple lines of text to center perfectly
                                whiteSpace: 'nowrap'}}>
                      Speeds referenced are maximum available speeds, are not guaranteed, and will be slower during times of congestion.


                    </p>
                    </div> 
      
     </section>
       <section style= {{display:'flex', flexWrap:'wrap',
                            backgroundImage:`url(${rain})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            width:'100%',
                            minHeight:'140vh',
                            margin:0,
                            padding:0}}>
     
       <div style={{ 
    maxWidth: '550px', 
    maxHeight: '550px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    textAlign: 'left',
    marginLeft: '40px',
    marginTop:'250px' // Kept side margin, removed top/bottom 200px
}}>
    <h1 style={{ margin: '0 0 10px 0', lineHeight: '1.2' }}>
       Reliable & resilient
    </h1>
    <h3 style={{ marginBottom: '10px ', fontWeight: 'normal' }}>
        Extreme weather conditions can cause significant disruptions to
         traditional internet networks. Starlink is engineered to melt 
         snow and withstand sleet, heavy rain, and harsh winds—keeping 
         you connected with reliable, high-speed service when you need it most.

    </h3>
   
    <div style={{display:'flex', flexDirection:'row',gap:'20px',marginTop:"50px",  color:'black'}}>
      <Buttonx style={{ color:'black',width:'200px'}}>Learn More</Buttonx>
      
      
      
    </div>
</div>


     </section>

       <section style= {{display:'flex', flexWrap:'wrap',
                            backgroundImage:`url(${car})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            width:'100%',
                            minHeight:'140vh',
                            margin:0,
                            padding:0}}>
     
       <div style={{ 
          maxWidth: '550px', 
          maxHeight: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          textAlign: 'left',
          marginLeft: '40px',
          marginTop:'250px' // Kept side margin, removed top/bottom 200px
                   }}>
          <h1 style={{ margin: '0 0 10px 0', lineHeight: '1.2' }}>
           Internet for travel, <br/> road trips, <br/>and commutes
          </h1>
          <h3 style={{ marginBottom: '10px ', fontWeight: 'normal' }}>
              High-speed internet that moves with you, even in dead zones. In-motion use available in select areas

          </h3>
        
          <div style={{display:'flex', flexDirection:'row',gap:'20px',marginTop:"50px",  color:'black'}}>
            <Buttonx style={{ color:'black',width:'200px'}}>Learn More</Buttonx>
            
            
            
          </div>
      </div>


     </section>
       <section style= {{display:'flex', flexWrap:'wrap',
                            backgroundImage:`url(${car})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            width:'100%',
                            minHeight:'140vh',
                            margin:0,
                            padding:0}}>
     
       <div style={{ 
          maxWidth: '60%', 
          maxHeight: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          textAlign: 'left',
          marginLeft: 'auto',
          marginTop:'250px' // Kept side margin, removed top/bottom 200px
                   }}>
          <h1 style={{ lineHeight: '1.2', marginRight:'250px'  }}>
           Available globally

          </h1>
          <p style={{ marginBottom: '10px ', fontWeight: 'normal', marginRight:'100px',color:'#e4e4e4' }}>
              Delivering reliable connectivity in 160+ countries, territories, and other <br/> markets around the world.
          </p>
        
          <div style={{display:'flex', flexDirection:'row',gap:'20px',marginTop:"30px",marginRight:'470px',  color:'black'}}>
            <Buttonx style={{ color:'black',width:'200px'}}>Check availabiity</Buttonx>
            
            
            
          </div>
      </div>


     </section>
     <section style= {{display:'flex', flexWrap:'wrap',
                            backgroundImage:`url(${yard})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            width:'100%',
                            minHeight:'140vh',
                            margin:0,
                            padding:0}}>
     
       <div style={{ 
          maxWidth: '550px', 
          maxHeight: '550px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', 
          textAlign: 'left',
          marginLeft: '40px',
          marginTop:'250px'// Kept side margin, removed top/bottom 200px
}}>
    <h1 style={{ margin: '0 0 10px 0', lineHeight: '1.2',color:'#2b2a2aec' }}>
           Plug it in. Point at sky.
          </h1>
          <h3 style={{ marginBottom: '10px ', fontWeight: 'normal' ,color:'#2b2a2aec'}}>
              High-speed internet that moves with you, even in dead zones. In-motion use available in select areas

          </h3>
        
          <div style={{display:'flex', flexDirection:'row',gap:'20px',marginTop:"50px",  color:'black'}}>
            <Buttonx style={{ color:'black',width:'200px'}}>Get The App</Buttonx>
      
    </div>
</div>


     </section>
      <Footer/>
    </div>


  )
}

export default App
