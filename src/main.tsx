import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import businessIcon from '../src/assets/icon-business.svg'
import animationIcon from '../src/assets/icon-animation.svg'
import cryptoIcon from '../src/assets/icon-crypto.svg'
import designIcon from '../src/assets/icon-design.svg'
import photographyIcon from '../src/assets/icon-photography.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

export const data = [
    // {
    //   paragraph: "Check out our most popular courses!",
    // },
    {
      title: "Animation",
      paragraph: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      srcIcon: animationIcon,
    },
    {
      title: "Design",
      paragraph: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      srcIcon: designIcon,
    },
    {
      title: "Photography",
      paragraph: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
      srcIcon: photographyIcon,
    },
    {
      title: "Crypto",
      paragraph: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
      srcIcon: cryptoIcon,
    },
    {
      title: "Business",
      paragraph: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
      srcIcon: businessIcon,
    },
]

