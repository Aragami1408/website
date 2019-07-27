import React, { PropsWithChildren } from "react"
import logo from "../../images/tph-logo.png"
import * as SC from "./styles"
import ArrowRight from "../../icons/arrow-right.svg"

function MenuItem({ children, to }: PropsWithChildren<{ to: string }>) {
  return (
    <SC.MenuItem to={to}>
      {children} <ArrowRight />
    </SC.MenuItem>
  )
}

function Sidebar() {
  return (
    <SC.SidebarWrapper>
      <SC.Logo src={logo} />

      <SC.Menu>
        <MenuItem to="/">about</MenuItem>
        <MenuItem to="/">rules</MenuItem>
        <MenuItem to="/">faq</MenuItem>
        <MenuItem to="/">hotbot</MenuItem>
        <MenuItem to="/docs">documentation</MenuItem>
        <MenuItem to="/">tech spotlight</MenuItem>
      </SC.Menu>
    </SC.SidebarWrapper>
  )
}

export default Sidebar
