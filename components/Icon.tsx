const paths: Record<string, React.ReactNode> = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  whatsapp: <><path d="M3 21l1.7-5A9 9 0 1 1 8 19.3z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  shield: <><path d="M12 3l8 3v6c0 4.500-3.300 8-8 9-4.700-1-8-4.500-8-9V6z" /><path d="M8.500 12l2.500 2.500 4.500-5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  bus: <><rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M7 20v-3M17 20v-3" /><circle cx="8" cy="14" r=".6" /><circle cx="16" cy="14" r=".6" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19V5" /></>,
  puzzle: <path d="M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v6h-6v-2a2 2 0 1 0-4 0v2H4v-6h2a2 2 0 1 0 0-4H4V6h6z" />,
  star: <path d="M12 3l2.700 5.600 6.100.8-4.500 4.200 1.100 6.100L12 16.800 6.600 19.700l1.100-6.100L3.200 9.400l6.100-.8z" />,
  check: <path d="M5 12.500l4.500 4.500L19 7.500" />,
  pound: <path d="M17 6.500A4 4 0 0 0 13 4c-2.500 0-4 1.800-4 4v4m-2 0h8M7 20h11M9 12c0 3-1 6-2 8" />,
  users: <><circle cx="9" cy="8" r="3.500" /><path d="M2.500 20a6.500 6.500 0 0 1 13 0" /><circle cx="17" cy="9" r="2.500" /><path d="M17 14a5 5 0 0 1 4.500 5" /></>,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14a4.500 4.500 0 0 0 8 0M9 9.500h.01M15 9.500h.01" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  calendar: <><rect x="3.500" y="5" width="17" height="16" rx="2" /><path d="M3.500 10h17M8 3v4M16 3v4" /></>,
  heart: <path d="M12 20s-8-4.700-8-10.500A4.500 4.500 0 0 1 12 7a4.500 4.500 0 0 1 8 2.500C20 15.300 12 20 12 20z" />,
};

export default function Icon({ name, className = 'icon' }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}
