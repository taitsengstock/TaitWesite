import React, { useState } from 'react';
// import { Link } from 'gatsby-plugin-modal-routing';
import Img from 'gatsby-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'gatsby';

const classNames = require('classnames');

const ProjectStyles = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  .active {
    background-color: red;
  }
`;

function SingleProject({ project }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [showing, setShow] = useState(false);
  const toggleShow = () => setShow(!showing);

  const projectClasses = classNames({
    project: true,
    active: hovered ? 'active' : '',
    open: showing ? 'open' : '',
  });

  console.log(project.image.asset.fluid)
  return (
    <ProjectStyles>
      <div
        // className={hovered ? 'active' : ''}
        className={projectClasses}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div
          style={{
            backgroundImage: `url(${project.image.asset.fluid})`,
          }}
        >
          <div>
            <Img fluid={project.logo.asset.fluid} />
            <button onClick={toggleShow} type="button">
              more
            </button>
          </div>
          <Img fluid={project.image.asset.fluid} />
        </div>

        <Link to={`/project/${project.slug.current}`}>
          <h2>
            <span className="mark">{project.name}</span>
          </h2>
          <p> {project.skills.map((skill) => skill.name)}</p>
        </Link>
      </div>
    </ProjectStyles>
  );
}

export default function Projectlist({ projects }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //   const [hovered, setHovered] = useState(false);
  //   const toggleHover = () => setHovered(!hovered);

  return (
    <div>
      {/* <ProjectStyles>
        <div
          className={hovered ? 'active' : ''}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Hover test
        </div>
      </ProjectStyles> */}

      <Slider {...settings}>
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
}
