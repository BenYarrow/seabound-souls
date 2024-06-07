import React from "react";
import BlockWrapper from "../components/BlockWrapper";
import Title from "../components/Title";
import { blogLinks } from "../data/blog-links";
import BlogLink from "../components/BlogLink";

const Blog = () => {

    const blogGridClasses = [
        "grid grid-cols-1 lg:grid-cols-3",
        "gap-8 lg:gap-12 xl:gap-12",
      ].join(" ");

    return (
        <div>
            <Title
                title="Blog"
                h1
                centreHeading
            />
            <BlockWrapper>
                <ul className={blogGridClasses}>
                    {blogLinks.map((blog) => 
                        blog.blogLinkData.map((data, index: number) => (
                            <li key={index}>
                                <BlogLink {...data}/>
                            </li>
                        )) 
                    )}
                </ul>
            </BlockWrapper>
        </div>
    )
}

export default Blog