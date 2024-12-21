return {

  -- Цветовая схема
  {
    "catppuccin/nvim",
    name = "catppuccin",
    config = function()
      vim.cmd.colorscheme "catppuccin-mocha"
    end,
  },

  -- -- Плагин neo-runner.nvim
  -- {
  --   "BenGH28/neo-runner.nvim",
  --   config = function()
  --     require("neo-runner").setup()
  --   end,
  -- },
  --
  -- Плагин code_runner.nvim
  {
    "CRAG666/code_runner.nvim",
    config = function()
      require("code_runner").setup({
        filetype = {
          python = "python3 -u",
          c = "gcc $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
          cpp = "cd $dir && g++ $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt",
          javascript = "node $fileName",
        },
        mode = "term",
        startinsert = true,
      })
    end,
  },

  -- Горячая клавиша для запуска кода
  vim.keymap.set("n", "<leader>r", ":RunCode<CR>", { noremap = true, silent = true }),

  -- LSPConfig с clangd
  {
    "neovim/nvim-lspconfig",
    config = function()
      require("lspconfig").clangd.setup {
        on_attach = function(client, bufnr)
          client.server_capabilities.documentFormattingProvider = false
        end,
      }
    end,
  },

  -- Плагин lsp_signature.nvim
  {
    "ray-x/lsp_signature.nvim",
    event = "BufRead",
    config = function()
      require("lsp_signature").setup()
    end,
  },

  -- Плагин для альфа-дэшборда
  {
    "goolord/alpha-nvim",
    opts = function(_, opts)
      opts.section.header.val = {
        " █████  ███████ ████████ ██████   ██████",
        "██   ██ ██         ██    ██   ██ ██    ██",
        "███████ ███████    ██    ██████  ██    ██",
        "██   ██      ██    ██    ██   ██ ██    ██",
        "██   ██ ███████    ██    ██   ██  ██████",
        " ",
        "    ███    ██ ██    ██ ██ ███    ███",
        "    ████   ██ ██    ██ ██ ████  ████",
        "    ██ ██  ██ ██    ██ ██ ██ ████ ██",
        "    ██  ██ ██  ██  ██  ██ ██  ██  ██",
        "    ██   ████   ████   ██ ██      ██",
      }
      return opts
    end,
  },
}
