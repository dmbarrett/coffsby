import React from "react"
import { Link } from "gatsby"
import Title from "../global/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda a facilis vero consectetur vel eaque, iste quae magni
              voluptatibus minima impedit commodi incidunt doloremque quos
              asperiores. Ab delectus quis placeat ea dolor. Numquam voluptas,
              nesciunt velit excepturi error adipisci aperiam commodi officiis
              sapiente aliquid iste recusandae repudiandae officia similique ad.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
