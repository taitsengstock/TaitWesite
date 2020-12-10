import { useEffect, useState } from 'react';

const gql = String.raw;

export default function useLatestData() {
  const [featuredPerson, setFeaturedPerson] = useState();
  const [featuredSkills, setFeaturedSkills] = useState();
  const [featuredProjects, setFeaturedProjects] = useState();
  // Use a side effect to fetch the data from a graphql endpoint
  useEffect(function () {
    // when the component loads fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              featuredPerson {
                name
                _id
                slug {
                  current
                }
                description
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
              featuredSkills {
                name
                _id
                slug {
                  current
                }
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
                description
              }

              featuredProjects {
                name
                _id
                slug {
                  current
                }
                logo {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
                description
                skills {
                  _id
                  name
                }
                image {
                  asset {
                    url
                    metadata {
                      lqip
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // ToDo check for errors
        // set the data to state
        setFeaturedPerson(res.data.StoreSettings.featuredPerson);
        setFeaturedSkills(res.data.StoreSettings.featuredSkills);
        setFeaturedProjects(res.data.StoreSettings.featuredProjects);
      })
      .catch((err) => {
        console.log('shoot');
        console.log(err);
      });
  }, []);
  return {
    featuredPerson,
    featuredSkills,
    featuredProjects,
  };
}
