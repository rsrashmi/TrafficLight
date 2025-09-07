# TrafficLight

React Traffic Light Simulation with TailwindCSS – automatic and manual light control, persistent state, and smooth UI.

# Features

1. Traffic Light Simulation

   - Three lights: Green, Yellow, and Red.
   - Lights change automatically based on their configured durations:
     - Green: 2 minutes
     - Red: 30 seconds
     - Yellow: 10 seconds
   - The lights cycle continuously in the order: Green → Red → Yellow → Green → ...

2. Manual Light Control

   - A button labeled "Change Light" allows users to manually switch to the next light immediately.
   - Works alongside automatic cycling without breaking the sequence.

3. Persistent State

   - The current light and elapsed time are saved in localStorage.
   - Refreshing the page does not reset the traffic light.
     - Example: If the light was Red with 10 seconds remaining, after refresh it continues the countdown correctly.

4. TailwindCSS Styling

   - Uses Tailwind utility classes for styling:
     - Lights are circles that change color when active.
     - The inactive lights are dimmed.
     - Smooth color transitions using transition-colors.
     - Responsive and centered layout.
     - Button with hover and shadow effects.

5. React Functional Component
   - Built entirely with React functional components and hooks:
     - useState for managing the current light.
     - useEffect for timers and auto-cycling.
   - Clean separation of logic and presentation.
