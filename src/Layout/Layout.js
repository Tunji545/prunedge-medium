import {React, useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ReactComponent as PrunedgeLogo } from "../assets/prunedge-logo.svg";
import { Box }  from "@material-ui/core";
import Modal from "../Resuables/Modal";
import { ReactComponent as TimesIcon } from "../assets/times.svg";

function Layout({children}) {

  const [open, setOpen] = useState(false)
  const handleClick = () =>setOpen(true)
  const handleClose = () =>setOpen(false)

  const renderModal = () => {

    return (
      <Modal
        open={open} 
        close={handleClose}
        handleClose={handleClose}
        renderIcon={() => <TimesIcon />}
        renderLogo={() => <PrunedgeLogo />}
        heading="Welcome"
        text2="Click “Sign In” to agree to Prunedge Medium’s Terms of Service and acknowledge that Prunedge Medium’s Privacy Policy applies to you."
      />
    )
  }

  return (
    <Box position="relative">
      <Navbar 
        renderLogo={()=> <PrunedgeLogo />}
        handleClick={handleClick}
      />
      {children}
      <Footer />
        {renderModal()}
    </Box>
  )
}

export default Layout
