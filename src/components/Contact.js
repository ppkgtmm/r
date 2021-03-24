import {
  EnvelopeSimple,
  FacebookLogo,
  GitBranch,
  LinkedinLogo,
} from "phosphor-react";
import React from "react";

export default function Contact({ urls }) {
  const iconClassName = "mx-2 w-8 h-8 icon";
  return !urls ? null : (
    <div className="flex justify-center mt-4 contact">
      <a href={urls.linkedin || "#"}>
        <LinkedinLogo className={iconClassName} />
      </a>
      <a href={urls.fb || "#"}>
        <FacebookLogo className={iconClassName} />
      </a>
      <a href={`mailto:${urls.email}` || "#"}>
        <EnvelopeSimple className={iconClassName} />
      </a>
      <a href={urls.gh || "#"}>
        <GitBranch className={iconClassName} />
      </a>
    </div>
  );
}
