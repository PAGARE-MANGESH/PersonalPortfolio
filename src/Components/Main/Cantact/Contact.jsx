


import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Editor } from '@tinymce/tinymce-react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import ContactSvg from '../../../assets/Contact.svg';

const ContactInfoItem = ({ icon: Icon, text }) => (
    <motion.div
        className="flex items-center mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        <Icon className="text-blue-500 mr-3 text-xl" />
        <span className="text-lg">{text}</span>
    </motion.div>
);


const ContactForm = () => {
    const [email, setEmail] = useState('');
    const editorRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('')
        // Get the content of the editor in plain text format
        const messageContent = editorRef.current.getContent({ format: 'text' });

        // Create a FormData object to send form values
        const form = e.target;
        const formData = new FormData(form);
        formData.append('message', messageContent); // Append plain text editor content

        // Submit the form using Fetch API to Formspree
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
                    form.reset(); // Reset form after successful submission
                } else {
                    alert('Failed to send message');
                }
            })
            .catch((error) => console.error('Form submission error:', error));
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="flex flex-col text-gray-500"
            action="https://formspree.io/f/xovabjrp"
            method="POST"
        >
            <input
                type="text"
                name="username"
                placeholder="Name"
                className="border border-gray-300 p-3 rounded-lg mb-4 focus:border-blue-500 focus:outline-none transition duration-300"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg mb-4 focus:border-blue-500 focus:outline-none transition duration-300"
            />

            {/* TinyMCE Editor */}

            <Editor
                apiKey="5ippufnhv2b4p2cvzg3lgza97ls2tyt6g4zppazf3s1wxmro"
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue="<B>Enter your message here...</B>"
                init={{
                    height: 400,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | ' +
                        'alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist outdent indent | removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
            />

            {/* Submit Button */}
            <motion.button
                type="submit"
                className="text-blue-500 mt-10 border border-blue-500 py-3 rounded-lg hover:text-white hover:bg-blue-500 transition duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                Send Message
            </motion.button>
        </form>

    );
};


const ContactPage = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className="h-full w-full mt-20 flex flex-col items-center justify-center px-2">
                <div className="h-40 w-40">
                    <img src={ContactSvg} alt="contactSvg" />
                </div>

                <motion.div
                    className="border shadow-lg rounded-lg p-8 w-full max-w-6xl grid gap-6 grid-cols-1 lg:grid-cols-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col">
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50482.83394857099!2d75.31261088478634!3d19.87550342981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725380343536!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                className="border-0 rounded-lg mb-20 opacity-60 transition-opacity duration-300 hover:opacity-80"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <h1 className="text-3xl font-semibold mb-6 text-center lg:text-left text-blue-500">
                            Contact Me
                        </h1>
                        <ContactInfoItem icon={FaPhoneAlt} text="+91 8668325464" />
                        <ContactInfoItem icon={FaEnvelope} text="mangeshpagare011@gmail.com" />
                        <ContactInfoItem icon={FaMapMarkerAlt} text="Chhatrapati Sambhajinagar, 431109" />
                    </div>
                    <ContactForm />
                </motion.div>

                <div className="flex justify-center m-20">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300 transform hover:scale-110 hover:rotate-12"
                    >
                        <FaArrowUp className="text-xl animate-bounce" />
                    </button>
                </div>
            </div>
        </>
    );
};


export default ContactPage;
