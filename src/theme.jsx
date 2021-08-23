import { createTheme } from '@material-ui/core'
import { purple, green } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: 'orange'
  }
})

export default theme