import React from "react"

import CourseItem from "./courseItem"

import img1 from "../static/img/course-1.jpg"
import img2 from "../static/img/course-2.jpg"
import img3 from "../static/img/course-3.jpg"

const data = [
  {
    title: "Primaire",
    slug: "primaire",
    price: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus sunt, porro animi vel officiis?",
    image: img1,
  },
  {
    title: "Collège",
    slug: "college",
    price: 15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus sunt, porro animi vel officiis?",
    image: img2,
  },
  {
    title: "Lycée",
    slug: "lycee",
    price: 18,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus sunt, porro animi vel officiis?",
    image: img3,
  },
]

const Courses = () => (
  <section id="popular-courses" className="courses">
    <div className="container">
      <div className="section-title">
        <h2>Cours</h2>
        <p>Tous nos niveaux </p>
      </div>
      <div className="row">
        {data.map((props, i) => (
          <CourseItem key={i} {...props} />
        ))}
      </div>
    </div>
  </section>
)

export default Courses
