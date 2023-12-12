import React, { useRef, useState } from "react";
import Container from "../Container";
import {
  ArrowRight,
  Asset,
  Dao,
  Exchange,
  Logo,
  News,
  Pools,
  Protocol,
  Tools,
  Vote,
} from "../Icon";
import {
  Box,
  Grid,
  Popover,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { Zoom } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useIsMobileView } from "@/common/hooks/useIsMobile";
const ItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: "600",
  fontSize: "0.875rem",
}));

interface ItemProps {
  text: React.ReactNode;
  popoverContent?: React.ReactNode;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom ref={ref} {...props} />;
});

const Item = ({ text, popoverContent }: ItemProps) => {
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
          padding: "0px 16px",
          cursor: theme.palette.action.hover,
          ".item-text": {
            color: theme.palette.common.white,
          },
          ...(openedPopover && {
            borderRadius: "50px",
            backgroundColor: theme.palette.common.white,
            ".item-text": {
              color: theme.palette.common.black,
            },
          }),
        })}
        ref={popoverAnchor}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box
          sx={(theme) => ({
            height: "38px",
            display: "flex",
            alignItems: "center",
            padding: "6px 0px",
            boxSizing: "border-box",
          })}
        >
          {text}
        </Box>
      </Box>
      {!!popoverContent && (
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
            zIndex: 10000,
            ".MuiPaper-root": {
              marginTop: "9px",
            },
          }}
          open={openedPopover}
          anchorEl={popoverAnchor.current}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            sx: (theme) => ({
              pointerEvents: "auto",
              // backgroundColor: theme.palette.common.white,
              backgroundColor: "rgb(22, 24, 29)",
              boxShadow:
                "rgba(0, 0, 0, 0.15) 0px 4px 8px 3px, rgba(0, 0, 0, 0.3) 0px 1px 3px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }),
            onMouseEnter: handlePopoverOpen,
            onMouseLeave: handlePopoverClose,
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          TransitionComponent={Transition}
          onClose={handlePopoverClose}
          // disableRestoreFocus
        >
          <Box
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            {popoverContent}
          </Box>
        </Popover>
      )}
    </>
  );
};

interface NavigationItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}
const NavigationItem = ({ icon, content, title }: NavigationItemProps) => {
  return (
    <Box
      className="navigation-item"
      sx={(theme) => ({
        padding: "8px 16px",
        display: "flex",
        svg: {
          fill: theme.palette.common.white,
          width: "20px",
          height: "20px",
          minWidth: "20px",
          marginTop: "3px",
        },
      })}
    >
      {icon}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          marginLeft: "8px",
        })}
      >
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.common.white,
          })}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

const Header = () => {
  const theme = useTheme();
  const isMobile = useIsMobileView();
  return (
    <Container
      containerProps={{
        style: {
          backgroundColor: theme.palette.primary.dark,
          minHeight: "56px",
          display: "flex",
          alignItems: "center",
        },
      }}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
        })}
      >
        <Logo
          style={{
            color: "rgb(0, 146, 255)",
            marginRight: "24px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Item
          text={<ItemText className="item-text">Rakings</ItemText>}
          popoverContent={
            <Grid
              container
              sx={{
                maxWidth: "521px",
              }}
            >
              <Grid item xs={6}>
                <NavigationItem
                  icon={<Asset />}
                  content="Explore and compare crypto assets"
                  title="Assets"
                />
              </Grid>
              <Grid item xs={6}>
                <NavigationItem
                  icon={<Protocol />}
                  content="Explore and compare smart contracts protocols"
                  title="Protocols"
                />
              </Grid>

              <Grid item xs={6}>
                <NavigationItem
                  icon={<Exchange />}
                  content="Explore crypto exchanges and their markets"
                  title="Exchanges"
                />
              </Grid>

              <Grid item xs={6}>
                <NavigationItem
                  icon={<Dao />}
                  content="Explore DAOs and their governance structures"
                  title="DAOS"
                />
              </Grid>

              <Grid item xs={6}>
                <NavigationItem
                  icon={<Tools />}
                  content="Explore tools used by DAOs"
                  title="Tools"
                />
              </Grid>

              <Grid item xs={6}>
                <NavigationItem
                  icon={<Pools />}
                  content="Explore and compare DeFi pools"
                  title="Pools"
                />
              </Grid>
            </Grid>
          }
        />
        <Item text={<ItemText className="item-text">Diligence</ItemText>} />

        <Item
          text={<ItemText className="item-text">Intel</ItemText>}
          popoverContent={
            <Grid
              container
              sx={{
                maxWidth: "298px",
              }}
            >
              <Grid item xs={12}>
                <NavigationItem
                  icon={<ArrowRight />}
                  content="Track all major events, changes, and protocol decisions"
                  title="Key Developments"
                />
              </Grid>
              <Grid item xs={12}>
                <NavigationItem
                  icon={<Vote />}
                  content="Track discussions, proposals and votes in real-time"
                  title="Governance"
                />
              </Grid>

              <Grid item xs={12}>
                <NavigationItem
                  icon={<News />}
                  content="Track news from hundreds of sources in one feed"
                  title="News"
                />
              </Grid>
            </Grid>
          }
        />

        <Item text={<ItemText className="item-text">Research</ItemText>} />
        <Item text={<ItemText className="item-text">Charts</ItemText>} />
        <Item text={<ItemText className="item-text">Watchlists</ItemText>} />
        <Item text={<ItemText className="item-text">About</ItemText>} />
      </Box>
    </Container>
  );
};

export default Header;
