import { motion } from  "framer-motion";
const Body = () => {    
    return (  
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x:0, }}
             animate={{ opacity: 1, scale: 1, x:0}}
            transition={{ duration: 1 }}
        >
            <h1 className="text-3xl">Hello word</h1>
        </motion.div>
            
    );
}
 
export default Body; 