import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./services.scss"

import Service from "./Service"

import Bulldozer from "./images/icon-bulldozer-74x74.png"
import Tassels from "./images/icon-tassels-70x70.png"
import Ruler from "./images/icon-ruler-45x71.png"
import Helmet from "./images/icon-helmet-67x65.png"
import Relues from "./images/icon-relues-63x64.png"
import Tassel from "./images/icon-tassels-70x70.png"

const Services = () => {
  const card = [
    {
      title: `Construction`,
      icon: Bulldozer,
      description: `We provide high-quality construction services to the energy, water and telecommunications markets.`,
    },
    {
      title: `Remodeling`,
      icon: Tassels,
      description: `Our team of experts has years of experience in remodeling homes including kitchens, basements etc.`,
    },
    {
      title: `Interior Design`,
      icon: Ruler,
      description: `Our interior design services are the best way to get a home design that completely fits you and your lifestyle.`,
    },
    {
      title: `Contracting`,
      icon: Tassel,
      description: `Top Project can manage and hire subcontractors while acting as the main contact with construction clients.`,
    },
    {
      title: `Preconstruction`,
      icon:Relues,
      description: `It involves performing preliminary planning and engineering in order to define the project.`,
    },
    {
      title: `Green Building`,
      icon: Helmet,
      description: `It has a highly reduced effect on environment, and is used in almost every project of our company.`,
    }
  ]
  return (
    <div className="services" id="services">
    <h1>SERVICES</h1>
      <Container>
        <Row>
          {card.map(service => {
            return (
              <Col md="6" lg="4">
                <Service services={service} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Services