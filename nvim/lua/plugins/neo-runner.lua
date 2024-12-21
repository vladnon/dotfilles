local M = {}

function M.setup()
  require("neo-runner").setup({
  })

  vim.g.runner_c_compiler = "gcc"
  vim.g.runner_cpp_compiler = "g++"
  vim.g.runner_c_options = "-std=c99 -Wall"
  vim.g.runner_cpp_options = "-std=c++11 -Wall"
  vim.g.runner_python_ex = "python3"
  vim.g.runner_python_options = ""
end

return M
