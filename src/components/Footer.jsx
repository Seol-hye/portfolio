
import { profile } from '../data/profile';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div>
                <strong>{profile.name}</strong>

                <p>
                    배우고 성장하며,
                    사용자에게 더 나은 경험을 제공하는 개발자가 되겠습니다.
                </p>
            </div>

            <small>
                © {new Date().getFullYear()} {profile.name}.
                All rights reserved.
            </small>
        </footer>
    );
}
