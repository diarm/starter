import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
import { graphql } from "gatsby"


export const query = graphql`
{
  allSanityPost{
    edges{
      node{
        title
        slug {
          current
        }
        mainImage{
          asset{
            fluid{
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}
`;

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About({ data }) {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <ul>
        {data.allSanityPost.edges.map(({node: post}) => (
          <li key={post.slug.current}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}

/*export const query = graphql`
  query {
    site {
      siteMetadata {
        diarm
      }
    }
  }`*/