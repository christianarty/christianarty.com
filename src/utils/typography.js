import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.plugins = [new CodePlugin()]

lincolnTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    backgroundImage: "none",
  },
})

const typography = new Typography(lincolnTheme)

export default typography
