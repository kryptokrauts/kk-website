import React from "react"
import { withPrefix } from 'gatsby'
import centeredLogoStyles from "./centered_logo.module.css"

export default () => (
    <img src={withPrefix('/img/logo_400x400.png')} className={centeredLogoStyles.container} alt="logo" />
)