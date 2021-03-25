import { get } from "lodash";
import {
  EnvelopeSimple,
  FacebookLogo,
  GitBranch,
  LinkedinLogo,
} from "phosphor-react";
import React from "react";

export default function Contact({ urls }) {
  const iconClassName = "mx-2 w-8 h-8 icon";
  const defaultUrl = "#";
  return !urls ? null : (
    <div className="flex justify-center mt-4 contact">
      <a href={get(urls, "linkedin", defaultUrl)}>
        <LinkedinLogo className={iconClassName} />
      </a>

      <a href={get(urls, "fb", defaultUrl)}>
        <FacebookLogo className={iconClassName} />
      </a>

      <a href={`mailto:${get(urls, "email", defaultUrl)}`}>
        <EnvelopeSimple className={iconClassName} />
      </a>

      <a href={get(urls, "gh", defaultUrl)}>
        <GitBranch className={iconClassName} />
      </a>
    </div>
  );
}
