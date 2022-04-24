import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../colors";
import { SidebarContainer, AppLogoContainer, MenuItem } from "./styles";

function Sidebar({ config, current }) {
  let navigate = useNavigate();
  return <SidebarContainer>
    <AppLogoContainer>
      <svg width="35" height="35" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="15" fill={colors.background} />
        <rect width="18" height="18" transform="translate(6 6)" fill={colors.background} />
        <path d="M9.37493 9.53571C8.22105 9.53571 7.28564 10.4711 7.28564 11.625V18.375C7.28564 19.5289 8.22105 20.4643 9.37493 20.4643H15.4821C16.6359 20.4643 17.5714 19.5289 17.5714 18.375V11.625C17.5714 10.4711 16.6359 9.53571 15.4821 9.53571H9.37493Z" fill={colors.primary} />
        <path d="M20.8648 19.2706L18.5356 16.9887V13.0707L20.8577 10.7382C21.3634 10.2303 22.2308 10.5884 22.2308 11.3052V18.6966C22.2308 19.4085 21.3734 19.7688 20.8648 19.2706Z" fill={colors.primary} />
      </svg>
    </AppLogoContainer>
    <MenuItem active={current === "list"} onClick={() => current !== "list" && navigate("/app")}>
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
        <path d="M3.98366 0.0551453H0V4.0388H3.98366V0.0551453Z" fill={current === "list" ? colors.primary : colors.background} />
        <path d="M20 1.12155H5.65063V2.88253H20V1.12155Z" fill={current === "list" ? colors.primary : colors.background} />
        <path d="M3.98366 8.00613H0V11.9898H3.98366V8.00613Z" fill={current === "list" ? colors.primary : colors.background} />
        <path d="M20 9.07251H5.65063V10.8335H20V9.07251Z" fill={current === "list" ? colors.primary : colors.background} />
        <path d="M3.98366 15.9612H0V19.9448H3.98366V15.9612Z" fill={current === "list" ? colors.primary : colors.background} />
        <path d="M20 17.0235H5.65063V18.7844H20V17.0235Z" fill={current === "list" ? colors.primary : colors.background} />
      </svg>
    </MenuItem>
    <MenuItem active={current === "settings"} onClick={() => current !== "settings" && navigate("/app/settings")}>
      <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
        <path d="M24.3382 9.77267H20.8053C20.667 9.35254 20.4979 8.94627 20.3002 8.55681L22.7994 6.05755C23.0578 5.79916 23.0578 5.38029 22.7994 5.12196L19.8779 2.20045C19.6196 1.94206 19.2007 1.94206 18.9423 2.20045L16.4431 4.69971C16.0536 4.50203 15.6474 4.33293 15.2273 4.1946V0.661727C15.2273 0.296314 14.9312 0.00012207 14.5657 0.00012207H10.4342C10.0688 0.00012207 9.77255 0.296314 9.77255 0.661673V4.1946C9.35242 4.33287 8.94621 4.50203 8.55669 4.69971L6.05749 2.20051C5.7991 1.94212 5.38023 1.94212 5.12189 2.20051L2.20039 5.12201C1.942 5.38035 1.942 5.79927 2.20039 6.05761L4.69959 8.55681C4.50191 8.94627 4.33275 9.35254 4.19448 9.77267H0.661605C0.296192 9.77267 0 10.0689 0 10.4343V14.5659C0 14.9312 0.296192 15.2274 0.661605 15.2274H4.19453C4.33286 15.6475 4.50196 16.0537 4.69964 16.4433L2.20044 18.9425C1.94205 19.2008 1.94205 19.6197 2.20044 19.8781L5.12195 22.7996C5.38034 23.0579 5.79921 23.0579 6.05754 22.7996L8.55674 20.3004C8.94621 20.498 9.35242 20.6672 9.7726 20.8055V24.3384C9.7726 24.7038 10.0688 24.9999 10.4342 24.9999H14.5658C14.9312 24.9999 15.2274 24.7038 15.2274 24.3384V20.8055C15.6475 20.6672 16.0537 20.498 16.4432 20.3004L18.9425 22.7996C19.2008 23.0579 19.6197 23.0579 19.8781 22.7996L22.7996 19.8781C23.0579 19.6197 23.0579 19.2008 22.7996 18.9425L20.3004 16.4433C20.498 16.0538 20.6671 15.6476 20.8055 15.2275H24.3384C24.7038 15.2275 25 14.9313 25 14.5659V10.4343C24.9998 10.0689 24.7036 9.77267 24.3382 9.77267ZM12.4999 15.7938C10.6808 15.7938 9.20613 14.3191 9.20613 12.5C9.20613 10.6809 10.6808 9.20619 12.4999 9.20619C14.319 9.20619 15.7937 10.6809 15.7937 12.5C15.7937 14.3191 14.319 15.7938 12.4999 15.7938Z"
          fill={current === "settings" ? colors.primary : colors.background} />
      </svg>
    </MenuItem>
  </SidebarContainer>;
}
export default Sidebar;