module.exports = {
  components: {
    bRadioButton: { mods: {} },
    bInput: {
      mods: {
        size: {
          s: {
            placeholderStyle: "Small",
            placeholderColor: "rgba(108,117,125,1)",
            offset: { left: "14px", right: "14px", top: "7px", bottom: "6px" },
            textHeight: "16px",
            height: "29px",
            textStyle: "Small"
          },
          m: {
            placeholderStyle: "Base",
            placeholderColor: "rgba(108,117,125,1)",
            offset: { left: "13px", right: "13px", top: "9px", bottom: "11px" },
            textHeight: "16px",
            height: "36px",
            textStyle: "Base"
          },
          l: {
            placeholderStyle: "Big",
            placeholderColor: "rgba(108,117,125,1)",
            offset: {
              left: "14px",
              right: "14px",
              top: "12px",
              bottom: "11px"
            },
            textHeight: "23px",
            height: "46px",
            textStyle: "Big"
          }
        },
        focused: {
          true: {
            boxShadow: "0px 0px 3px rgba(0,123,255,0.25)",
            border: "1px solid rgba(128,189,255,1)"
          }
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40,167,69,1)" },
            info: {
              textStyle: "Small",
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
            icon: {
              name: "close",
              width: "12px",
              height: "12px",
              color: "rgba(220,53,69,1)",
              offset: { top: "13px", right: "9px" }
            },
            info: {
              textStyle: "Small",
              color: "rgba(220,53,69,1)",
              offset: { top: "4px", left: "0px" }
            }
          }
        },
        readonly: {
          true: {
            color: "rgba(108,117,125,1)",
            backgroundColor: "rgba(233,236,239,1)",
            borderColor: "rgba(207,212,217,1)"
          }
        },
        preIcon: {
          true: {
            iconSize: "11px",
            offset: "13px",
            base: {
              backgroundColor: "rgba(233,236,239,1)",
              border: "1px solid rgba(207,212,217,1)"
            }
          }
        },
        postIcon: {
          true: {
            iconSize: "11px",
            offset: "13px",
            base: {
              backgroundColor: "rgba(233,236,239,1)",
              border: "1px solid rgba(207,212,217,1)"
            }
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
        focused: {
          checkbox: {
            backgroundColor: "rgba(255,255,255,1)",
            border: "1px solid rgba(128,189,255,1)",
            borderRadius: "4px",
            boxShadow: "0px 0px rgba(0,123,255,0.25)"
          }
        },
        valid: {
          true: {
            style: { border: "1px solid rgba(40,167,69,1)" },
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
            info: {
              textStyle: "Small",
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
        textStyle: "Base"
      },
      exterior: { switcher: {} }
    },
    bCalendar: { mods: {} },
    bButton: {
      mods: {
        active: { true: { backgroundColor: "rgba(255,255,255,1)" } },
        hover: { true: { backgroundColor: "rgba(255,255,255,1)" } },
        focused: { true: { backgroundColor: "rgba(255,255,255,1)" } },
        disabled: { true: { backgroundColor: "rgba(255,255,255,1)" } },
        preIcon: { true: { iconSize: "12px", offset: "4px" } },
        postIcon: { true: { iconSize: "12px", offset: "4px" } },
        size: {
          m: {
            offset: { left: "8px", right: "8px", top: "11px", bottom: "10px" },
            textHeight: "17px",
            height: "38px",
            textStyle: "Base"
          },
          s: {
            offset: { left: "8px", right: "8px", top: "11px", bottom: "10px" },
            textHeight: "10px",
            height: "31px",
            textStyle: "Small"
          },
          l: {
            offset: { left: "8px", right: "8px", top: "11px", bottom: "10px" },
            textHeight: "27px",
            height: "48px",
            textStyle: "Big"
          }
        }
      },
      exterior: {
        dark: {
          mods: {
            active: { true: { backgroundColor: "rgba(0,0,0,1)" } },
            hover: { true: { backgroundColor: "rgba(0,0,0,1)" } },
            focused: { true: { backgroundColor: "rgba(0,0,0,1)" } },
            disabled: { true: { backgroundColor: "rgba(137,141,144,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(52,58,64,1)",
            color: "rgba(255,255,255,1)"
          }
        },
        light: {
          mods: {
            active: { true: { backgroundColor: "rgba(244,246,247,1)" } },
            hover: { true: { backgroundColor: "rgba(245,247,248,1)" } },
            focused: { true: { backgroundColor: "rgba(245,247,248,1)" } },
            disabled: { true: { backgroundColor: "rgba(251,252,252,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(248,249,250,1)",
            color: "rgba(33,37,41,1)"
          }
        },
        info: {
          mods: {
            active: { true: { backgroundColor: "rgba(0,110,145,1)" } },
            hover: { true: { backgroundColor: "rgba(0,128,158,1)" } },
            focused: { true: { backgroundColor: "rgba(0,128,158,1)" } },
            disabled: { true: { backgroundColor: "rgba(120,201,214,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(23,162,184,1)",
            color: "rgba(255,255,255,1)"
          }
        },
        warning: {
          mods: {
            active: { true: { backgroundColor: "rgba(255,159,0,1)" } },
            hover: { true: { backgroundColor: "rgba(255,170,0,1)" } },
            focused: { true: { backgroundColor: "rgba(255,170,0,1)" } },
            disabled: { true: { backgroundColor: "rgba(255,219,111,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(255,193,7,1)",
            color: "rgba(33,37,41,1)"
          }
        },
        danger: {
          mods: {
            active: { true: { backgroundColor: "rgba(201,0,0,1)" } },
            hover: { true: { backgroundColor: "rgba(207,0,0,1)" } },
            focused: { true: { backgroundColor: "rgba(207,0,0,1)" } },
            disabled: { true: { backgroundColor: "rgba(235,138,147,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(220,53,69,1)",
            color: "rgba(255,255,255,1)"
          }
        },
        success: {
          mods: {
            active: { true: { backgroundColor: "rgba(0,118,0,1)" } },
            hover: { true: { backgroundColor: "rgba(0,134,0,1)" } },
            focused: { true: { backgroundColor: "rgba(0,134,0,1)" } },
            disabled: { true: { backgroundColor: "rgba(130,204,147,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(40,167,69,1)",
            color: "rgba(255,255,255,1)"
          }
        },
        secondary: {
          mods: {
            active: { true: { backgroundColor: "rgba(26,40,53,1)" } },
            hover: { true: { backgroundColor: "rgba(53,66,77,1)" } },
            focused: { true: { backgroundColor: "rgba(53,66,77,1)" } },
            disabled: { true: { backgroundColor: "rgba(170,175,180,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(108,117,125,1)",
            color: "rgba(255,255,255,1)"
          }
        },
        primary: {
          mods: {
            active: { true: { backgroundColor: "rgba(0,50,255,1)" } },
            hover: { true: { backgroundColor: "rgba(0,74,255,1)" } },
            focused: { true: { backgroundColor: "rgba(0,74,255,1)" } },
            disabled: { true: { backgroundColor: "rgba(107,178,255,1)" } },
            preIcon: { true: { iconSize: "12px", offset: "4px" } },
            postIcon: { true: { iconSize: "12px", offset: "4px" } }
          },
          base: {
            backgroundColor: "rgba(0,123,255,1)",
            color: "rgba(255,255,255,1)"
          }
        }
      }
    }
  },
  text: {
    Heading6: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px"
    },
    Heading5: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px"
    },
    Heading4: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28px"
    },
    Heading3: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "33px"
    },
    Heading2: {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "38px"
    },
    Heading1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "48px",
      lineHeight: "56px"
    },
    Base: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "16px"
    },
    Small: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px"
    },
    BaseUnderline: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      textDecoration: "underline",
      lineHeight: "19px"
    },
    Big: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px"
    },
    BaseUpper: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "uppercase"
    },
    BaseUpperUnderline: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      textDecoration: "underline",
      lineHeight: "19px",
      textTransform: "uppercase"
    }
  },
  rounding: { small: "8px", big: "16px" },
  colors: {
    green: ["rgba(40,167,69,1)"],
    red: ["rgba(220,53,69,1)"],
    yellow: ["rgba(255,246,29,1)"],
    orange: ["rgba(255,193,7,1)"],
    blue: ["rgba(0,123,255,1)", "rgba(23,162,184,1)", "rgba(128,189,255,1)"],
    grey: [
      "rgba(33,37,41,1)",
      "rgba(52,58,64,1)",
      "rgba(108,117,125,1)",
      "rgba(248,249,250,1)",
      "rgba(207,212,217,1)",
      "rgba(233,236,239,1)",
      "rgba(173,181,189,1)"
    ],
    white: ["rgba(255,255,255,1)"]
  }
};
