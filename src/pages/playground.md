import BrowserOnly from '@docusaurus/BrowserOnly';
import MuiThemeProvider from "@site/src/components/common/MuiThemeProvider";
import ThemedButton from "@site/src/components/common/ThemedButton";
import ThemedIconButton from "@site/src/components/common/ThemedIconButton";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import RefreshIcon from "@mui/icons-material/Refresh";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadIcon from "@mui/icons-material/Upload";

# Playground

Playground allows you to try ffmpeg.wasm without any installation and
development!

:::tip Quick Start

1. Wait for assets (~32 MB) downloading.
2. Press <ThemedButton>Load Sample Files</ThemedButton> to download & add sample files.
3. Press <ThemedButton variant="contained">Run</ThemedButton> to convert an AVI file to MP4 file.
4. Download output files.

:::

<BrowserOnly>
  {() => {
    const Playground = require('@site/src/components/Playground').default;
    return <Playground/>
  }}
</BrowserOnly>

<div style={{ height: 32 }} />

:::tip
Demo Video: [https://youtu.be/F01B0fV20QA](https://youtu.be/F01B0fV20QA)
:::
