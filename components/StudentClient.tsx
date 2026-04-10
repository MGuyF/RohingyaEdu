"use client"

import { motion } from "framer-motion"
import { Heart, Globe, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useNavigate } from "../utils/useNavigate";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

type Student = {
  image: string
  name: string
  age: number | string
  course: string
  story: string
}

export default function StudentClient({ student }: { student: Student }) {
  const { goTo } = useNavigate()
  return (
    <main className="relative min-h-screen text-gray-900 py-20 px-6 overflow-hidden">

      {/* BACKGROUND */}
      <img
        src="/students-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* BACK */}
        <Link href="/students" className="text-green-400 font-semibold">
          ← Back to Students
        </Link>

        {/* HERO */}
        <motion.div
          className="mt-10 grid md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <img
            src={student.image}
            alt={student.name}
            className="rounded-2xl shadow-2xl"
          />

          <div>
            <h1 className="text-4xl font-bold text-white">
              {student.name}, {student.age}
            </h1>

            <p className="text-green-300 mt-2 text-lg">
              Studying {student.course}
            </p>

            <p className="mt-6 text-gray-200 leading-relaxed">
              {student.story}
            </p>

            <button onClick={() => goTo("/donate")} className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg">
              Support {student.name}
            </button>
          </div>
        </motion.div>

        {/* IMPACT */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Heart, label: "Education Funded" },
            { icon: Globe, label: "Future Opportunities" },
            { icon: ShieldCheck, label: "Secure Support" }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow"
              >
                <Icon className="mx-auto mb-4 text-green-600" size={32} />
                <p className="font-medium">{item.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* STORY */}
        <motion.div
          className="mt-20 bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Full Story
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {student.story}
            <br /><br />
            This journey is not just about one student — it represents hope for an entire community.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-white py-12">
            <h2 className="text-2xl font-bold">
              Be part of {student.name}'s journey
            </h2>

            <p className="mt-2 text-green-100">
              Your support can change a life forever.
            </p>

            <button onClick={() => goTo("/donate")} className="mt-6 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold">
              Donate Now
            </button>
          </div>
        </motion.div>

      </div>
    </main>
  )
}