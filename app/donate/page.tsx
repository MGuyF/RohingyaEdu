"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaDonate } from "react-icons/fa"
import { Heart, ShieldCheck, Globe } from "lucide-react"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function DonatePage() {
    const [amount, setAmount] = useState(25)
    const [customAmount, setCustomAmount] = useState("")
    const [frequency, setFrequency] = useState("one-time")

    const presetAmounts = [10, 25, 50, 100]

    const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        if (/^\d*$/.test(val)) setCustomAmount(val)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const finalAmount = customAmount ? parseInt(customAmount) : amount
        alert(`Thanks for donating $${finalAmount} (${frequency})!`)
        // Ici tu peux intégrer Stripe / PayPal
    }

    return (
        <main className="relative min-h-screen text-gray-900 py-20 px-6 overflow-hidden">

            {/* Background Image */}
            <img
                src="/donate-bg.png"
                alt="Students background"
                className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />

            {/* Vignette douce (sans coupure) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]"></div>

            {/* Gradient overlay subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-black/40"></div>

            {/* Light glow (effet premium) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.25),transparent_70%)]"></div>

            {/* CONTENU */}
            <div className="relative z-10">

                {/* Back to Home */}
                <div className="-mt-12 flex justify-start">
                    <a
                        href="/"
                        className="font-bold text-lg text-green-600"
                    >
                        RefuLearn
                    </a>
                </div>

                {/* Donate Card */}
                <div className="mt-16 max-w-4xl mx-auto relative">

                    {/* Glow autour de la card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 rounded-2xl blur-2xl opacity-20"></div>

                    {/* Glass Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8">

                        {/* Heading */}
                        <motion.h1
                            className="text-4xl font-bold text-green-600 mb-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                        >
                            Make an Impact Today
                        </motion.h1>

                        <motion.p
                            className="text-gray-700 text-center mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } }}
                        >
                            Your donation helps RefuLearn students access education and opportunities.
                        </motion.p>

                        {/* Amount Selector */}
                        <motion.div
                            className="mb-6 flex flex-wrap gap-4 justify-center"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            {presetAmounts.map((amt) => (
                                <motion.button
                                    key={amt}
                                    onClick={() => { setAmount(amt); setCustomAmount("") }}
                                    className={`px-6 py-3 rounded-xl font-semibold transition ${amount === amt && !customAmount
                                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                                        : "bg-white/60 backdrop-blur border border-gray-200 text-gray-700 hover:bg-green-100"
                                        }`}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                >
                                    ${amt}
                                </motion.button>
                            ))}

                            {/* Custom Amount */}
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                <input
                                    type="text"
                                    placeholder="Custom"
                                    value={customAmount}
                                    onChange={handleCustomAmount}
                                    className="w-32 pl-10 px-6 py-3 rounded-xl border bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg"
                                />
                            </div>
                        </motion.div>

                        {/* Frequency */}
                        <motion.div
                            className="mb-6 flex justify-center gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.2 } }}
                        >
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="one-time"
                                    checked={frequency === "one-time"}
                                    onChange={() => setFrequency("one-time")}
                                />
                                One-time
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="frequency"
                                    value="monthly"
                                    checked={frequency === "monthly"}
                                    onChange={() => setFrequency("monthly")}
                                />
                                Monthly
                            </label>
                        </motion.div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col md:flex-row gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="flex-1 px-6 py-3 rounded-xl border bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="flex-1 px-6 py-3 rounded-xl border bg-white/70 backdrop-blur focus:outline-none focus:ring-2 focus:ring-green-500 focus:shadow-lg"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition mt-4"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            >
                                Donate ${customAmount ? customAmount : amount}
                            </motion.button>
                        </form>

                        {/* Impact info */}
                        <motion.div
                            className="mt-10 grid md:grid-cols-3 gap-6 text-center text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.6 } }}
                        >
                            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow">
                                <p className="text-green-600 font-bold text-xl">$25</p>
                                <p>Provides school supplies for 1 student</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow">
                                <p className="text-green-600 font-bold text-xl">$50</p>
                                <p>Sponsors a month of tuition</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur p-6 rounded-2xl shadow">
                                <p className="text-green-600 font-bold text-xl">$100</p>
                                <p>Funds a full scholarship</p>
                            </div>
                        </motion.div>

                        {/* Trust */}
                        <motion.div
                            className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.7 } }}
                        >
                            <div className="flex items-center gap-2"><ShieldCheck size={20} /> Secure</div>
                            <div className="flex items-center gap-2"><Globe size={20} /> Transparent</div>
                            <div className="flex items-center gap-2"><Heart size={20} /> 150+ donors</div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </main>
    )
}