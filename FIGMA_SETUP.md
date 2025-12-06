# Figma to Cursor Integration Guide

## Overview
This guide helps you connect Figma designs with your Cursor development workflow for your Next.js portfolio website.

## Recommended Figma Plugins

### 1. **Figma to Code Plugins** (Export designs as code)
- **Figma to React** - Exports React components
- **Anima** - Converts Figma designs to React/Next.js code
- **Builder.io** - Design to code workflow
- **Figma to HTML/CSS** - Basic export functionality

### 2. **Design Token Plugins** (Sync colors, spacing, typography)
- **Figma Tokens** - Export design tokens as JSON
- **Style Dictionary** - Convert Figma tokens to CSS/Tailwind

### 3. **Development Workflow Plugins**
- **Figma Dev Mode** - Built-in Figma feature for developers
- **Figma API** - Direct API access for custom integrations

## Setup Steps

### Option 1: Using Figma Dev Mode (Recommended)

1. **In Figma:**
   - Open your design file
   - Click "Dev Mode" in the top right
   - Select elements to see CSS/Tailwind code
   - Copy styles directly

2. **In Cursor:**
   - Create components based on Figma designs
   - Use the copied Tailwind classes
   - Reference Figma file for spacing/colors

### Option 2: Using Figma Tokens Plugin

1. **Install Figma Tokens Plugin:**
   - In Figma: Plugins → Browse plugins → Search "Figma Tokens"
   - Install the plugin

2. **Export Design Tokens:**
   - Run the plugin in your Figma file
   - Export tokens as JSON
   - Save to `design-tokens.json` in your project

3. **Use in Your Project:**
   - Import tokens into `tailwind.config.ts`
   - Reference tokens in your components

### Option 3: Manual Workflow (Most Common)

1. **Design in Figma:**
   - Create your designs
   - Use consistent spacing (4px, 8px, 16px grid)
   - Name layers clearly

2. **Inspect in Figma:**
   - Use Dev Mode to see measurements
   - Copy CSS/Tailwind classes
   - Note colors, fonts, spacing

3. **Implement in Cursor:**
   - Create components matching Figma designs
   - Use Tailwind classes for styling
   - Match spacing and colors exactly

## Quick Reference: Figma to Tailwind

### Spacing
- Figma: 8px → Tailwind: `p-2` or `gap-2`
- Figma: 16px → Tailwind: `p-4` or `gap-4`
- Figma: 24px → Tailwind: `p-6` or `gap-6`

### Colors
- Export colors from Figma
- Add to `tailwind.config.ts`:
```ts
colors: {
  'figma-primary': '#your-color',
  'figma-secondary': '#your-color',
}
```

### Typography
- Match font families in `tailwind.config.ts`
- Use Tailwind text size classes: `text-sm`, `text-base`, `text-lg`, etc.

## Best Practices

1. **Keep Figma file organized:**
   - Use consistent naming
   - Group related components
   - Use components/symbols for reusable elements

2. **Sync regularly:**
   - Update code when designs change
   - Keep Figma and code in sync
   - Document any deviations

3. **Use Figma Comments:**
   - Add comments for implementation notes
   - Mark design decisions
   - Note responsive breakpoints

## Next Steps

1. Open your Figma design file
2. Enable Dev Mode (top right)
3. Start implementing components in Cursor
4. Reference Figma for exact measurements and styles

## Useful Links

- [Figma Dev Mode Guide](https://help.figma.com/hc/en-us/articles/360055204135)
- [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178946)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

