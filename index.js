module.exports = {
  components: {
    bRadioButton: { mods: {} },
    bInput: {
      mods: {
        size: {
          s: {
            placeholderStyle: "small",
            placeholderColor: "rgba(108,117,125,1)",
            horOffset: "7px",
            vertOffset: "14px",
            textHeight: "16px",
            height: "31px",
            textStyle: "small"
          },
          m: {
            placeholderStyle: "base",
            placeholderColor: "rgba(108,117,125,1)",
            horOffset: "10px",
            vertOffset: "14px",
            textHeight: "16px",
            height: "38px",
            textStyle: "base"
          },
          l: {
            placeholderStyle: "big",
            placeholderColor: "rgba(108,117,125,1)",
            horOffset: "12px",
            vertOffset: "14px",
            textHeight: "23px",
            height: "48px",
            textStyle: "big"
          }
        },
        focus: {
          boxShadow: "0px 0px 3px rgba(0,123,255,0.25)",
          border: "1px solid rgba(128,189,255,1)"
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40,167,69,1)" },
            focus: {
              boxShadow: "0px 0px 3px rgba(40,167,69,0.25)",
              border: "1px solid rgba(40,167,69,1)"
            },
            info: {
              textStyle: "small",
              color: "rgba(40,167,69,1)",
              offset: { top: "4px", left: "0px" }
            },
            icon: {
              name: "ok",
              width: "18px",
              height: "15.34959602355957px",
              color: "rgba(40,167,69,1)",
              offset: { top: "11px", right: "9px" }
            }
          },
          false: {
            style: { border: "1px solid rgba(220,53,69,1)" },
            focus: {
              boxShadow: "0px 0px 3px rgba(220,53,69,0.25)",
              border: "1px solid rgba(220,53,69,1)"
            },
            icon: {
              name: "close",
              width: "12px",
              height: "12px",
              color: "rgba(220,53,69,1)",
              offset: { top: "13px", right: "9px" }
            },
            info: {
              textStyle: "small",
              color: "rgba(220,53,69,1)",
              offset: { top: "4px", left: "0px" }
            }
          }
        },
        readonly: {
          color: "rgba(108,117,125,1)",
          backgroundColor: "rgba(233,236,239,1)",
          borderColor: "rgba(207,212,217,1)"
        },
        preIcon: {
          iconSize: "11px",
          offset: "13px",
          base: {
            backgroundColor: "rgba(233,236,239,1)",
            border: "1px solid rgba(207,212,217,1)"
          }
        },
        postIcon: {
          iconSize: "11px",
          offset: "13px",
          base: {
            backgroundColor: "rgba(233,236,239,1)",
            border: "1px solid rgba(207,212,217,1)"
          }
        }
      },
      block: {
        border: "1px solid rgba(207,212,217,1)",
        backgroundColor: "rgba(255,255,255,1)"
      }
    },
    bCheckbox: {
      mods: {
        focus: {
          checkbox: {
            backgroundColor: "rgba(255,255,255,1)",
            border: "1px solid rgba(128,189,255,1)",
            borderRadius: "4px"
          }
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40,167,69,1)" },
            focus: {
              checkbox: {
                backgroundColor: "rgba(255,255,255,1)",
                border: "1px solid rgba(40,167,69,1)",
                borderRadius: "4px"
              }
            },
            icon: {
              name: "check",
              width: "8px",
              height: "6.5px",
              color: "rgba(255,255,255,1)",
              offset: { top: "4.75px", right: "4px" }
            }
          },
          false: {
            style: { border: "1px solid rgba(220,53,69,1)" },
            focus: {
              checkbox: {
                backgroundColor: "rgba(255,255,255,1)",
                border: "1px solid rgba(220,53,69,1)",
                borderRadius: "4px"
              }
            },
            info: {
              textStyle: "small",
              color: "rgba(220,53,69,1)",
              offset: { top: "6px", left: "24px" }
            }
          }
        },
        disabled: {
          checkbox: {
            backgroundColor: "rgba(248,249,250,1)",
            border: "1px solid rgba(173,181,189,1)",
            borderRadius: "4px"
          },
          label: { color: "rgba(173,181,189,1)" }
        }
      },
      block: {
        checkbox: {
          backgroundColor: "rgba(255,255,255,1)",
          border: "1px solid rgba(173,181,189,1)",
          borderRadius: "4px"
        },
        label: { color: "rgba(33,37,41,1)", marginLeft: "8px" },
        textStyle: "base"
      },
      exterior: { switcher: {} }
    },
    bCalendar: { mods: {} },
    bButton: {
      mods: {
        active: { backgroundColor: "rgba(255,255,255,1)" },
        hover: { backgroundColor: "rgba(255,255,255,1)" },
        focus: { backgroundColor: "rgba(255,255,255,1)" },
        disabled: { backgroundColor: "rgba(255,255,255,1)" },
        preIcon: { iconSize: "12px", offset: "4px" },
        postIcon: { iconSize: "12px", offset: "4px" },
        size: {
          m: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "17px",
            height: "38px",
            textStyle: "base"
          },
          s: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "10px",
            height: "31px",
            textStyle: "small"
          },
          l: {
            horOffset: "11px",
            vertOffset: "8px",
            textHeight: "27px",
            height: "48px",
            textStyle: "big"
          }
        }
      },
      exterior: {
        dark: {
          mods: {
            active: { backgroundColor: "rgba(0,0,0,1)" },
            hover: { backgroundColor: "rgba(5,6,6,1)" },
            focus: { backgroundColor: "rgba(5,6,6,1)" },
            disabled: { backgroundColor: "rgba(137,141,144,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(52,58,64,1)",
          color: "rgba(255,255,255,1)"
        },
        light: {
          mods: {
            active: { backgroundColor: "rgba(244,246,247,1)" },
            hover: { backgroundColor: "rgba(245,247,248,1)" },
            focus: { backgroundColor: "rgba(245,247,248,1)" },
            disabled: { backgroundColor: "rgba(251,252,252,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(248,249,250,1)",
          color: "rgba(33,37,41,1)"
        },
        info: {
          mods: {
            active: { backgroundColor: "rgba(0,110,145,1)" },
            hover: { backgroundColor: "rgba(2,131,161,1)" },
            focus: { backgroundColor: "rgba(2,131,161,1)" },
            disabled: { backgroundColor: "rgba(120,201,214,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(23,162,184,1)",
          color: "rgba(255,255,255,1)"
        },
        warning: {
          mods: {
            active: { backgroundColor: "rgba(255,159,0,1)" },
            hover: { backgroundColor: "rgba(255,172,1,1)" },
            focus: { backgroundColor: "rgba(255,172,1,1)" },
            disabled: { backgroundColor: "rgba(255,219,111,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(255,193,7,1)",
          color: "rgba(33,37,41,1)"
        },
        danger: {
          mods: {
            active: { backgroundColor: "rgba(201,0,0,1)" },
            hover: { backgroundColor: "rgba(208,5,7,1)" },
            focus: { backgroundColor: "rgba(208,5,7,1)" },
            disabled: { backgroundColor: "rgba(235,138,147,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(220,53,69,1)",
          color: "rgba(255,255,255,1)"
        },
        success: {
          mods: {
            active: { backgroundColor: "rgba(0,118,0,1)" },
            hover: { backgroundColor: "rgba(4,137,7,1)" },
            focus: { backgroundColor: "rgba(4,137,7,1)" },
            disabled: { backgroundColor: "rgba(130,204,147,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(40,167,69,1)",
          color: "rgba(255,255,255,1)"
        },
        secondary: {
          mods: {
            active: { backgroundColor: "rgba(26,40,53,1)" },
            hover: { backgroundColor: "rgba(59,71,82,1)" },
            focus: { backgroundColor: "rgba(59,71,82,1)" },
            disabled: { backgroundColor: "rgba(170,175,180,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(108,117,125,1)",
          color: "rgba(255,255,255,1)"
        },
        primary: {
          mods: {
            active: { backgroundColor: "rgba(0,50,255,1)" },
            hover: { backgroundColor: "rgba(0,79,255,1)" },
            focus: { backgroundColor: "rgba(0,79,255,1)" },
            disabled: { backgroundColor: "rgba(107,178,255,1)" },
            preIcon: { iconSize: "12px", offset: "4px" },
            postIcon: { iconSize: "12px", offset: "4px" }
          },
          backgroundColor: "rgba(0,123,255,1)",
          color: "rgba(255,255,255,1)"
        }
      }
    }
  },
  colors: {
    yellow: ["rgba(255,193,7,1)"],
    blue: ["rgba(0,123,255,1)", "rgba(23,162,184,1)", "rgba(128,189,255,1)"],
    red: ["rgba(220,53,69,1)"],
    green: ["rgba(40,167,69,1)"],
    white: ["rgba(255,255,255,1)"],
    grey: [
      "rgba(33,37,41,1)",
      "rgba(52,58,64,1)",
      "rgba(108,117,125,1)",
      "rgba(248,249,250,1)",
      "rgba(207,212,217,1)",
      "rgba(233,236,239,1)",
      "rgba(173,181,189,1)"
    ]
  },
  text: {
    heading6: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px"
    },
    heading5: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px"
    },
    heading4: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28px"
    },
    heading3: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "33px"
    },
    heading2: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "38px"
    },
    heading1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "56px"
    },
    base: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "16px"
    },
    small: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px"
    },
    big: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px"
    },
    link: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      textDecoration: "underline",
      lineHeight: "19px"
    }
  },
  rounding: { big: "10px", small: "4px" }
};
