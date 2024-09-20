
import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactForm = () => {

    // hello  

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
                    setPhone('');
                    // Clear phone number field
                    e.target.message.value = ''; // Clear message textarea
                } else {
                    alert('Failed to send message');
                }
            })
            .catch((error) => console.error('Form submission error:', error));
    };

    return (

        <fieldset className="p-2 mt-4 border-b border-blue-500 rounded-lg rounded-b-xl border-x">
            <legend className="px-2 mb-10 text-lg font-semibold text-blue-500">
                Contact Me 👩‍💻
            </legend>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 p-4 text-gray-500 md:grid-cols-2"
                action="https://formspree.io/f/xovabjrp"
                method="POST"
            >


                {/* Name Input */}

                <div className="relative flex-1 " data-aos="fade-up" >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder=" "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-aos="fade-left"
                        className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
                    />
                    <label
                        htmlFor="username"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"
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
                        className="w-full p-3 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
                    />
                    <label
                        htmlFor="email"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"

                    >
                        Email 📧
                    </label>
                </div>



                {/* Phone Number Input */}

                <div className="relative flex-1" data-aos="fade-up">

                    <input
                        type="tel"
                        id="phone"
                        required
                        name="phone"
                        placeholder=" "
                        maxLength={12}
                        value={phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/[^0-9]/g, ''); // Allow only digits
                            setPhone(onlyNums);
                        }}

                        className="w-full p-3 mt-2 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
                    />

                    <label
                        htmlFor="phone"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 -translate-y-6 pointer-events-none left-3 top-1 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"
                    >
                        Phone Number 📞
                    </label>
                </div>

                {/* Message Editor */}

                <div className="relative col-span-1 mt-4 md:col-span-2" data-aos="fade-up">
                    <textarea
                        required
                        className="w-full p-3 mt-10 text-blue-500 transition duration-300 bg-transparent border-b border-blue-500 rounded-md peer border-x focus:border-blue-500 focus:outline-none"
                        rows="4"
                        id="message"
                        maxLength={400}
                        name="message"
                        placeholder=" "
                        data-aos="fade-up"
                    />
                    <label
                        htmlFor="message"
                        className="absolute text-blue-500 transition-all duration-300 origin-left transform scale-100 pointer-events-none left-3 top-3 -translate-y-0 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-75 peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:scale-75"

                    >
                        Message 📃
                    </label>
                </div>


                {/* Submit Button */}

                <div className="flex justify-center col-span-1 md:col-span-2">
                    <motion.button
                        type="submit"
                        className="px-6 py-3 mt-10 text-blue-500 transition duration-300 border border-blue-500 rounded-lg duration-400 delay-400 hover:text-white hover:bg-blue-500"
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
    <Suspense fallback={<div> 'Loading... '</div>}>
        <div className='w-full p-2 border-b border-blue-500 rounded-b-xl border-x'>
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

    </Suspense>
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

                className="flex items-center justify-center p-2 text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 hover:rotate-12"
            >
                <FaArrowUp className="text-xl animate-bounce" />
            </button>
        </div>
    );
};


const ContactPage = () => (

    <div className="flex flex-col items-center justify-center w-full h-full px-2 mt-40">

        {/* <div className="w-40 h-40 mb-4">
            <img src={ContactSvg} alt="contactSvg" />
        </div> */}

        <motion.div
            className="grid w-full max-w-6xl grid-cols-1 gap-6 p-2 rounded-lg shadow-lg lg:grid-cols-1"
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






