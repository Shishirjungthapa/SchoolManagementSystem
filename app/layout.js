import './globals.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css'; 

export const metadata = {
  title: 'School Management System',
  description: 'Nepal Web Studio\'s School Management System revolutionizes education with cutting-edge technology, trusted by 1600+ global clients for over 22 years.',
  keywords: 'School Management System, Education Software, Secure Cloud Storage, College Software, School Management',
  author: 'Nepal Web Studio',
  icons: {
    icon: '/images/webstudionepal.png'
  }
};

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>School Management System</title>
      </head>
      <body>
        <header>
          <h1></h1>
        </header>
        <main>{children}</main>
        <footer>
          <p></p>
        </footer>
      </body>
    </html>
  );
}
