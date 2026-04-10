import StudentClient from "../../../components/StudentClient"

// ⚡ Fake data
const students = [
  {
    id: "amina",
    name: "Amina",
    age: 19,
    course: "Nursing",
    story: "Amina grew up in a refugee camp with limited access to education. Thanks to donor support, she is now studying nursing and dreams of helping her community.",
    image: "/students/female-1.webp"
  },
  {
    id: "rashid",
    name: "Rashid",
    age: 21,
    course: "Engineering",
    story: "Rashid always had a passion for building things. With support, he is now pursuing engineering and hopes to rebuild infrastructure in his community.",
    image: "/students/male-2.webp"
  },
  {
    id: "amir",
    name: "Amir",
    age: 18,
    course: "Education",
    story: "Amir wants to become a teacher to give back. Education changed his life, and he wants to pass that opportunity to others.",
    image: "/students/male-3.webp"
  }
]

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find(s => s.id === id);

  if (!student) {
    return <div className="p-20 text-center">Student not found</div>;
  }

  return <StudentClient student={student} />;
}