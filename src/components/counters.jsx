import React from "react"

const Counters = () => (
  <section id="counts" class="counts section-bg">
    <div class="container">
      <div class="row counters">
        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">1232</span>
          <p>Élèves</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">64</span>
          <p>Cours</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">42</span>
          <p>Ateliers</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">15</span>
          <p>Enseignants</p>
        </div>
      </div>
    </div>
  </section>
)

export default Counters
