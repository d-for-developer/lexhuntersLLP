
import { useEffect, useState } from "react";
import "../styles/disclaimerModal.css";

const STORAGE_KEY = "lexhunters_disclaimer_accepted";

export default function DisclaimerModal() {
    const [visible, setVisible] = useState(() => {
        try {
            return sessionStorage.getItem(STORAGE_KEY) !== "true";
        } catch {
            return true;
        }
    });

    useEffect(() => {
        if (!visible) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                // The disclaimer cannot be dismissed without a decision.
                event.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [visible]);

    const handleAccept = () => {
        try {
            sessionStorage.setItem(STORAGE_KEY, "true");
        } catch {
            // The visitor can continue even if storage is unavailable.
        }

        setVisible(false);
    };



    const handleDecline = () => {
        window.location.replace("about:blank");
    };


    if (!visible) return null;

    return (
        <div className="disclaimer-overlay">
            <section
                className="disclaimer-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="disclaimer-title"
                aria-describedby="disclaimer-description"
            >
                <div className="disclaimer-emblem" aria-hidden="true">
                    ⚖
                </div>

                <p className="disclaimer-eyebrow">
                    LEXHUNTERS LLP
                </p>

                <h2 id="disclaimer-title">Legal Disclaimer</h2>

                <div className="disclaimer-divider" />


                <div
                    id="disclaimer-description"
                    className="disclaimer-content"
                >
                    <p>
                        The Bar Council of India does not permit advocates or
                        legal practitioners to solicit work, advertise, or
                        induce clients in any manner.
                    </p>

                    <p>
                        By accessing this website "https://www.lexhunters.com/", you confirm that you are
                        visiting solely to obtain general information about
                        LexHunters LLP and its legal practice. This website
                        is not intended to solicit, advertise, or induce any
                        person to engage the services of the firm or its members.
                    </p>

                    <p>
                        The content of this website is the intellectual
                        property of LexHunters LLP and is provided for the
                        dissemination of basic information about the firm
                        and its areas of practice.
                    </p>

                    <p>
                        Nothing on this website constitutes legal advice or
                        a legal opinion, nor does access to this website
                        create an advocate-client relationship. Visitors
                        should exercise their own judgment and seek
                        appropriate professional advice before acting on
                        any information provided here.
                    </p>

                    <p>
                        LexHunters LLP, its advocates, members, and associated
                        offices shall not be responsible for consequences
                        arising from reliance on this information, to the
                        extent permitted by applicable law.
                    </p>
                </div>


                <p className="disclaimer-question">
                    Do you wish to proceed to the website?
                </p>

                <div className="disclaimer-actions">
                    <button
                        type="button"
                        className="disclaimer-accept"
                        onClick={handleAccept}
                    >
                        Accept &amp; Continue
                    </button>

                    <button
                        type="button"
                        className="disclaimer-decline"
                        onClick={handleDecline}
                    >
                        Decline &amp; Exit
                    </button>
                </div>

                <p className="disclaimer-footer">
                    LEXHUNTERS LLP · ADVOCATES &amp; LEGAL CONSULTANTS
                </p>
            </section>
        </div>
    );
}
