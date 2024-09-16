



import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';



// const ContactInfoItem = ({ icon: Icon, text }) => (
//     <motion.div

//         className="flex items-center mb-4 border-b border-blue-500 pb-2 "
//         transition={{ duration: 0.3 }}
//     >
//         <Icon

//             className="cursor-pointer text-blue-100 transition duration-300 delay-200 hover:text-blue-500 mr-3 text-xl"
//         />
//         <span
//             data-aos="fade-left" style={{ overflow: 'hidden' }}
//             className="cursor-pointer text-blue-100 transition duration-300 delay-200 text-lg  hover:text-blue-500">
//             {text}
//         </span>
//     </motion.div>
// );


// const ContactForm = () => {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');

//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const formData = new FormData(form);

//         fetch(form.action, {
//             method: form.method,
//             body: formData,
//             headers: {
//                 Accept: 'application/json',
//             },
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     alert('Message sent successfully!');
//                     // Clear the form fields
//                     setEmail('');
//                     setName('');
//                     e.target.message.value = ''; // Clear message textarea
//                 } else {
//                     alert('Failed to send message');
//                 }
//             })
//             .catch((error) => console.error('Form submission error:', error));
//     };

//     return (
//         <fieldset className="border border-blue-500 mt-4 p-6 rounded-lg">
//             <legend className="text-blue-500 text-lg font-semibold px-2">
//                 Contact Me 👩‍💻
//             </legend>
//             <form
//                 onSubmit={handleSubmit}
//                 className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-500 p-4"
//                 action="https://formspree.io/f/xovabjrp"
//                 method="POST"
//             >
//                 <div className="flex justify-center items-center">
//                     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
//                         {/* Name Input */}
//                         <div className="relative flex-1" data-aos="fade-up" style={{ overflow: 'hidden' }}>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 name="username"
//                                 required
//                                 placeholder=" "
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 data-aos="fade-left"
//                                 className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
//                             />
//                             <label
//                                 htmlFor="username"
//                                 data-aos="fade-down" style={{ overflow: 'hidden' }}
//                                 className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-6 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"
//                             >
//                                 Name 😇
//                             </label>
//                         </div>

//                         {/* Email Input */}
//                         <div className="relative flex-1" data-aos="fade-up" >
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 required
//                                 placeholder=" "
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 // data-aos="fade-right"
//                                 className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
//                             />
//                             <label
//                                 htmlFor="email"
//                                 data-aos="fade-down"
//                                 className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-6 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"
//                             >
//                                 Email 📧
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Message Editor */}

//                 <div className="col-span-1 md:col-span-2 relative" data-aos="fade-up">
//                     <textarea
//                         required
//                         className="w-full peer rounded-md border-x mt-10 border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
//                         rows="4"
//                         id="message"
//                         name="message"
//                         placeholder=" "
//                         data-aos="fade-up"
//                     />
//                     <label
//                         htmlFor="message"
//                         className="absolute left-3 top-3 text-blue-500 transition-all duration-300 transform -translate-y-0 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"
//                     >
//                         Message 📃
//                     </label>
//                 </div>


//                 {/* Submit Button */}

//                 <div className="col-span-1 md:col-span-2 flex justify-center">
//                     <motion.button
//                         type="submit"
//                         className="text-blue-500 transition duration-400 delay-400 mt-10 border border-blue-500 py-3 px-6 rounded-lg hover:text-white hover:bg-blue-500 transition duration-300"
//                         transition={{ duration: 0.30 }}
//                     >
//                         Send Message
//                     </motion.button>
//                 </div>


//             </form>
//         </fieldset>
//     );
// };


const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(''); // Added state for phone number

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    // Clear the form fields
                    setEmail('');
                    setName('');
                    setPhone(''); // Clear phone number field
                    e.target.message.value = ''; // Clear message textarea
                } else {
                    alert('Failed to send message');
                }
            })
            .catch((error) => console.error('Form submission error:', error));
    };

    return (
        <fieldset className="border border-blue-500 mt-4 p-6 rounded-lg">
            <legend className="text-blue-500 text-lg font-semibold px-2">
                Contact Me 👩‍💻
            </legend>
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-500 p-4"
                action="https://formspree.io/f/xovabjrp"
                method="POST"
            >
                <div className="flex justify-center items-center">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
                        {/* Name Input */}

                        {/* <div className="relative flex-1 " data-aos="fade-up" style={{ overflow: 'hidden' }}>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                data-aos="fade-left"
                                className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-6 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"

                            >
                                Name 😇
                            </label>
                        </div> */}

                        <div className="relative flex-1" data-aos="fade-up" style={{ overflow: 'hidden' }}>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                required
                                placeholder=" "
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
                            />
                            <label
                                htmlFor="username"
                                className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-4 scale-75 origin-left peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 pointer-events-none"
                            >
                                Name 😇
                            </label>
                        </div>



                        {/* Email Input */}
                        <div className="relative flex-1" data-aos="fade-up">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder=" "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-6 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"

                            >
                                Email 📧
                            </label>
                        </div>
                    </div>
                </div>

                {/* Phone Number Input */}
                <div className="relative flex-1" data-aos="fade-up">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder=" "
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full peer rounded-md border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute left-3 top-1 text-blue-500 transition-all duration-300 transform -translate-y-6 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"

                    >
                        Phone Number 📞
                    </label>
                </div>

                {/* Message Editor */}

                <div className="col-span-1 md:col-span-2 relative" data-aos="fade-up">
                    <textarea
                        required
                        className="w-full peer rounded-md border-x mt-10 border-b border-blue-500 p-3 bg-transparent focus:border-blue-500 focus:outline-none transition duration-300 text-blue-500"
                        rows="4"
                        id="message"
                        name="message"
                        placeholder=" "
                        data-aos="fade-up"
                    />
                    <label
                        htmlFor="message"
                        className="absolute left-3 top-3 text-blue-500 transition-all duration-300 transform -translate-y-0 scale-100 origin-left peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75 pointer-events-none"
                    >
                        Message 📃
                    </label>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex justify-center">
                    <motion.button
                        type="submit"
                        className="text-blue-500 transition duration-400 delay-400 mt-10 border border-blue-500 py-3 px-6 rounded-lg hover:text-white hover:bg-blue-500 transition duration-300"
                        transition={{ duration: 0.30 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </form>
        </fieldset>
    );
};


const GoogleMap = () => (
    <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50482.83394857099!2d75.31261088478634!3d19.87550342981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725380343536!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0 rounded-lg  opacity-60 transition-opacity duration-300 hover:opacity-80"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
);


const ScrollToTopButton = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duration is optional
    }, []);

    return (
        <div className="flex justify-center m-20">
            <button
                onClick={scrollToTop}

                className="flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 transform hover:scale-110 hover:rotate-12"
            >
                <FaArrowUp className="text-xl animate-bounce" />
            </button>
        </div>
    );
};

// Contact Page Component

const ContactPage = () => (

    <div className="h-full w-full mt-40 flex flex-col items-center justify-center px-2">

        {/* <div className="h-40 w-40 mb-4">
            <img src={ContactSvg} alt="contactSvg" />
        </div> */}

        <motion.div
            className=" shadow-lg rounded-lg p-2 w-full max-w-6xl grid gap-6 grid-cols-1 lg:grid-cols-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <GoogleMap />

            <ContactForm />

        </motion.div>

        <ScrollToTopButton />
    </div>
);

export default ContactPage;





