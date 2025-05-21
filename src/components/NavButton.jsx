import React from "react";

function NavButton({ to, label, Icon }) {
  return (
    <button type="button" title={label}>
      <span>
        <Link to={to}>{label}</Link>
      </span>
      <span className="material-symbols-outlined" aria-hidden="true">
        <Icon />
      </span>
      <svg viewBox="0 0 300 300" aria-hidden="true">
        <g>
          <text fill="currentColor">
            <textPath href="#circlePath">{label}</textPath>
          </text>
          <text fill="currentColor">
            <textPath href="#circlePath" startOffset="50%">
              {label}
            </textPath>
          </text>
        </g>
      </svg>
    </button>
  );
}

export default NavButton;
