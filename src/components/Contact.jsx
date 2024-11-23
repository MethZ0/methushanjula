import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../constants";
import logo from "../assets/MethushAnjulaLogo.jpeg";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="border-t border-stone-900 pb-20"
        key="contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-12 ml-96 md:flex-row items-center md:items-start justify-between gap-8">
            {/* Logo Section */}
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="relative w-48 h-48 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={logo}
                  alt="Methush Anjula Logo"
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Contact Information Section */}
            <div className="w-full md:w-2/3">
              <motion.h2
                className="mb-10 text-4xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get in Touch
              </motion.h2>
              
              <motion.div
                className="tracking-tighter"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.p 
                  className="my-4" 
                  variants={{ 
                    hidden: { y: 20, opacity: 0 }, 
                    visible: { y: 0, opacity: 1 } 
                  }}
                >
                  {CONTACT.address}
                </motion.p>
                <motion.p 
                  className="my-4" 
                  variants={{ 
                    hidden: { y: 20, opacity: 0 }, 
                    visible: { y: 0, opacity: 1 } 
                  }}
                >
                  {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                  href="#"
                  className="border-b inline-block"
                  variants={{ 
                    hidden: { y: 20, opacity: 0 }, 
                    visible: { y: 0, opacity: 1 } 
                  }}
                >
                  {CONTACT.email}
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;