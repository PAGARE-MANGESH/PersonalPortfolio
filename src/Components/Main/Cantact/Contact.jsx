

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


// const ContactForm = () => {
//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');

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
//                     alert('Message sent successfully, Thank You ❤ !');

//                     setName('');
//                     setPhone('');
//                     setEmail('');
//                     setAddress('');

//                     e.target.message.value = '';

//                 } else {

//                     alert('Failed to send message');

//                 }
//             })
//             .catch((error) => console.error('Form submission error:', error));
//     };

//     return (

//         <fieldset className="p-4 mt-6 border border-blue-500 rounded-lg">
//             <legend className="px-4 mb-6 text-lg font-semibold text-blue-500">
//                 Contact Me 👩‍💻
//             </legend>
//             <form
//                 onSubmit={handleSubmit}
//                 className="grid grid-cols-1 gap-6 md:grid-cols-2"
//                 action="https://formspree.io/f/xovabjrp"
//                 method="POST"
//             >


//                 <div className="relative flex-1 " data-aos="fade-up" >
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         required
//                         placeholder=" "
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         data-aos="fade-left"
//                         className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
//                     />
//                     <label
//                         htmlFor="username"
//                         className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"
//                     >
//                         Name 😇
//                     </label>
//                 </div>


//                 <div className="relative flex-1" data-aos="fade-up">

//                     <input
//                         type="tel"
//                         id="phone"
//                         required
//                         name="phone"
//                         placeholder=" "
//                         maxLength={12}
//                         value={phone}
//                         onChange={(e) => {
//                             const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
//                             setPhone(onlyNums);
//                         }}

//                         className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
//                     />

//                     <label
//                         htmlFor="phone"
//                         className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"
//                     >
//                         Phone Number 📞
//                     </label>
//                 </div>


//                 <div className="relative flex-1 mt-4" data-aos="fade-up">
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         placeholder=" "
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
//                     />
//                     <label
//                         htmlFor="email"
//                         className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"

//                     >
//                         Email 📧
//                     </label>
//                 </div>


//                 <div className="relative flex-1 mt-4" data-aos="fade-up">
//                     <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         required
//                         placeholder=" "
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
//                     />
//                     <label
//                         htmlFor="address"
//                         className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75"
//                     >
//                         Address 🏠
//                     </label>
//                 </div>

//                 <div className="relative col-span-1 mt-4 md:col-span-2" data-aos="fade-up">
//                     <textarea
//                         required
//                         className="w-full p-3 mt-10 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
//                         rows="4"
//                         id="message"
//                         maxLength={400}
//                         name="message"
//                         placeholder=" "
//                         data-aos="fade-up"
//                     />
//                     <label
//                         htmlFor="message"
//                         className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 pointer-events-none left-3 top-3 -translate-y-0 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"

//                     >
//                         Message 📃
//                     </label>
//                 </div>

//                 <div className="flex justify-center col-span-1 md:col-span-2">
//                     <motion.button
//                         type="submit"
//                         className="px-6 py-3 mt-6 text-blue-500 transition border border-blue-500 rounded-lg hover:text-white hover:bg-blue-500"
//                         transition={{ duration: 0.3 }}
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
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

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
                    alert('Message sent successfully, Thank You ❤ !');

                    setName('');
                    setPhone('');
                    setEmail('');
                    setAddress('');

                    e.target.message.value = '';
                } else {
                    alert('Failed to send message');
                }
            })
            .catch((error) => console.error('Form submission error:', error));
    };

    return (
        <fieldset className="p-6 mt-8 transition-all duration-300 ease-in-out transform border-2 border-blue-500 rounded-lg hover:border-blue-700">
            <legend className="px-6 mb-6 text-lg font-semibold text-blue-500">
                Contact Me 👩‍💻
            </legend>
            <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
                action="https://formspree.io/f/xovabjrp"
                method="POST"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div className="relative flex-1" whileHover={{ scale: 1.03 }}>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder=" "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 text-blue-500 bg-transparent border-b border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                        htmlFor="username"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                        Name 😇
                    </label>
                </motion.div>

                <motion.div className="relative flex-1" whileHover={{ scale: 1.03 }}>
                    <input
                        type="tel"
                        id="phone"
                        required
                        name="phone"
                        placeholder=" "
                        maxLength={12}
                        value={phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                            setPhone(onlyNums);
                        }}
                        className="w-full p-4 text-blue-500 bg-transparent border-b border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                        Phone Number 📞
                    </label>
                </motion.div>

                <motion.div className="relative flex-1 mt-4" whileHover={{ scale: 1.03 }}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 text-blue-500 bg-transparent border-b border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                        htmlFor="email"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                        Email 📧
                    </label>
                </motion.div>

                <motion.div className="relative flex-1 mt-4" whileHover={{ scale: 1.03 }}>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder=" "
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-4 text-blue-500 bg-transparent border-b border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <label
                        htmlFor="address"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                        Address 🏠
                    </label>
                </motion.div>

                <motion.div className="relative col-span-1 mt-6 md:col-span-2" whileHover={{ scale: 1.03 }}>
                    <textarea
                        required
                        className="w-full p-4 text-blue-500 bg-transparent border-b border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows="4"
                        id="message"
                        maxLength={400}
                        name="message"
                        placeholder=" "
                    />
                    <label
                        htmlFor="message"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-4 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
                    >
                        Message 📃
                    </label>
                </motion.div>

                <div className="flex justify-center col-span-1 mt-6 md:col-span-2">
                    <motion.button
                        type="submit"
                        className="px-6 py-3 text-blue-500 border border-blue-500 rounded-lg hover:text-white hover:bg-blue-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </motion.form>
        </fieldset>
    );
};



