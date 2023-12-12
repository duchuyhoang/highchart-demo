import {
  Avatar,
  Box,
  BoxProps,
  Checkbox,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowUp } from "../Icon/ArrowUp";
import { ArrowDown } from "../Icon/ArrowDown";

interface Select1Props {
  boxProps?: BoxProps;
  label?: string;
  options: Array<{
    label: string;
    value: any;
    avatar: string;
  }>;
}

const Select1 = ({ boxProps, label, options }: Select1Props) => {
  const popoverAnchor = useRef(null);
  const [openedPopover, setOpenedPopover] = useState(false);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpenedPopover(true);
  };

  const handlePopoverClose = () => {
    setOpenedPopover(false);
  };
  return (
    <>
      <Box
        sx={(theme) => ({
          padding: "8px 0px 8px 8px",
          boxSizing: "border-box",
          backgroundColor: "rgb(248, 249, 252)",
          borderRadius: "4px",
          "&:hover": {
            backgroundColor: "rgb(214, 221, 235)",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
        {...boxProps}
        ref={popoverAnchor}
        onClick={handlePopoverOpen}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={(theme) => ({
              color: "rgb(143, 152, 174)",
              fontSize: "9px",
              fontWeight: 600,
              marginBottom: "4px",
              paddingTop: "1px",
            })}
          >
            {label}
          </Box>
          <Typography
            sx={(theme) => ({
              fontSize: "0.8rem",
              fontWeight: 500,
              lineHeight: 1.2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })}
          >
            Any
          </Typography>
        </Box>
        {openedPopover ? (
          <ArrowUp
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        ) : (
          <ArrowDown
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        )}

        <Popover
          open={openedPopover}
          anchorEl={popoverAnchor.current}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            // pointerEvents: "none",
            // zIndex: 10000,
            ".MuiPaper-root": {
              marginTop: "16px",
              width: "355px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px",
              borderRadius: "6px",
            },
          }}
        >
          <ClickAwayListener onClickAway={handlePopoverClose}>
            <Box>
              <Box
                sx={{
                  padding: "0px 12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TextField
                  size="small"
                  sx={(theme) => ({
                    border: "none",
                    flexGrow: "1",
                    fieldset: {
                      border: "none",
                    },
                  })}
                  placeholder="Filter..."
                  autoComplete="off"
                />
                <hr
                  style={{
                    margin: "0px 12px",
                    borderColor: "rgb(241, 243, 249)",
                    height: "36px",
                    borderWidth: "0px thin 0px 0px",
                  }}
                />
                <Typography
                  sx={(theme) => ({
                    fontSize: ".8rem",
                    fontWeight: "400",
                    color: "#8F98AE",
                    lineHeight: 1,
                    cursor: theme.palette.action.hover,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  })}
                >
                  Select All
                </Typography>
              </Box>
              <Box
                sx={{
                  maxHeight: "31px",
                }}
              >
                <MenuList
                  sx={{
                    borderTop: "1px solid rgb(241, 243, 249)",
                    // borderWidth: "0px 0px thin",
                    // borderStyle: "solid",
                  }}
                >
                  {options.map((option) => (
                    <>
                      <MenuItem
                        key={option.value}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "8px",
                          height: "36px",
                          boxSizing: "border-box",
                          "&:hover": {
                            backgroundColor: "rgba(184, 202, 224, 0.16)",
                          },
                        }}
                        disableRipple
                        disableTouchRipple
                      >
                        <Box display={"flex"}>
                          <Checkbox
                            size="small"
                            color="primary"
                            sx={{
                              marginRight: "8px",
                            }}
                          />
                          <Typography>{option.label}</Typography>
                        </Box>
                        <Avatar
                          src={option.avatar}
                          sx={{
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </MenuItem>
                    </>
                  ))}
                </MenuList>
              </Box>
            </Box>
          </ClickAwayListener>
        </Popover>
      </Box>
    </>
  );
};

export default Select1;
