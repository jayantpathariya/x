import {
  Banknote,
  Bell,
  Bookmark,
  BriefcaseBusiness,
  CircleEllipsis,
  ClipboardList,
  House,
  Mail,
  Search,
  Settings,
  SquareSlash,
  User,
  Users,
  Zap,
} from "lucide-react";

export const links = [
  {
    href: "/",
    icon: House,
    label: "Home",
  },
  {
    href: "/explore",
    icon: Search,
    label: "Explore",
  },
  {
    href: "/notifications",
    icon: Bell,
    label: "Notifications",
  },
  {
    href: "/messages",
    icon: Mail,
    label: "Messages",
  },
  {
    href: "/profile",
    icon: User,
    label: "Profile",
  },
  {
    href: "/more",
    icon: CircleEllipsis,
    label: "More",
  },
];

export const mobileLinks = [
  {
    href: "/",
    icon: House,
  },
  {
    href: "/explore",
    icon: Search,
  },
  {
    href: "/",
    icon: SquareSlash,
  },
  {
    href: "/notifications",
    icon: Bell,
  },
  {
    href: "/messages",
    icon: Mail,
  },
  {
    href: "/",
    icon: Users,
  },
];

export const mobileSidebarLinks = [
  {
    href: "/profile",
    icon: User,
    label: "Profile",
  },
  {
    href: "/list",
    icon: ClipboardList,
    label: "Lists",
  },
  {
    href: "/bookmarks",
    icon: Bookmark,
    label: "Bookmarks",
  },
  {
    href: "/",
    icon: Zap,
    label: "Verified Orgs",
  },
  {
    href: "/",
    icon: Banknote,
    label: "Monetization",
  },
  {
    href: "/",
    icon: BriefcaseBusiness,
    label: "Jobs",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings and privacy",
  },
];
