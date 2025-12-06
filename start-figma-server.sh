#!/bin/bash

# Start the Cursor Talk To Figma WebSocket Server
# This script starts the server on port 3055

export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

echo "Starting Cursor Talk To Figma WebSocket Server..."
echo "Server will run on port 3055"
echo "Press Ctrl+C to stop the server"
echo ""

bunx cursor-talk-to-figma-socket

