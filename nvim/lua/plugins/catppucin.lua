
return {
  {
    "catppuccin/nvim",
    name = "catppuccin",
    opts = {
      dim_inactive = { enabled = true, percentage = 0.25 },
      highlight_overrides = {
        mocha = function(c)
          return {
            Normal = { bg = "#1a1b26"},
            Comment = { fg = "#7687a0" },
            ["@tag.attribute"] = { style = {} },
          }
        end,
      },
    },
  },
}
