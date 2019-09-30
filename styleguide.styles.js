const colors = {
  danger: "#d9534f",
  white: "#ffffff",
  black: "#000000",
  black60: "#666666",
  primary: "#3e1bdb",
  grey: "#7a898f",
  sidebarGrey: "#fafafa",
  lightGrey: "#aec0c6",
  paleGrey: "#ebf1f3",
  secondary: "#ad29b6",
};

const theme = {
  color: {
    baseBackground: colors.white,
    border: colors.paleGrey,
    codeBackground: colors.paleGrey,
    error: colors.danger,
    light: colors.grey,
    lightest: colors.lightGrey,
    name: colors.primary,
    type: colors.secondary,
    base: colors.black60,
    linkHover: colors.primary,
    sidebarBackground: colors.sidebarGrey,
  },
  fontFamily: {
    base: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    monospace: '"IBM Plex Mono",Consolas, Menlo, monospace',
  },
  fontSize: {
    base: 16,
    text: 16,
    h1: 32,
    h2: 24,
    h3: 18,
  },
  maxWidth: 780,
  sidebarWidth: 280,
};

const styles = {
  Heading: {
    heading1: {
      display: "block",
      position: "relative",
      marginBottom: "1.125rem",
      color: `${colors.black}`,
    },
    heading2: {
      marginBottom: "0.75rem",
      color: colors.black,
    },
    heading3: {
      borderBottom: `thin solid ${colors.lightGrey}`,
      paddingBottom: "0.375rem",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      fontWeight: "700",
    },
  },
  ReactComponent: {
    tabs: {
      backgroundColor: colors.paleGrey,
      padding: "0 1.5rem",
      overflow: "auto",
    },
    tabButtons: {
      marginBottom: 0,
    },
  },
  SectionHeading: {
    sectionName: {
      display: "block",
      paddingTop: `1.5rem !important`,
      textDecoration: "none !important",
      "&:hover": {
        opacity: 0.75,
      },
    },
  },
  StyleGuide: {
    content: {
      paddingTop: "3.75rem",
    },
    "@global body": {
      fontFamily: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: "normal",
    },
    sidebar: {
      border: 0,
      "& li > a": {
        color: `${colors.black} !important`,
        cursor: "pointer",
      },
    },
  },
  TabButton: {
    button: {
      width: "100%",
    },
    isActive: {
      border: 0,
    },
  },
  Table: {
    table: {
      marginTop: "0.75rem",
      marginBottom: "0.75rem",
      minWidth: "600px",
    },
    cellHeading: {
      borderBottom: `thin solid ${colors.lightGrey}`,
    },
    cell: {
      paddingBottom: 0,
      "& p": {
        marginBottom: "0.1875rem !important",
      },
      '& div[class*="para"]': {
        marginBottom: "0.1875rem !important",
      },
    },
  },
};

module.exports = {
  styles: styles,
  theme: theme,
};
