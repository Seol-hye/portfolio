
import { profile } from '../data/profile';

export default function Footer() {
    return (
        <footer className="site-footer">
            <small>
                © {new Date().getFullYear()} {profile.name}.
                All rights reserved.
            </small>
        </footer>
    );
}
