import menu from "@/const/menu";
import { NavLink } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const Menu = () => {
  return (
    <div className="flex flex-row gap-5">
      {menu.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b border-[cadetblue] transition-all duration-200"
              : ""
          }
          to={item.link}
          key={item.link}
        >
          <HoverCard>
            <HoverCardTrigger>
              <div className="text-2xl p-2">{item.title}</div>
            </HoverCardTrigger>
            <HoverCardContent>{item.overlayText}</HoverCardContent>
          </HoverCard>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
