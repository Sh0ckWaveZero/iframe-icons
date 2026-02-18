import React, { useState, Fragment, useRef, useEffect } from "react";
import {
  Stethoscope,
  Pill,
  Syringe,
  HeartPulse,
  Activity,
  Thermometer,
  Microscope,
  Baby,
  Brain,
  Dna,
  Droplets,
  BriefcaseMedical,
  Eye,
  ClipboardList,
  Bandage,
  FlaskConical,
  Heart,
  ShieldPlus,
  UserRound,
  Ambulance,
  Hospital,
  Waves,
  Zap,
  Skull,
  Biohazard,
  Salad,
  Footprints,
  Ear,
  HandMetal,
  Search,
  Bell,
  Settings,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import MedicalIcon from "./MedicalIcon";

const Separator = ({ delay = 0 }) => (
  <div
    className="entrance-animation"
    style={{
      width: "1px",
      height: "22px",
      backgroundColor: "#E5E7EB",
      margin: "0 3.5px",
      flexShrink: 0,
      animationDelay: `${delay}ms`,
      opacity: 0,
    }}
  />
);

const NavButton = ({ direction, onClick, visible }) => (
  <button
    onClick={onClick}
    style={{
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "rgba(0, 123, 136, 0.1)",
      color: "#007B88",
      cursor: "pointer",
      display: visible ? "flex" : "none",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.2s ease",
      zIndex: 10,
      flexShrink: 0,
      margin: "0 4px",
      userSelect: "none",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(0, 123, 136, 0.2)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(0, 123, 136, 0.1)")
    }
  >
    {direction === "left" ? (
      <ChevronLeft size={16} />
    ) : (
      <ChevronRight size={16} />
    )}
  </button>
);

const iconsList = [
  {
    icon: Stethoscope,
    label: "Consult",
    tooltip: "Stethoscope Consult",
    url: "https://google.com/search?q=stethoscope",
  },
  {
    icon: Pill,
    tooltip: "Medication Order",
    url: "https://google.com/search?q=medication",
  },
  {
    icon: Syringe,
    tooltip: "Vaccination Record",
    url: "https://google.com/search?q=vaccine",
  },
  {
    icon: HeartPulse,
    label: "Cardio",
    tooltip: "Cardiology Report",
    url: "https://google.com/search?q=cardiology",
  },
  {
    icon: Activity,
    tooltip: "Vital Signs",
    url: "https://google.com/search?q=vitals",
  },
  {
    icon: Thermometer,
    tooltip: "Temperature",
    url: "https://google.com/search?q=thermometer",
  },
  {
    icon: Microscope,
    label: "Lab",
    tooltip: "Lab Results",
    url: "https://google.com/search?q=microscope",
  },
  {
    icon: Baby,
    tooltip: "Pediatrics",
    url: "https://google.com/search?q=pediatrics",
  },
  {
    icon: Brain,
    tooltip: "Neurology",
    url: "https://google.com/search?q=neurology",
  },
  {
    icon: Dna,
    tooltip: "Genetics",
    url: "https://google.com/search?q=genetics",
  },
  {
    icon: Droplets,
    tooltip: "Blood Test",
    url: "https://google.com/search?q=blood+test",
  },
  {
    icon: BriefcaseMedical,
    tooltip: "Medical Briefcase",
    url: "https://google.com/search?q=medical+briefcase",
  },
  {
    icon: Eye,
    tooltip: "Ophthalmology",
    url: "https://google.com/search?q=ophthalmology",
  },
  {
    icon: ClipboardList,
    tooltip: "Medical Records",
    url: "https://google.com/search?q=medical+records",
  },
  {
    icon: Bandage,
    tooltip: "Wound Care",
    url: "https://google.com/search?q=bandage",
  },
  {
    icon: FlaskConical,
    tooltip: "Chemical Analysis",
    url: "https://google.com/search?q=flask",
  },
  {
    icon: Heart,
    tooltip: "Healthy Heart",
    url: "https://google.com/search?q=heart",
  },
  {
    icon: ShieldPlus,
    tooltip: "Medical Protection",
    url: "https://google.com/search?q=medical+shield",
  },
  {
    icon: UserRound,
    tooltip: "Patient Profile",
    url: "https://google.com/search?q=patient",
  },
  {
    icon: Ambulance,
    tooltip: "Emergency Service",
    url: "https://google.com/search?q=ambulance",
  },
  {
    icon: Hospital,
    tooltip: "Facility Info",
    url: "https://google.com/search?q=hospital",
  },
  {
    icon: Waves,
    tooltip: "Physical Therapy",
    url: "https://google.com/search?q=therapy",
  },
  {
    icon: Zap,
    label: "Urgent",
    tooltip: "Emergency Response",
    url: "https://google.com/search?q=emergency",
  },
  {
    icon: Skull,
    tooltip: "Forensic Records",
    url: "https://google.com/search?q=forensic",
  },
  {
    icon: Biohazard,
    tooltip: "Infection Control",
    url: "https://google.com/search?q=infection",
  },
  {
    icon: Salad,
    tooltip: "Nutrition Diet",
    url: "https://google.com/search?q=nutrition",
  },
  {
    icon: Footprints,
    tooltip: "Podiatry",
    url: "https://google.com/search?q=podiatry",
  },
  {
    icon: Ear,
    tooltip: "Audiology",
    url: "https://google.com/search?q=audiology",
  },
  {
    icon: HandMetal,
    tooltip: "Skeletal Structure",
    url: "https://google.com/search?q=hand+anatomy",
  },
  {
    icon: Search,
    tooltip: "Find Doctor",
    url: "https://google.com/search?q=find+doctor",
  },
  {
    icon: Bell,
    tooltip: "Alert Notification",
    url: "https://google.com/search?q=medical+alert",
  },
  {
    icon: Settings,
    tooltip: "App Settings",
    url: "https://google.com/search?q=medical+app+settings",
  },
  {
    icon: Calendar,
    tooltip: "Appointment",
    url: "https://google.com/search?q=appointment",
  },
];

const IconBar = () => {
  const [activeTooltip, setActiveTooltip] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const scrollRef = useRef(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  const scrollBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        height: "35px",
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        width: "fit-content",
        padding: "0 6px",
        boxSizing: "border-box",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        overflow: "hidden",
        userSelect: isMouseDown ? "none" : "auto",
      }}
    >
      <NavButton
        direction="left"
        visible={canScrollLeft}
        onClick={() => scrollBy(-200)}
      />

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="scroll-container hide-scrollbar"
        style={{
          cursor: isMouseDown ? "grabbing" : "grab",
          maskImage: `linear-gradient(to right, 
            ${canScrollLeft ? "transparent" : "black"} 0%, 
            black 20px, 
            black calc(100% - 20px), 
            ${canScrollRight ? "transparent" : "black"} 100%)`,
          WebkitMaskImage: `linear-gradient(to right, 
            ${canScrollLeft ? "transparent" : "black"} 0%, 
            black 20px, 
            black calc(100% - 20px), 
            ${canScrollRight ? "transparent" : "black"} 100%)`,
        }}
      >
        {iconsList.map((item, index) => (
          <Fragment key={index}>
            <MedicalIcon
              icon={item.icon}
              label={item.label}
              tooltip={item.tooltip}
              url={item.url}
              delay={index * 20}
              onHover={setActiveTooltip}
            />
            {index < iconsList.length - 1 && (
              <Separator delay={index * 20 + 10} />
            )}
          </Fragment>
        ))}
      </div>

      <NavButton
        direction="right"
        visible={canScrollRight}
        onClick={() => scrollBy(200)}
      />

      <div
        className="entrance-animation"
        style={{
          marginLeft: "8px",
          minWidth: "135px",
          flexShrink: 0,
          height: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: activeTooltip
            ? "rgba(0, 123, 136, 0.12)"
            : "rgba(0, 0, 0, 0.04)",
          padding: "0 10px",
          borderRadius: "6px",
          border: activeTooltip
            ? "1px solid rgba(0, 123, 136, 0.25)"
            : "1px solid transparent",
          transition: "all 0.2s ease",
          animationDelay: "300ms",
          opacity: 0,
        }}
      >
        <span
          style={{
            fontSize: "10px",
            fontWeight: "800",
            color: activeTooltip ? "#007B88" : "#6B7280",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {activeTooltip ? (
            activeTooltip
          ) : (
            <>
              <span style={{ color: "#007B88", letterSpacing: "0.12em" }}>
                MED-LINK
              </span>
              <span style={{ opacity: 0.3, fontWeight: "400" }}>v1.9.0</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default IconBar;
