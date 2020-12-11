import React from "react";
import { graphql } from "gatsby";
//import Img from "gatsby-image";
import Layout from "../components/layout";
//mport SEO from "../components/seo"
import parse from "html-react-parser";

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <h1>{parse(data.wordpressPost.title)}</h1>

    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
);
export default BlogPostTemplate;

  export const query = graphql`
    query($id: Int!) {
      wordpressPost(wordpress_id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "MMMM DD, YYYY")
      }
    }
  `;
