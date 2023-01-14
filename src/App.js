import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import data from "./components/data";
import Footer from "./components/Footer";
function App() {

  const dataElements = data.map(dataSet => {
    return <Content title={dataSet.title} location={dataSet.location} startdate={dataSet.startdate} enddate={dataSet.enddate} 
                    description={dataSet.description} img={dataSet.img}
    />
})
  return (
    <div>
      <Navbar />
     { dataElements}
      <Footer />
     
    </div>
  );
}

export default App;
