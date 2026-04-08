"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaUserGraduate, FaBookOpen, FaDonate, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { Menu, X } from "lucide-react"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
}

export default function AboutPage() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <main className="bg-gray-50 text-gray-900">

            {/* NAVBAR - identique à Home */}
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="font-bold text-lg text-green-600">RefuLearn</a>

                    {/* DESKTOP */}
                    <div className="hidden md:flex gap-6 items-center">
                        <a href="/about" className="flex items-center gap-1 hover:text-green-600 transition">
                            <FaUserGraduate /> About
                        </a>
                        <a href="/impact" className="flex items-center gap-1 hover:text-green-600 transition">
                            <FaBookOpen /> Impact
                        </a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-xl shadow"
                        >
                            <FaDonate /> Support a Student
                        </motion.button>
                    </div>

                    {/* MOBILE */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-4">
                        <a href="/about" className="flex items-center gap-2">
                            <FaUserGraduate /> About
                        </a>
                        <a href="/impact" className="flex items-center gap-2">
                            <FaBookOpen /> Impact
                        </a>
                        <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl">
                            <FaDonate /> Support a Student
                        </button>
                    </div>
                )}
            </nav>

            {/* HERO */}
            <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-start">
                <motion.div variants={fadeInUp} initial="hidden" animate="visible">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        About RefuLearn
                    </h1>

                    <p className="mt-4 text-lg text-gray-600">
                        RefuLearn is a digital platform dedicated to expanding access to education for refugee and underserved students around the world.
                        We believe that education is one of the most powerful tools to break cycles of poverty, restore dignity, and create long-term opportunities.
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        Our mission is to connect students in need with individuals, organizations, and communities willing to support their educational journey.
                        Whether through mentorship, resources, or future partnerships, we aim to build a transparent and ethical ecosystem where support is meaningful and impactful.
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        RefuLearn is built on the principles of transparency, inclusivity, and responsibility.
                        We are committed to ensuring that every initiative shared on the platform is clear, verifiable, and aligned with real needs.
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        This platform is continuously evolving, with the vision of becoming a trusted bridge between opportunity and potential—because every student deserves a chance to learn, grow, and succeed.
                    </p>
                </motion.div>

                <motion.img
                    src="/about-hero.png"
                    alt="Education Illustration"
                    className="rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
                />
            </section>

            {/* BACKGROUND IMMERSIVE FULL-WIDTH */}
            <motion.section
                className="relative w-full py-14 sm:py-16 md:py-20 text-white"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Full-width background image */}
                <img
                    src="/students-bg.png"
                    alt="Students background"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                {/* Dark overlay for contrast — stronger on small screens */}
                <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Our Mission",
                                text: "Provide access to education and resources for RefuLearn students, enabling them to achieve their full potential.",
                                alt: "Mission background"
                            },
                            {
                                title: "Our Vision",
                                text: "To create a world where every RefuLearn child has the opportunity to learn, grow, and contribute positively to their community.",
                                alt: "Vision background"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="relative overflow-hidden rounded-2xl shadow-lg flex items-stretch"
                            >
                                {/* Background image (covers entire card) */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
                                    aria-hidden
                                />

                                {/* Overlay for legibility (lighter on larger screens) */}
                                <div className="absolute inset-0 bg-white/90 sm:bg-white/80 backdrop-blur-xl"></div>

                                {/* Content */}
                                <div className="relative bg-white/70 backdrop-blur-xl p-8 h-full flex flex-col justify-center">
                                    <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-green-600 mb-3">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-700">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* TEAM */}
            <motion.section
                className="max-w-6xl mx-auto px-6 py-20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Rashid Ahmed", role: "Founder", img: "/team/1.png", socials: ["facebook", "twitter", "linkedin"] },
                        { name: "Amina Rahman", role: "Program Manager", img: "/team/2.png", socials: ["facebook", "twitter", "linkedin"] },
                        { name: "Fatima Noor", role: "Community Outreach", img: "/team/3.png", socials: ["facebook", "twitter", "linkedin"] },
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.03, y: -5 }}
                            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow overflow-hidden text-center"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{member.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{member.role}</p>

                                {/* Réseaux sociaux */}
                                <div className="flex justify-center gap-4 mt-3">
                                    {member.socials.map((social, idx) => (
                                        <a key={idx} href="#" className="text-gray-600 hover:text-green-600 transition">
                                            {social === "facebook" && <FaFacebookF />}
                                            {social === "twitter" && <FaTwitter />}
                                            {social === "linkedin" && <FaLinkedinIn />}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* FINAL CTA */}
            <motion.section
                className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-40 px-6 rounded-3xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-bold">Be the change in a student's life</h2>
                    <p className="text-green-100 text-lg">
                        Your support helps RefuLearn students achieve their dreams and build a brighter future.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#16a34a' }}
                        className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors"
                    >
                        Support a Student
                    </motion.button>
                </div>
            </motion.section>

            {/* FOOTER - identique à Home */}
            <footer className="bg-white text-center py-8 text-gray-500 text-sm">
                © 2026 RefuLearn Education Support — All rights reserved
            </footer>

        </main>
    )
}