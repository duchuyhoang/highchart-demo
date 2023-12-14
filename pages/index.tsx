import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getConfigs } from "@/common/configs";
import Header from "@/components/Header";
import { useColorTheme } from "@/components/ColorTheme";
import PostCard from "@/components/PostCard";
import { Box, Grid } from "@mui/material";
import Container from "@/components/Container";
import SearchInput from "@/components/SearchInput/SearchInput";
import { useState } from "react";
import ItemSwitcher, { SwitcherType } from "@/components/ItemSwitcher";
import { FilterTag } from "@/components/Tags";
import Select1 from "@/components/Select";
import Chart from "@/components/ChartWrapper";

const Home: NextPage = () => {
  const { mode } = useColorTheme();
  const [displayType, setDisplayType] = useState<SwitcherType>(
    SwitcherType.CARD
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = ["ALL", "DAO", "DEFI", "LAYER1"];

  return (
    <>
      <Header />

      <Container
        containerProps={{
          style: {
            marginTop: "40px",
          },
        }}
      >
        <Chart />
      </Container>
      {/* <Container>
        <Box
          sx={{
            display: "flex",
            my: "12px",
          }}
        >
          <Box flexGrow={1}>
            <SearchInput />
          </Box>
          <Box ml="8px">
            <Select1
              boxProps={{
                style: {
                  width: "160px",
                  height: "100%",
                },
              }}
              label="ASSET / WATCHLIST"
              options={[
                {
                  label: "AJ Scolaro",
                  value: 1,
                  avatar:
                    "https://messari.imgix.net/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2bt0j8lu%2Fproduction%2Fafbfcf9aa890c56cd1be4a5990a497d7cc4ac496-400x400.png?auto=format%2Ccompress&q=60&w=250&s=d8e79a6a5b1cb50a4a357dd7fe2993ac",
                },
                {
                  label: "AJC",
                  value: 2,
                  avatar:
                    "https://messari.imgix.net/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2bt0j8lu%2Fproduction%2Fff7e4ba423bb16686e5012c6266586f5ba8b3327-400x400.jpg?auto=format%2Ccompress&q=60&w=250&s=0c34ae679faaa30c2d81ad553924b15d",
                },

                {
                  label: "Ainsley To",
                  value: 3,
                  avatar:
                    "https://messari.imgix.net/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2bt0j8lu%2Fproduction%2F5765cb43e667d66c9eb19c1793b41f322bfc3018-3004x2609.jpg?auto=format%2Ccompress&q=60&w=250&s=45449e7b6cab6c7b78e2cbb2d3ecc149",
                },
                {
                  label: "Alex Nardi",
                  value: 4,
                  avatar:
                    "https://messari.imgix.net/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2bt0j8lu%2Fproduction%2Faed08dbe67f52f60b1c8ac6838e1cc8199087fa5-690x862.png?auto=format%2Ccompress&q=60&w=250&s=d4adc121500dd97ac8267ed2f3372899",
                },
              ]}
            />
          </Box>

          <ItemSwitcher
            type={displayType}
            onChange={(type) => {
              setDisplayType(type);
            }}
          />
        </Box>
        <Box display={"flex"} mb={"16px"}>
          {tags.map((tag) => (
            <Box key={tag} mr={"8px"}>
              <FilterTag
                active={selectedTag === tag}
                label={tag}
                onClick={() => {
                  setSelectedTag(tag);
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
      <Container>
        <Grid
          container
          columnSpacing={"24px"}
          rowSpacing={"32px"}
          sx={(theme) => ({
            [theme.breakpoints.up(600)]: {
              ".MuiGrid-item": {
                flexBasis: "50%",
                maxWidth: "50%",
              },
            },
            [theme.breakpoints.up(900)]: {
              ".MuiGrid-item": {
                flexBasis: "33.3333333333%",
                maxWidth: "33.3333333333%",
              },
            },
            [theme.breakpoints.up(1200)]: {
              ".MuiGrid-item": {
                flexBasis: "25%",
                maxWidth: "25%",
              },
            },
            [theme.breakpoints.up(1536)]: {
              ".MuiGrid-item": {
                flexBasis: "16.6666666667%",
                maxWidth: "16.6666666667%",
              },
            },
          })}
        >
          <Grid xs={12} item>
            <PostCard isLoading={true} thumbnail="add" title="adad" id="1" />
          </Grid>
          <Grid xs={12} item>
            <PostCard isLoading={false} thumbnail="add" title="adad" id="1" />
          </Grid>
          <Grid xs={12} item>
            <PostCard isLoading={false} thumbnail="add" title="adad" id="1" />
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default Home;
