# Cursor Talk To Figma Plugin Setup

## Overview
This plugin connects Figma to Cursor AI using MCP (Model Context Protocol) via a WebSocket server.

## Setup Instructions

### 1. Start the WebSocket Server

The server needs to be running for the Figma plugin to connect. You have two options:

#### Option A: Use the startup script (Recommended)
```bash
./start-figma-server.sh
```

#### Option B: Run manually
```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
bunx cursor-talk-to-figma-socket
```

The server will start on **port 3055**.

### 2. Connect from Figma

1. Open Figma
2. Go to **Plugins** → **Browse plugins**
3. Search for **"Cursor Talk To Figma"**
4. Install and run the plugin
5. In the plugin settings:
   - **WebSocket Server Port**: `3055`
   - Click **"Connect"**

### 3. Verify Connection

- The plugin should show "Connected to server" status
- You can now use Cursor AI to interact with your Figma designs

## Usage

Once connected:
- Ask Cursor AI about your Figma designs
- Get code suggestions based on Figma components
- Export design tokens and styles
- Generate components from Figma designs

## Troubleshooting

### Server won't start
- Make sure Bun is installed: `bun --version`
- Check if port 3055 is already in use: `lsof -i :3055`
- Kill any existing process: `kill -9 $(lsof -t -i:3055)`

### Can't connect from Figma
- Make sure the server is running
- Check that port 3055 is accessible
- Try restarting both the server and the Figma plugin

### Bun not found
If you get "bun not found", add to your `~/.zshrc`:
```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
```
Then restart your terminal or run: `source ~/.zshrc`

## Notes

- Keep the terminal running while using the plugin
- The server must be running for the connection to work
- You can run the server in the background if needed

