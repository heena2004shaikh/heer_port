import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header";
import Routing from "./utils/Routing";
import {AnimatePresence} from "motion/react";  
 

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
      <Header/>
      <AnimatePresence>
      <Routing />
      </AnimatePresence>
      </div>
      <Footer/>
    </div>
    
  );
};

export default App;
