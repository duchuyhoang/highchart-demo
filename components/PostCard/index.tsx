import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

import Skeleton from "@mui/material/Skeleton";

interface PostCardProps {
  id: string;
  title: string;
  thumbnail: string;
  isLoading: boolean;
}

const PostCard = ({ isLoading }: PostCardProps) => {
  return (
    <Card
      sx={(theme) => ({
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "none",
        ".MuiSkeleton-root": {
          transform: "scale(1)",
        },
        //
      })}
    >
      {!isLoading ? (
        <Box
          sx={(theme) => ({
            width: "100%",
            aspectRatio: "10/5.63518",
            borderRadius: "8px",
            overflow: "hidden",
            cursor: theme.palette.action.hover,
            "&:hover": {
              ".MuiCardMedia-root": {
                transform: "scale(1.1)",
                transition: "all 0.2s",
              },
            },
          })}
        >
          <CardMedia
            sx={{
              width: "100%",
              height: "100%",
              // aspectRatio: "10/5.63518",
              borderRadius: "8px",
            }}
            image="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
          />
        </Box>
      ) : (
        <Skeleton
          sx={{
            width: "100%",
            aspectRatio: "10/5.63518",
            borderRadius: "8px",
          }}
        />
      )}

      <CardContent sx={{ p: "0", mt: "16px" }}>
        {!isLoading ? (
          <>
            <Typography
              gutterBottom
              variant="h4"
              color="text.primary"
              sx={(theme) => ({
                "&:hover": {
                  textDecoration: "underline",
                  cursor: theme.palette.action.hover,
                },
              })}
            >
              DeFi Sector Brief - October 11th, 2023
            </Typography>
            <Typography variant="body2" color="text.primary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </>
        ) : (
          <>
            <Skeleton
              height={"46px"}
              sx={{
                marginY: "0.35rem",
              }}
            />
            <Skeleton
              height={"60px"}
              sx={{
                marginTop: "0.5rem",
              }}
            />
          </>
        )}
      </CardContent>
      <Box display={"flex"} mt={"16px"}>
        {!isLoading ? (
          <>
            <Avatar
              alt="Remy Sharp"
              src="https://messari.imgix.net/https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2bt0j8lu%2Fproduction%2Fd4e2513681e11e0e21143a6a005e22efa9fe2e7a-962x962.jpg?auto=format%2Ccompress&q=60&w=250&s=ce513ddc2a9c770eaee4a680d134b045"
              sx={{ width: 32, height: 32, mr: "8px" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1">Ally Zach</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" color="text.disabled">
                  Oct 5, 2023
                </Typography>
                <Box color="text.disabled" mx={"4px"} fontSize={"0.8rem"}>
                  •
                </Box>
                <Typography variant="subtitle2" color="text.disabled">
                  22 min read
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <Box display={"flex"} width={"100%"}>
            <Skeleton sx={{ width: 32, height: 32, mr: "8px" }} />
            <Skeleton
              sx={{
                height: "100%",
                flexGrow: 1,
              }}
            />
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default PostCard;
