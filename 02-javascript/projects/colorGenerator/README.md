# Color Generator

A simple and interactive color palette generator built as part of the Scrimba Fullstack Path. This project allows users to choose a base color and generate a variety of color schemes using **The Color API**.

## Features

* Choose any base color using a color picker
* Select from multiple color scheme modes (e.g., monochrome, analogic, triad)
* Automatically fetches a 6‑color scheme from The Color API
* Displays colors as visual blocks
* Shows hex values for each color
* Click a color to copy its hex code to clipboard
* Default color scheme loads on page startup

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **The Color API** for generating color palettes

## How It Works

1. User selects a color using the `<input type="color">` picker.
2. User selects a color scheme mode from a dropdown.
3. Clicking the **Get colour scheme** button fetches a color palette from the API.
4. The page updates by rendering six color boxes and their hex codes.
5. Clicking a color box copies its hex value to the clipboard.

## API Endpoint Used

```
https://www.thecolorapi.com/scheme?hex={hex}&mode={mode}&count=6
```
