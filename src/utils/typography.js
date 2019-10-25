import Typography from "typography"
import Judah from "typography-theme-judah"

Judah.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a": {
      color: "darkBlue"
    }
  }
}

delete Judah.googleFonts

const typography = new Typography(Judah)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
