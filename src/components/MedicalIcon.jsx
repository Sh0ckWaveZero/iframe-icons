const MedicalIcon = ({
  icon: Icon,
  label,
  tooltip,
  url,
  delay = 0,
  onHover,
}) => {
  return (
    <div
      className="entrance-animation medical-item-container"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        gap: label ? "6px" : "0",
        padding: label ? "0 10px" : "0",
        height: "32px",
      }}
      onMouseEnter={() => onHover(tooltip)}
      onMouseLeave={() => onHover("")}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="medical-icon-wrapper"
        style={{
          textDecoration: "none",
          color: "#007B88",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={22} strokeWidth={label ? 2.6 : 2.4} />
      </a>
      {label && (
        <span
          style={{
            fontSize: "11px",
            fontWeight: "800", // Thicker for better brand visibility
            color: "#007B88", // Consistent brand color
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            paddingRight: "4px",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default MedicalIcon;
