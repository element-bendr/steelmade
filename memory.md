# Design Decisions

## Homepage Styling (Updated 5/1/2025)
- Added tri-color gradient to main heading (blue-red-white) for visual impact
- Matches the style pattern established in the About page
- Uses gradient pattern: `bg-gradient-to-r from-blue-500 via-red-500 to-white`

## About Page Styling (Updated 5/1/2025)
- Added tri-color gradient to main heading (blue-red-white) for striking visual impact
- Implemented consistent gradient branding for "Steelmade" text spans, ensuring brand colors stay visible in both light and dark modes.
- Changed bullet points in "Our Solutions" list to use brand gradient (from-red-500 to-red-700) for visual consistency.
- Removed dark mode overrides (`dark:bg-none dark:text-primary-foreground`) to maintain brand identity across themes.
- Used semantic Tailwind classes for improved maintainability:
  - `text-foreground` for primary text
  - `text-muted-foreground` for secondary text
  - `bg-muted` for section backgrounds
  - `bg-card` for card backgrounds
  - `border-border` for borders

## Color Scheme
### Brand Colors
- Main Headings: `bg-gradient-to-r from-blue-500 via-red-500 to-white`
- Secondary Gradient: `bg-gradient-to-r from-red-500 to-red-700`
- Text Treatment: Used with `text-transparent bg-clip-text` for gradient text effect

### Light Mode
- Primary Text: text-foreground (base color)
- Secondary Text: text-muted-foreground (muted color)
- Background: bg-background (white)
- Section Background: bg-muted (light gray)

### Dark Mode
- Maintained consistent brand gradient
- Leveraged semantic color variables for automatic dark mode adaptation
- Enhanced readability while preserving brand identity

## Component Architecture
### Team Component
- Updated to use semantic color classes
- Aligned with main About page styling

# Development Notes
- Used semantic variables from globals.css for consistent theming
- Preserved animations and transitions from original implementation
- Maintained responsive layout with Tailwind's grid system
