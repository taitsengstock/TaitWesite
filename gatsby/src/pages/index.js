import React from 'react';
import HomeSkillGrid from '../components/HomeSkillGrid';
import HomeProjectGrid from '../components/HomeProjectGrid';
import HomeLoadingGrid from '../components/HomeLoadingGrid';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import HomeMainSection from '../components/HomeMainSection';
import HomeLoadingMainSection from '../components/HomeLoadingMainSection';

function FeaturedPerson({ featuredPerson }) {
  console.log(featuredPerson);
  return (
    <div>
      {!featuredPerson && <HomeLoadingMainSection />}
      {featuredPerson?.length && <HomeMainSection person={featuredPerson} />}
    </div>
  );
}
function FeaturedProjects({ featuredProjects }) {
  console.log(featuredProjects);
  return (
    <div>
      {!featuredProjects && <HomeLoadingGrid count={3} />}
      {featuredProjects?.length && (
        <HomeProjectGrid projects={featuredProjects} />
      )}
    </div>
  );
}
function FeaturedSkills({ featuredSkills }) {
  console.log(featuredSkills);
  return (
    <div>
      {!featuredSkills && <HomeLoadingGrid count={3} />}
      {featuredSkills?.length && <HomeSkillGrid skills={featuredSkills} />}
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
        {/* <div className="container">
          <FeaturedSkills featuredSkills={featuredSkills} />
        </div> */}
      </HomePageGrid>
    </div>
  );
}
