export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <p className="footer__name">Parsa Samandi</p>
                <p className="footer__copy">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