const GoogleMap = () => (

    // <div className="flex w-full p-2 mt-6 border border-blue-500 rounded-lg">

    //     <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50482.83394857099!2d75.31261088478634!3d19.87550342981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725380343536!5m2!1sen!2sin"
    //         width="100%"
    //         height="450"
    //         className="transition-opacity duration-300 rounded-lg opacity-60 hover:opacity-80"
    //         allowFullScreen=""
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //     />
    // </div>




    <div className="w-full gap-6 p-2 mt-6 border border-blue-500 rounded-lg ">





        <div className="flex">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50482.83394857099!2d75.31261088478634!3d19.87550342981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725380343536!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="transition-opacity duration-300 rounded-lg opacity-60 hover:opacity-80"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>


    </div>

);

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center m-10">
            <button
                onClick={scrollToTop}
                className="flex items-center justify-center p-2 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
            >
                <FaArrowUp className="text-xl animate-bounce" />
            </button>
        </div>
    );
};

const ContactPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        AOS.init({ duration: 1000 });

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4 mt-20">

            <motion.div
                className="grid w-full max-w-6xl grid-cols-1 gap-6 rounded-lg shadow-lg md:p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* 
                {loading ? <Skeleton className="w-40 h-96" /> : <GoogleMap />}

                <div className="flex flex-col items-center justify-center p-4 mt-4 border-blue-500 rounded-lg md:text-2xl border-x">
                    <h2 className="mb-4 font-semibold text-blue-500 md:text-4xl">Contact Information ☎</h2>
                    <p className="mb-2 text-blue-500">
                        <span className="font-semibold text-gray-500">Name: </span> Mangesh Pagare
                    </p>
                    <p className="mb-2 text-blue-500">
                        <span className="font-semibold text-gray-500">Phone: </span>8668325464
                    </p>
                    <p className="mb-2 text-gray-500">
                        <span className="font-semibold ">Email: </span>
                        <a href="mailto:mangeshpagare011@gmail.com" className="text-blue-500 hover:underline">
                            mangeshpagare011@gmail.com
                        </a>
                    </p>

                </div> */}


                <div className="flex flex-col items-center justify-center gap-6 p-4 mt-6 rounded-lg md:flex-row md:text-2xl ">
                    <div className="flex flex-col items-center justify-center p-4 border-blue-500 rounded-lg border-x">
                        <h2 className="mb-4 font-semibold text-blue-500 md:text-4xl">Contact Information ☎</h2>
                        <p className="mb-2 text-blue-500">
                            <span className="font-semibold text-gray-500">Name: </span> Mangesh Pagare
                        </p>
                        <p className="mb-2 text-blue-500">
                            <span className="font-semibold text-gray-500">Phone: </span>8668325464
                        </p>
                        <p className="mb-2 text-gray-500">
                            <span className="font-semibold ">Email: </span>
                            <a href="mailto:mangeshpagare011@gmail.com" className="text-blue-500 hover:underline">
                                mangeshpagare011@gmail.com
                            </a>
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        {loading ? <Skeleton className="w-40 h-96" /> : <GoogleMap />}
                    </div>
                </div>



                {/* <GoogleMap /> */}

                <ContactForm />

            </motion.div>
            <ScrollToTopButton />
        </div>
    );
};

export default ContactPage;
