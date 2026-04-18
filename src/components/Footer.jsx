/**
 * Footer.jsx
 * Minimal footer bar — displays name and dynamic copyright year.
 * Sits outside <main>, rendered directly inside ThemeProvider in App.jsx.
 * new Date().getFullYear() ensures the year always stays current without manual updates.
 */
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__name">Parsa Samandi</p>
                {/* Year is computed at runtime — no manual update needed */}
                <p className="footer__copy">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
