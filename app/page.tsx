"use client"
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { FaUserGraduate, FaBookOpen, FaDonate } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Heart, ShieldCheck, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useRef } from "react"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
}

function Counter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* NAVBAR */}


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

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
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
      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Supporting refugee students worldwide
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            <Typewriter
              words={[
                "Help refugee students build their future",
                "Education is a right, not a privilege",
                "Empower lives through learning",
                "Support students. Change the world"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            RefuLearn connects people who care with students in need of educational support.
            Our goal is to create a transparent and meaningful way to support learning opportunities for displaced and underserved communities around the world.
          </p>

          <div className="mt-6 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow"
            >
              Support a Student
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
              className="border px-6 py-3 rounded-xl"
            >
              Learn More
            </motion.button>
          </div>

          <div className="flex gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2"><ShieldCheck size={18} /> Secure</div>
            <div className="flex items-center gap-2"><Globe size={18} /> Transparent</div>
            <div className="flex items-center gap-2"><Heart size={18} /> 150+ donors</div>
          </div>
        </motion.div>

        <motion.img
          src="/student.png"
          alt="Student"
          className="rounded-2xl shadow-lg"
          whileHover={{ scale: 1.03, rotate: 1 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        />
      </section>

      {/* IMPACT */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { value: 200, suffix: "+", label: "Students Supported" },
          { value: 15000, prefix: "$", suffix: "+", label: "Donations Raised" },
          { value: 150, suffix: "+", label: "Active Donors" },].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow transition"
            >
              <h2 className="text-3xl font-bold text-green-600">
                {item.prefix}
                <Counter value={item.value} />
                {item.suffix}
              </h2>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
      </motion.section>

      {/* BACKGROUND IMMERSIVE FULL-WIDTH */}
      <motion.section
        className="relative h-[400px] flex items-center justify-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}
      >
        <img
          src="/students-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center max-w-2xl px-6">
          <h2 className="text-3xl font-bold">
            Education changes everything
          </h2>
          <p className="mt-4 text-gray-200">
            Every donation brings hope and opportunity to students in need.
          </p>
        </div>
      </motion.section>

      {/* STORIES */}
      <motion.section
        id="stories"
        className="max-w-6xl mx-auto px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Real Student Stories</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Amina, 19", gender: "female", course: "nursing" },
            { name: "Rashid, 21", gender: "male", course: "engineering" },
            { name: "Amir, 18", gender: "male", course: "education" },
          ].map((student, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={`/students/${student.gender}-${i + 1}.png`}
                alt={student.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{student.name}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Studying {student.course} thanks to donor support.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, color: '#16a34a' }}
                  className="mt-4 font-medium"
                >
                  Read more →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        className="bg-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How it works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "You donate", icon: Heart },
              { label: "We allocate funds", icon: ShieldCheck },
              { label: "Students succeed", icon: Globe },
            ].map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex flex-col items-center"
                >
                  <Icon className="mb-4 text-green-600" size={32} />
                  <p className="font-medium">{step.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* TRANSPARENCY */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Transparency & Impact
        </h2>

        <div className="space-y-4">
          {[
            { label: "Education", value: 80 },
            { label: "Admin", value: 10 },
            { label: "Logistics", value: 10 },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <motion.div
                  className="bg-green-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%`, transition: { duration: 1.2 } }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="relative bg-green-600 text-white text-center py-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          src="/student-cta.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">
            Be the reason a student continues school
          </h2>

          <p className="mt-4 text-green-100">
            Your small contribution can change a life forever.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold"
          >
             Support a Student
          </motion.button>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-white text-center py-8 text-gray-500 text-sm">
        © 2026 RefuLearn Education Support — All rights reserved
      </footer>

    </main>
  )
}