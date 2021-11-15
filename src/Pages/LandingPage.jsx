import React from "react";
import { Typography, Box, makeStyles, Grid, IconButton, Paper, InputBase } from "@material-ui/core";
import bgImage1 from "../assets/bgImage1.png";
import { theme } from "../theme/theme";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from "../Resuables/Button"
import { cardDetails } from "../utils/data";
import Card from "../Resuables/Card";
import BlueDot from "../assets/dot1.svg";
import Dot from "../assets/dot.svg";
import ArticleImage from "../assets/article-image.png";
import { Article } from "../utils/data";
import { cardLike } from "../utils/data";
import SmallFrame from "../Resuables/smallFrame";
import DottedLines from "../assets/dottedlines.svg";
import SmilingGirl from "../assets/smilingGirl.png";
import Gift from "../assets/gift.png";
import { BgHorin } from "../utils/data.js";
import DottedLines2 from "../assets/dottedLines2.svg";
import DottedLines3 from "../assets/dottedLines3.svg";
import DottedLines4 from "../assets/dottedLines4.svg";
import HandBook from "../assets/handBook.svg";
import Layout from "../Layout/Layout"

const useStyles = makeStyles({
  bgImage1: {
    backgroundImage: `url(${bgImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: "linear-gradient(90.09deg, rgba(0, 0, 0, 0.7) 16.39%, rgba(0, 0, 0, 0) 131.11%)",
    padding: theme.spacing(27.5, 0, 9, 13.375),
    color: theme.palette.info.main
  },
  text: {
    fontSize: 14
  },
  box1: {
    paddingTop: theme.spacing(9.25),
    paddingLeft: theme.spacing(13.375),
    marginRight: theme.spacing(13.875),
  },
  box2: {
    paddingBottom: theme.spacing(3)
  },
  text2: {
    paddingRight: theme.spacing(4),
    position: "relative",
    top: 30,
    paddingBottom: theme.spacing(6)
  },
  box3: {
    paddingLeft: theme.spacing(38.625),
    paddingRight: theme.spacing(41.28),
    paddingTop: theme.spacing(16.875),
    position: "relative"
  },
  wrap: {
    backgroundColor: theme.palette.secondary.main, 
    margin: theme.spacing(22.5, 13.875, 27, 0),
    position: "relative",
  },
  box4: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: theme.spacing(5)
  },
  position: {
    position: "relative",
    right: 20
  },
  text3: {
    fontSize: "1.25rem",
    lineHeight: "27px",
    fontFamily: "Ubuntu",
    color: theme.palette.warning.main
  },
  box5: {
    paddingLeft: theme.spacing(13.375),
    marginRight: theme.spacing(13.875),
    paddingTop: theme.spacing(9.25),
    paddingBottom: theme.spacing(3)
  },
  space: {
    marginLeft: theme.spacing(10.25),
    marginRight: theme.spacing(10.25)
  },
  btn: {
    position: "absolute",
    bottom: 270,
    left: 100
  },
  box6: {
    border: `3px solid ${theme.palette.secondary.main}`, 
    position: "relative",
    margin: theme.spacing(21.25, 13.35),
    paddingTop: theme.spacing(6.375),
    paddingBottom: theme.spacing(6.375),
  },
  text4: {
    fontSize: 14, 
    color: "#393A4A",
    lineHeight: "21px",
    fontFamily: "Ubuntu",
    textAlign: "center"
  },
  box7: {
    backgroundColor: "#15692A",
    padding: theme.spacing(12, 11.5),
    color: theme.palette.warning.main,
    position: "absolute",
    bottom: 100,
    right: 460,
    fontFamily: theme.typography.subtitle1.fontFamily,
    "& fieldset": {
      borderRadius: 0
    }
  },
 
})

function LandingPage() {

  const classes = useStyles();

  const result1 = cardLike.filter(item => item.id <= 4);
  const result2 = cardLike.filter(item => item.id > 4 && item.id <  9);

  const quote = (
    <>
      “What we fear of doing most is<br /> usually what we most need to do.”
    </>
  )

  return (
    <Layout>
      <Box className={classes.bgImage1}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" className={classes.heading} gutterBottom>
              Designers have discovered a new way to exploit NFTs in the Global Village
            </Typography>
            <Box className={classes.text} component="li" mb={theme.spacing(0.5)}>
              Posted by Lateef Jakande • 20 mins ago
            </Box>
            <Box>
              <IconButton component="span">
                <ChevronLeftIcon style={{color: "white"}} />
              </IconButton>
              <Typography className={classes.text} component="span">1/3</Typography>
              <IconButton component="span">
                <ChevronRightIcon style={{color: "white"}} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} />
        </Grid>
      </Box>
      <Box>
        <Box className={classes.box5} display="flex" justifyContent="space-between">
          <Typography variant="h4" component="span">Latest</Typography>
          <Button text="view all" variant="outlined" color="primary" />
        </Box>
        <Box display="flex" style={{paddingLeft: theme.spacing(13.375)}}>
          {cardDetails.map(card => (
            <Card 
              key={card.id} 
              diagram={card.bgImage} 
              contentText1={card.subHeading} 
              contentText2={card.text}
              renderIcon1={card.icon1}
              actionText1={card.text2}
              renderIcon2={()=><card.icon2 />}
              actionText2={card.text3}
              style={{flexGrow: 1}}
            />
          ))}
        </Box>
        <Box textAlign="center" style={{paddingTop: theme.spacing(6.25)}}>
          <Box 
            component="img"
            alt="The dot"
            src={BlueDot}
            style={{paddingRight: 16}}
          />
          <Box 
            component="img"
            alt="The dot"
            src={Dot}
            style={{paddingRight: 16}}
          />
          <Box 
            component="img"
            alt="The dot"
            src={Dot}
            style={{paddingRight: 16}}
          />
        </Box>
      </Box>
      <Box className={classes.box1}>
        <Box className={classes.box2} display="flex" justifyContent="space-between">
          <Typography variant="h4" component="span">All Articles</Typography>
          <Button text="Explore all" variant="outlined" color="primary" />
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              alt=""
              src={ArticleImage}
              width={567}
              height={526}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" >
              {Article.map(text => (
                <Typography key={text.id} variant="subtitle1" className={classes.text2}>
                  {text.text}
                </Typography>
              ))}
            </Box>
            <Grid container style={{marginRight: 111}}>
              <Grid item xs={12} sm={6}>
                {result1.map(card => (
                  <SmallFrame 
                    key={card.id} 
                    smallBg={card.smallbg} 
                    text1={card.text1} 
                    text2={card.text2}
                  />
                ))}
              </Grid>
              <Grid item xs={12} sm={6}>
                {result2.map(card => (
                  <SmallFrame 
                    key={card.id} 
                    smallBg={card.smallbg} 
                    text1={card.text1} 
                    text2={card.text2}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" className={classes.wrap}>
        <Box
          component="img"
          alt=""
          src={DottedLines}
        />
        <Box
          position="absolute"
          component="img"
          alt=""
          src={SmilingGirl}
        />
        <Box  
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center" 
          color="white"
          textAlign="left"
          className={classes.space}
          
        >
          <Box className={classes.position}>
            <Box
              component="img"
              alt=""
              src={Gift}
            />
            <Typography variant="h5" component="span" style={{color: "white"}}>
              Prunedger of the Month!
            </Typography>
          </Box>
          <Typography variant="subtitle1">
            Jessica Wells is a senior writer and editor at Prunedge, working remotely from San Diego. When she's not writing, Jessica enjoys paddle boarding, snorkeling and enjoying the view (and a cocktail) from her beach chair.😍😍
          </Typography>
        </Box>
      </Box>
      <Box className={classes.box3}>
        <Box className={classes.box4}>
          <Typography variant="h4" >Events</Typography>
          <Button text="View all" variant="outlined" color="black" />
        </Box>
        <Box
          component="img"
          alt=""
          src={DottedLines2}
          style={{position: "absolute", right: 0, top: 150}}
        />
        {BgHorin.map(cardLike => (
          <Box 
            key={cardLike.id}
            style={{
              backgroundImage: `url(${cardLike.horinImg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              color: theme.palette.info.main,
              fontSize: "1.333rem",
              padding: theme.spacing(4),
              marginBottom: theme.spacing()
            }}
          >
            <Grid container>
              <Grid item xs={7}>
                <Typography className={classes.text3}>{cardLike.text1}</Typography>
                <Typography style={{opacity: 0.8}}>{cardLike.text2}</Typography>
                <Box display="flex">
                  <Typography style={{opacity: 0.8, marginRight: theme.spacing(1)}}>
                    {cardLike.text3}
                  </Typography>
                  <Button text="Technology" color="warning" style={{borderRadius: 25, fontSize: 12}} />
                </Box>
              </Grid>
              <Grid item xs={5} />
            </Grid> 
          </Box>
        ))}
        <Box
          component="img"
          alt=""
          src={DottedLines3}
          style={{position: "absolute", left: 0, bottom: 5}}
        />
      </Box>
      <Box className={classes.box6}>
        <Button text="Quotes & Mentions" className={classes.btn} style={{backgroundColor: "red"}} />
        <Typography 
          variant="h3" 
          gutterBottom 
          style={{color: "#393A4A", textAlign: "center", fontWeight: 700}}
        >
          {quote}
        </Typography>
        <Typography className={classes.text4} gutterBottom>Segun Oroyo</Typography>
        <Typography className={classes.text4} gutterBottom style={{color: "rgb(107, 108, 126)"}}>
          Senior Product Designer, Prunedge
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" marginBottom={theme.spacing(17.5)} position="relative">
        <Box
          component="img"
          alt=""
          src={DottedLines4}
          position="absolute"
          left={220}
          top={150}
        />
        <Box component="span" className={classes.box7}>
          <Typography variant="h4" color="warning" gutterBottom>
            Subscribe to our Newsletter
          </Typography>
          <Typography color="warning" gutterBottom>
            Get Access to our exclusive content anytime, anywhere!
          </Typography>
          <Box display="flex" padding={1} component={Paper} square>
            <InputBase
              variant="outlined" 
              placeholder="Enter your email.."  
              fullWidth
              component="span"
              size="small"
            />
            <Button 
              text="subscribe"
              size="large"
              style={{backgroundColor: "#FFCC2E", color: "#15692A", fontWeight: 700}} 
            /> 
          </Box>  
        </Box>
        <Box
          component="img"
          alt=""
          src={HandBook}
        />
      </Box>
    </Layout>
  )
}

export default LandingPage;