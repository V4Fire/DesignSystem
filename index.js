module.exports = {
  components: {
    bRadioButton: {
      mods: {
        focused: {
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(128,189,255,1)",
              borderRadius: "16px",
              backgroundColor: "rgba(255,255,255,1)",
              boxShadow: "0px 0px rgba(0,123,255,0.25)"
            }
          }
        },
        checked: {
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(0,123,255,1)",
              borderRadius: "16px",
              backgroundColor: "rgba(0,123,255,1)"
            },
            check: {
              width: "8px",
              height: "8px",
              borderRadius: "16px",
              color: "rgba(255,255,255,1)"
            }
          }
        },
        valid: {
          true: { style: { border: "1px solid rgba(40,167,69,1)" } },
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
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(173,181,189,1)",
              borderRadius: "16px",
              backgroundColor: "rgba(248,249,250,1)"
            },
            label: { color: "rgba(173,181,189,1)" }
          }
        }
      },
      block: {
        checkbox: {
          width: "16px",
          height: "16px",
          border: "1px solid rgba(173,181,189,1)",
          borderRadius: "16px",
          backgroundColor: "rgba(255,255,255,1)"
        },
        label: { color: "rgba(33,37,41,1)", marginLeft: "8px" },
        textStyle: "Base"
      }
    },
    bInput: {
      mods: {
        size: {
          s: {
            placeholderStyle: "Small",
            placeholderColor: "rgba(108,117,125,1)",
            offset: { left: "14px", right: "14px", top: "6px", bottom: "7px" },
            lineHeight: "16px",
            height: "31px",
            textStyle: "Small"
          },
          m: {
            placeholderStyle: "Base",
            placeholderColor: "rgba(108,117,125,1)",
            offset: { left: "13px", right: "13px", top: "8px", bottom: "12px" },
            lineHeight: "16px",
            height: "38px",
            textStyle: "Base"
          },
          l: {
            placeholderStyle: "Big",
            placeholderColor: "rgba(108,117,125,1)",
            offset: {
              left: "14px",
              right: "14px",
              top: "11px",
              bottom: "12px"
            },
            lineHeight: "23px",
            height: "48px",
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
    bCircularProgress: { mods: {} },
    bCheckbox: {
      mods: {
        focused: {
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(128,189,255,1)",
              borderRadius: "4px",
              backgroundColor: "rgba(255,255,255,1)",
              boxShadow: "0px 0px rgba(0,123,255,0.25)"
            }
          }
        },
        checked: {
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(0,123,255,1)",
              borderRadius: "4px",
              backgroundColor: "rgba(0,123,255,1)"
            },
            check: {
              width: "8px",
              height: "6.5px",
              borderRadius: "none",
              color: "rgba(255,255,255,1)"
            }
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
          true: {
            checkbox: {
              width: "16px",
              height: "16px",
              border: "1px solid rgba(173,181,189,1)",
              borderRadius: "4px",
              backgroundColor: "rgba(248,249,250,1)"
            },
            label: { color: "rgba(173,181,189,1)" },
            check: {
              width: "8px",
              height: "6.5px",
              borderRadius: "none",
              color: "rgba(255,255,255,1)"
            }
          }
        }
      },
      block: {
        checkbox: {
          width: "16px",
          height: "16px",
          border: "1px solid rgba(173,181,189,1)",
          borderRadius: "4px",
          backgroundColor: "rgba(255,255,255,1)"
        },
        label: { color: "rgba(33,37,41,1)", marginLeft: "8px" },
        textStyle: "Base"
      },
      exterior: {
        switcher: {
          block: {
            checkbox: {
              width: "28px",
              height: "16px",
              border: "1px solid rgba(173,181,189,1)",
              borderRadius: "8px",
              backgroundColor: "rgba(255,255,255,1)"
            },
            check: {
              width: "12px",
              height: "12px",
              borderRadius: "16px",
              color: "rgba(173,181,189,1)"
            },
            label: { color: "rgba(33,37,41,1)" }
          }
        }
      }
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
            offset: { left: "8px", right: "8px", top: "10px", bottom: "9px" },
            lineHeight: "17px",
            height: "38px",
            textStyle: "Base"
          },
          s: {
            offset: { left: "8px", right: "8px", top: "10px", bottom: "9px" },
            lineHeight: "10px",
            height: "31px",
            textStyle: "Small"
          },
          l: {
            offset: { left: "8px", right: "8px", top: "10px", bottom: "9px" },
            lineHeight: "27px",
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
    "Heading-6": {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px"
    },
    "Heading-5": {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px"
    },
    "Heading-4": {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "28px"
    },
    "Heading-3": {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "33px"
    },
    "Heading-2": {
      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "38px"
    },
    Heading1: {
      fontFamily: "Roboto",
      fontWeight: 500,
      fontSize: "44px",
      lineHeight: "52px"
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
    "Base-Underline": {
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
    "Base-Upper": {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "uppercase"
    },
    "Base-Upper-Underline": {
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
