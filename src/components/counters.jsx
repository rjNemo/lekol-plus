import React from "react"

const Counters = () => (
  <section id="counts" class="counts section-bg">
    <div class="container">
      <div class="row counters">
        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">100+</span>
          <p>Élèves satisfaits</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">3</span>
          <p>Niveaux</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">10+</span>
          <p>Ateliers organisés</p>
        </div>

        <div class="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">3</span>
          <p>Enseignants</p>
        </div>
      </div>
    </div>
  </section>
)

export default Counters
