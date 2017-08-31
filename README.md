# ryandeussing.com

Originally based on Gatsby's `using-contentful` example.

## extending Tachyons

#### Breakpoints
If/when a new breakpoint is needed, just create it in it's own .css file. This way Tachyons can be freely updated and extentions will be separate. See `tachyons-extend` [here](https://medium.com/@simonswiss/full-re-write-in-10-days-with-tachyons-and-functional-css-a-case-study-part-4-b565745ca1e5)

#### Variables
`tachyons-for-styled-components` requires all variables to be in `:root` so you can just change them there.