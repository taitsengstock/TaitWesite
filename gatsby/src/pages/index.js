import React from 'react';
import HomeSkillGrid from '../components/HomeSkillGrid';
import HomeProjectGrid from '../components/HomeProjectGrid';
import LoadingGrid from '../components/LoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import HomeMainSection from '../components/HomeMainSection';

function FeaturedPerson({ featuredPerson }) {
  console.log(featuredPerson);
  return (
    <div>
      {/* {!featuredSkills && <LoadingGrid count={4} />} */}
      {!featuredPerson && !featuredPerson?.length && <p>No skills available</p>}
      {featuredPerson?.length && <HomeMainSection person={featuredPerson} />}
    </div>
  );
}
function FeaturedSkills({ featuredSkills }) {
  console.log(featuredSkills);
  return (
    <div>
      {/* {!featuredSkills && <LoadingGrid count={4} />} */}
      {!featuredSkills && !featuredSkills?.length && <p>No skills available</p>}
      {featuredSkills?.length && <HomeSkillGrid skills={featuredSkills} />}
    </div>
  );
}
function FeaturedProjects({ featuredProjects }) {
  console.log(featuredProjects);
  return (
    <div>
      {!featuredProjects && <LoadingGrid count={3} />}
      {featuredProjects?.length && (
        <HomeProjectGrid projects={featuredProjects} />
      )}
    </div>
  );
}

export default function HomePage() {
  const { featuredPerson } = useLatestData();
  const { featuredSkills } = useLatestData();
  const { featuredProjects } = useLatestData();
  return (
    <div>
      <HomePageGrid>
        <div className="container">
          <FeaturedPerson featuredPerson={featuredPerson} />
        </div>
        <div className="container">
          <FeaturedProjects featuredProjects={featuredProjects} />
        </div>
        <div className="container">
          <FeaturedSkills featuredSkills={featuredSkills} />
        </div>
      </HomePageGrid>
    </div>
  );
}
