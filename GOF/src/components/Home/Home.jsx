import { useState } from "react";
import "./Home.css";
import kep1 from "./ems.jpg";
import kep2 from "./background.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div class="movie-card">
        <div class="container">
          <Link to="/szereplok">
            <img src={kep1} alt="cover" class="cover" width="200 px" />
          </Link>

          <div class="hero">
            <div class="details">
              <div class="title1">Game of Thrones</div>

              <div class="title2">Trónok harca</div>
            </div>
          </div>

          <div class="description">
            <div class="column1">
              <span class="tag">action</span>
              <span class="tag">fantasy</span>
              <span class="tag">adventure</span>
            </div>

            <div class="column2">
              <p>
                A Game of Thrones egy epikus fantasy sorozat, amely A Song of
                Ice and Fire alapján készült. A történet több nemesi család
                harcát követi a hatalomért a kitalált Westeros kontinensen,
                miközben egy ősi, természetfeletti fenyegetés is közeleg
                északról. A sorozat híres a politikai intrikákról, váratlan
                fordulatokról és összetett karakterekről.
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
