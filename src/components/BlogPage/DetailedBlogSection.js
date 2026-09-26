import { useState, useEffect } from "react";
import BlogSection2CSS from "./BlogSection2.module.css";
import CustomPost from "../styled/customPost";

export default function BlogSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        const modifiedResult = result.map((post) => ({
          ...post,
          content: post.content.split(" ").slice(0, 60).join(" ") + "...",
        }));

        setData(modifiedResult);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={BlogSection2CSS.background}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={BlogSection2CSS.title}>Πρόσφατες Δημοσιεύσεις</div>
        <h1>Search ...</h1>
      </div>
      <div className={BlogSection2CSS.container}>
        {data &&
          data.map((post, index) => (
            <CustomPost to={`/blog/${post._id}`} key={index}>
              <div style={{ fontSize: "2.5rem", fontWeight: 600 }}>
                {post.title}
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "#444444 ",
                  paddingBottom: "1rem",
                }}
              >
                {post.date}
              </div>
              <div style={{ fontSize: "1.5rem" }}>{post.content}</div>
            </CustomPost>
          ))}
      </div>
    </div>
  );
}
