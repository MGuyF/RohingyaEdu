"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// Catégories et images
const categories = [
    {
        title: "Education",
        description: "Access to learning opportunities for RefuLearn students.",
        images: ["/impact/impact-1.png", "/impact/impact-2.png", "/impact/impact-3.png"]
    },
    {
        title: "Learning Centers",
        description: "Safe spaces built for studying and growth.",
        images: ["/impact/impact-1.png", "/impact/impact-4.png", "/impact/impact-3.png"]
    },
    {
        title: "School Supplies",
        description: "Providing essential materials to students.",
        images: ["/impact/impact-1.png", "/impact/impact-2.png", "/impact/impact-4.png"]
    }
]

export default function ImpactPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <main className="relative min-h-screen text-gray-900 py-20 px-6 overflow-hidden">

            {/* BACKGROUND */}
            <img
                src="/donate-bg.png"
                alt="Impact background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/40"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.25),transparent_70%)]"></div>

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* NAV MINI */}
                <div className="-mt-12 flex justify-between items-center">
                    <a href="/" className="font-bold text-lg text-green-600">RefuLearn</a>
                    <a
                        href="/donate"
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition"
                    >
                        Support a Student
                    </a>
                </div>

                {/* TITLE */}
                <motion.div className="text-center mt-16" initial="hidden" animate="visible" variants={fadeInUp}>
                    <h1 className="text-4xl font-bold text-white">Our Impact</h1>
                    <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
                        Real results made possible by generous donors like you.
                    </p>
                </motion.div>

                {/* Categories Sections */}
                {categories.map((cat, i) => (
                    <motion.section key={i} className="mt-20" variants={fadeInUp} initial="hidden" animate="visible">
                        <h2 className="text-3xl font-bold text-white">{cat.title}</h2>
                        <p className="text-gray-300 mt-2 max-w-2xl">{cat.description}</p>

                        <div className="mt-6 grid md:grid-cols-3 gap-6">
                            {cat.images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative group cursor-pointer"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition"></div>
                                    <img
                                        src={img}
                                        alt=""
                                        className="relative rounded-xl h-48 w-full object-cover shadow-lg"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                ))}

                {/* Footer / Trust */}
                <motion.div
                    className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                >
                    <div className="flex items-center gap-2">🔒 Secure</div>
                    <div className="flex items-center gap-2">🌐 Transparent</div>
                    <div className="flex items-center gap-2">💚 150+ donors</div>
                </motion.div>

                {/* EXTRA TRUST SECTION */}
                <motion.div
                    className="mt-20 text-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-white">Transparency & Trust</h2>
                    <p className="text-gray-300 mt-4 max-w-xl mx-auto">
                        We ensure that every donation is used effectively to maximize educational impact.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/donate"
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
                        >
                            Support the Mission
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* Modal Image */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="Selected"
                            className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur l'image
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}