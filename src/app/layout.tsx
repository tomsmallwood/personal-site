import { ThemeProvider } from '@/app/context/theme';
import '@cloudscape-design/global-styles/dark-mode-utils.css';
import '@cloudscape-design/global-styles/index.css';
import { Metadata } from 'next';
import Navbar from './components/navbar';
import { defaultMetadata } from './metadata';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={"class"}>
        <ThemeProvider>
          <Navbar />
          {children ? children : null}
        </ThemeProvider>
      </body>
    </html>
  )
}