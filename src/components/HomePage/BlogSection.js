import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import SectionTitle from "../styled/sectionTitle";
import CustomButton from "../Global/CustomButton";
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

        const firstThreeResults = result.slice(0, 3);

        const modifiedResult = firstThreeResults.map((post) => ({
          ...post,
          content: post.content.split(" ").slice(0, 72).join(" ") + "...",
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

  const truncateContent = (content) => {
    const words = content.split();
    return words.slice(0, 30);
  };

  return (
    <section style={{ backgroundColor: "#f8f4ef", padding: "10rem 0rem" }}>
      <Box sx={{ flexGrow: 1, marginLeft: "10%", marginRight: "10%" }}>
        <div className="responsive-columns section1-container">
          <div style={{ paddingBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SectionTitle>Πρόσφατες Δημοσιεύσεις</SectionTitle>
              <div>
                <CustomButton
                  color={"blue"}
                  text={"Όλες οι Δημοσιεύσεις"}
                  destination={"blog"}
                />
              </div>
            </div>
          </div>
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
      </Box>
    </section>
  );
}
