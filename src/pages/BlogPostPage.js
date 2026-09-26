import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SectionTitle from "../components/styled/sectionTitle";
import SectionText from "../components/styled/setctionText";

export default function BlogPostPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section style={{ backgroundColor: "#f8f4ef", padding: "10rem 0rem" }}>
      <Box sx={{ flexGrow: 1, marginLeft: "20%", marginRight: "20%" }}>
        <Grid container>
          <Grid item xs={12}>
            {data && (
              <>
                <SectionTitle>{data.title}</SectionTitle>

                <hr
                  style={{
                    height: "1px",
                    border: "0",
                    margin: "2rem 0",
                    background: "black",
                  }}
                />
                <SectionText>{data.content}</SectionText>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
