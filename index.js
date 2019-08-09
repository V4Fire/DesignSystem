module.exports = {
  components: {
    bRadioButton: { mods: {} },
    bInput: {
      mods: {
        size: {
          s: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "small",
            horOffset: 7,
            vertOffset: 14,
            textHeight: 16,
            height: 31,
            textStyle: "small"
          },
          m: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "base",
            horOffset: 10,
            vertOffset: 14,
            textHeight: 16,
            height: 38,
            textStyle: "base"
          },
          l: {
            placeholderColor: "rgba(108, 117, 125, 1)",
            placeholderStyle: "big",
            horOffset: 12,
            vertOffset: 14,
            textHeight: 23,
            height: 48,
            textStyle: "big"
          }
        },
        focus: {
          shadowColor: "rgba(0, 123, 255, 0.25)",
          shadowOffset: { x: 0, y: 0 },
          shadowBlur: 3.200000047683716,
          borderWidth: 1,
          borderColor: "rgba(128, 189, 255, 1)"
        },
        valid: {
          valid: {
            borderWidth: 1,
            borderColor: "rgba(40, 167, 69, 1)",
            focus: {
              shadowColor: "rgba(40, 167, 69, 0.25)",
              shadowOffset: { x: 0, y: 0 },
              shadowBlur: 3.200000047683716,
              borderWidth: 1,
              borderColor: "rgba(40, 167, 69, 1)"
            },
            info: {
              textStyle: "small",
              color: "rgba(40, 167, 69, 1)",
              offset: { top: 4, left: 0 }
            },
            icon: {
              name: "ok",
              offset: { top: 11, right: 9 },
              width: 18,
              height: 15.34959602355957,
              color: "rgba(40, 167, 69, 1)"
            }
          },
          invalid: {
            borderWidth: 1,
            borderColor: "rgba(220, 53, 69, 1)",
            focus: {
              shadowColor: "rgba(220, 53, 69, 0.25)",
              shadowOffset: { x: 0, y: 0 },
              shadowBlur: 3.200000047683716,
              borderWidth: 1,
              borderColor: "rgba(220, 53, 69, 1)"
            },
            icon: {
              name: "close",
              offset: { top: 13, right: 9 },
              width: 12,
              height: 12,
              color: "rgba(220, 53, 69, 1)"
            },
            info: {
              textStyle: "small",
              color: "rgba(220, 53, 69, 1)",
              offset: { top: 4, left: 0 }
            }
          }
        },
        readonly: {
          textColor: "rgba(108, 117, 125, 1)",
          baseBgColor: "rgba(233, 236, 239, 1)",
          baseBorderColor: "rgba(207, 212, 217, 1)"
        },
        preIcon: {
          iconSize: 11,
          offset: 13,
          baseBgColor: "rgba(233, 236, 239, 1)",
          baseBorderWidth: 1,
          baseBorderColor: "rgba(207, 212, 217, 1)"
        },
        postIcon: {
          iconSize: 11,
          offset: 13,
          baseBgColor: "rgba(233, 236, 239, 1)",
          baseBorderWidth: 1,
          baseBorderColor: "rgba(207, 212, 217, 1)"
        }
      }
    },
    bCheckbox: { mods: {} },
    bCalendar: { mods: {} },
    bButton: {
      mods: {
        active: {
          blendMode: "color-burn",
          backgroundColor: "rgba(164, 164, 164, 1)"
        },
        hover: {
          blendMode: "color-burn",
          opacity: 0.41999998688697815,
          backgroundColor: "rgba(186, 186, 186, 0.41999998688697815)"
        },
        disabled: {
          blendMode: "normal",
          opacity: 0.41999998688697815,
          backgroundColor: "rgba(255, 255, 255, 0.41999998688697815)"
        },
        preIcon: { iconSize: 12, offset: 4 },
        postIcon: { iconSize: 12, offset: 4 },
        size: {
          m: {
            horOffset: 11,
            vertOffset: 8,
            textHeight: 17,
            height: 38,
            textStyle: "base"
          },
          s: {
            horOffset: 11,
            vertOffset: 8,
            textHeight: 10,
            height: 31,
            textStyle: "small"
          },
          l: {
            horOffset: 11,
            vertOffset: 8,
            textHeight: 27,
            height: 48,
            textStyle: "big"
          }
        }
      },
      exterior: {
        dark: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(52, 58, 64, 1)"
        },
        light: {
          color: "rgba(33, 37, 41, 1)",
          backgroundColor: "rgba(248, 249, 250, 1)"
        },
        info: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(23, 162, 184, 1)"
        },
        warning: {
          color: "rgba(33, 37, 41, 1)",
          backgroundColor: "rgba(255, 193, 7, 1)"
        },
        danger: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(220, 53, 69, 1)"
        },
        success: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(40, 167, 69, 1)"
        },
        secondary: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(108, 117, 125, 1)"
        },
        primary: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(0, 123, 255, 1)"
        }
      }
    }
  },
  colors: {
    yellow: ["rgba(255, 193, 7, 1)"],
    blue: [
      "rgba(0, 123, 255, 1)",
      "rgba(23, 162, 184, 1)",
      "rgba(128, 189, 255, 1)"
    ],
    red: ["rgba(220, 53, 69, 1)"],
    green: ["rgba(40, 167, 69, 1)"],
    white: ["rgba(255, 255, 255, 1)"],
    grey: [
      "rgba(33, 37, 41, 1)",
      "rgba(52, 58, 64, 1)",
      "rgba(108, 117, 125, 1)",
      "rgba(248, 249, 250, 1)",
      "rgba(233, 236, 239, 1)"
    ]
  },
  text: {
    heading: [
      null,
      {
        type: "TEXT",
        name: "Heading/1",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 40,
        letterSpacing: 0,
        lineHeight: "46.875px",
        color: "rgba(33, 37, 41, 1)"
      },
      {
        type: "TEXT",
        name: "Heading/2",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 32,
        letterSpacing: 0,
        lineHeight: "37.5px",
        color: "rgba(33, 37, 41, 1)"
      },
      {
        type: "TEXT",
        name: "Heading/3",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 28,
        letterSpacing: 0,
        lineHeight: "32.8125px",
        color: "rgba(33, 37, 41, 1)"
      },
      {
        type: "TEXT",
        name: "Heading/4",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 24,
        letterSpacing: 0,
        lineHeight: "28.125px",
        color: "rgba(33, 37, 41, 1)"
      },
      {
        type: "TEXT",
        name: "Heading/5",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 20,
        letterSpacing: 0,
        lineHeight: "23.4375px",
        color: "rgba(33, 37, 41, 1)"
      },
      {
        type: "TEXT",
        name: "Heading/6",
        fontFamily: "Roboto",
        fontWeight: 400,
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: "18.75px",
        color: "rgba(33, 37, 41, 1)"
      }
    ],
    base: {
      type: "TEXT",
      name: "Base",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: "16px",
      color: "rgba(33, 37, 41, 1)"
    },
    small: {
      type: "TEXT",
      name: "Small",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: "16.40625px",
      color: "rgba(33, 37, 41, 1)"
    },
    big: {
      type: "TEXT",
      name: "Big",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: "23.4375px",
      color: "rgba(33, 37, 41, 1)"
    },
    link: {
      type: "TEXT",
      name: "Link",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      letterSpacing: 0,
      textDecoration: "underline",
      lineHeight: "18.75px",
      color: "rgba(0, 123, 255, 1)"
    }
  },
  rounding: { big: 10, small: 4 }
};
